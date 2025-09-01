import pandas as pd
import re
import numpy as np
from androguard.core.bytecodes.apk import APK
import os
import csv
import argparse
import logging
import json

# 配置日志
# logging.basicConfig(filename='example.log', level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

runtime_perms = {'READ_MEDIA_VISUAL_USER_SELECTED', 'WRITE_CALL_LOG', 'ACCESS_BACKGROUND_LOCATION', 'RECEIVE_SMS', 'ACCESS_MEDIA_LOCATION', 'RECEIVE_WAP_PUSH', 'CAMERA', 'READ_MEDIA_AUDIO', 'WRITE_EXTERNAL_STORAGE', 'ACCESS_FINE_LOCATION', 'READ_PHONE_STATE', 'READ_SMS', 'QUERY_ALL_PACKAGES', 'RECORD_AUDIO', 'BODY_SENSORS_BACKGROUND', 'READ_CALL_LOG', 'GET_INSTALLED_APPS', 'READ_EXTERNAL_STORAGE', 'WRITE_CONTACTS', 'READ_CONTACTS', 'GET_ACCOUNTS', 'ACTIVITY_RECOGNITION', 'SEND_SMS', 'READ_MEDIA_VIDEO', 'READ_MEDIA_IMAGES', 'BODY_SENSORS', 'READ_CELL_BROADCASTS', 'READ_CALENDAR', 'WRITE_CALENDAR', 'MANAGE_EXTERNAL_STORAGE', 'RECEIVE_MMS', 'ACCESS_COARSE_LOCATION', 'READ_PHONE_NUMBERS'}
special_perms = {'REQUEST_INSTALL_PACKAGES', 'MANAGE_EXTERNAL_STORAGE', 'PACKAGE_USAGE_STATS', 'BIND_NOTIFICATION_LISTENER_SERVICE'}


def get_manifest_permission(apk_path):
    apk = APK(apk_path)
    if apk.is_valid_APK():
        permissions = apk.get_permissions()
        permission_list = [per.split('.')[-1] for per in permissions]
        return permission_list
    else:
        print('The input apk file is not a valid APK')
        return False


def get_class_api():
    file = './asset/permission_class_API.xlsx'
    class_perm_map = {}
    class_api_perm_map = {}
    # 读取 Excel 表格
    df_1 = pd.read_excel(file, sheet_name='敏感权限')

    for index, row in df_1.iterrows():
        col_andr_per, col_class, col_api = row.loc['权限'], row.loc['类名'], row.loc['方法名']
        col_per = col_andr_per.lstrip('android.permission.')
        if col_class is np.nan:
            continue
        if col_api is np.nan:
            if 'CONTENT_URI' in col_class:
                if col_per.startswith('READ'):
                    class_perm_map[col_class+'->query'] = col_per
                if col_per.startswith('WRITE'):
                    class_perm_map[col_class+'->insert'] = col_per
                    class_perm_map[col_class+'->update'] = col_per
                    class_perm_map[col_class+'->delete'] = col_per
                    class_perm_map[col_class+'->bulkInsert'] = col_per

            else:
                class_perm_map[col_class] = col_per
        else:
            api = re.search(r'\b(\w+)\(', col_api).group(1)
            # class_api_pair.add((col_class, api))
            class_api_perm_map[(col_class, api)] = col_per

    return class_perm_map, class_api_perm_map


def match_class_api(oscanner_res, manifest_perm_list):
    class_perm_map, class_api_perm_map = get_class_api()
    # per_class_pairs = set()
    api_class_pairs = set()
    with open(oscanner_res, 'r') as f:
        for line in f.readlines():
            if not line.startswith(' '):  # 第1层
                first_level = line.rstrip('\n')
            if line.startswith(' ' * 4) and not line.startswith(' ' * 8) and not line.startswith(' ' * 12):
                second_level = line.lstrip().rstrip('\n')
            if line.startswith(' ' * 8) and not line.startswith(' ' * 12):  # 第3层
                third_level = line.lstrip().rstrip('\n')[1:-1]
                classname = third_level.split(':')[0].replace('$', '.')
                api = third_level.split(':')[1].strip().split()[1].split('(')[0]
                for classn in class_perm_map.keys():
                    if classname.startswith(classn):
                        per = class_perm_map[classn]
                        if per in manifest_perm_list:
                            # per_class_pairs.add((per, second_level, first_level))
                            api_class_pairs.add((third_level, second_level, first_level, per))
                            # print((third_level, second_level, first_level, per))
                            break
                for class_api in class_api_perm_map.keys():
                    if class_api[1] == api and classname.startswith(class_api[0]):
                        per = class_api_perm_map[class_api]
                        if per in manifest_perm_list:
                            # per_class_pairs.add((per, second_level, first_level))
                            api_class_pairs.add((third_level, second_level, first_level, per))
                            # print((third_level, second_level, first_level, per))
                            break
            if line.startswith(' ' * 12):  # 第4层
                forth_level = line.lstrip().rstrip('\n').replace('$', '.')
                if forth_level.startswith('android.permission.'):
                    per = forth_level.lstrip('android.permission.')
                    if per in manifest_perm_list:
                        if per not in runtime_perms and per not in special_perms:
                            continue
                        # per_class_pairs.add((per, second_level, first_level))
                        api_class_pairs.add((forth_level, second_level, first_level, per))

                if forth_level in class_perm_map.keys():
                    per = class_perm_map[forth_level]
                    if per in manifest_perm_list:
                        if per not in runtime_perms and per not in special_perms:
                            continue
                        # per_class_pairs.add((per, second_level, first_level))
                        api_class_pairs.add((forth_level, second_level, first_level, per))

    return api_class_pairs


def libradar_map(libradar_res_file):
    pkg_map = {}
    with open(libradar_res_file) as f:
        for line in f:
            n1, n2, simi = line.rstrip('\n').split()
            if simi != 'None' and float(simi) > 0.5:
                pkg_map[n1] = n2
    return pkg_map


def tag_pkg():  # tag_rules
    pkgname_libtype = {}
    with open('./asset/build_tag_rules.csv', 'r') as f:
        reader = csv.reader(f)
        for row in reader:
            pkgname, libtype = row[0], row[1]
            pkgname = pkgname.replace('/', '.')
            pkgname_libtype[pkgname] = libtype
    return pkgname_libtype


def identify_api_purpose(output_dir, appname, appclus, api_class_pairs, libradar_file=False):
    pkgname_libtype = tag_pkg()
    if libradar_file:
        pkgname_map = libradar_map(os.path.join(output_dir, 'libradar_res', appname + 'txt'))
    else:
        pkgname_map = {}

    # per_lib_purp = set()
    # for per_class_pair in per_class_pairs:
    #     per, second_level, class_name = per_class_pair
    #     api_in_third = False
    #     for pkgname in pkgname_libtype.keys():
    #         if class_name.startswith(pkgname):
    #             # per_lib_pair.add((per, pkgname_libtype[pkgname]))
    #             per_lib_purp.add((per, second_level, class_name, pkgname_libtype[pkgname]))
    #             api_in_third = True
    #             break
    #         else:
    #             for n1 in pkgname_map.keys():  # 映射到libradar输出库
    #                 if class_name.startswith(n1.lstrip('L').replace('/', '.')):
    #                     class_name_alt = pkgname_map[n1].lstrip('L').replace('/', '.')
    #                     if class_name_alt.startswith(pkgname):
    #                         # api_lib_pair.add((per, pkgname_libtype[pkgname]))
    #                         per_lib_purp.add((per, second_level, class_name, pkgname_libtype[pkgname]))  # zxy add
    #                         api_in_third = True
    #                         break
    #     if not api_in_third:
    #         # per_lib_pair.add((per, appclus))
    #         per_lib_purp.add((per, second_level, class_name, appclus))  # inner func
    #
    # perm_dict = {}
    # for pair in per_lib_purp:
    #     perm_key = "android.permission." + pair[0]
    #     if perm_key not in perm_dict.keys():
    #         perm_dict[perm_key] = [{'package': pair[1], 'second': pair[2], 'purpose': pair[3]}]
    #     else:
    #         perm_dict[perm_key].append({'package': pair[1], 'second': pair[2], 'purpose': pair[3]})
    # out_json = {appname: perm_dict}
    #
    # if os.path.exists(os.path.join(output_dir, 'perm_lib_purpose', appname + '.json')):
    #     logging.info('There exists file %s. Removing it ......' % (
    #         os.path.join(output_dir, 'perm_lib_purpose', appname + '.json')))
    #     os.remove(os.path.join(output_dir, 'perm_lib_purpose', appname + '.json'))
    # with open(os.path.join(output_dir, 'perm_lib_purpose', appname + '.json'), 'a') as file:
    #     file.write(json.dumps(out_json, indent=4))
    # print('Result saved in ' + os.path.join(output_dir, 'perm_lib_purpose', appname + '.json'))

    api_lib_purp = set()
    for api_class_pair in api_class_pairs:
        api, second_level, class_name, per = api_class_pair
        api_in_third = False
        for pkgname in pkgname_libtype.keys():
            if class_name.startswith(pkgname):
                api_lib_purp.add((api, second_level, class_name, per, pkgname_libtype[pkgname] + ' Libraries'))
                api_in_third = True
                break
            else:
                for n1 in pkgname_map.keys():  # 映射到libradar输出库
                    if class_name.startswith(n1.lstrip('L').replace('/', '.')):
                        class_name_alt = pkgname_map[n1].lstrip('L').replace('/', '.')
                        if class_name_alt.startswith('L' + pkgname):
                            api_lib_purp.add((api, second_level, class_name, per, pkgname_libtype[pkgname] + ' Libraries'))
                            api_in_third = True
                            break
        if not api_in_third:
            api_lib_purp.add((api, second_level, class_name, per, appclus))

    perm_dict = {}
    for pair in api_lib_purp:
        perm_key = "android.permission." + pair[3]
        if perm_key not in perm_dict.keys():
            perm_dict[perm_key] = [{'class': pair[2], 'method': pair[1], 'invokedAPI': pair[0], 'data controller': pair[4]}]
        else:
            perm_dict[perm_key].append({'class': pair[2], 'method': pair[1], 'invokedAPI': pair[0], 'data controller': pair[4]})
    out_json = {appname: perm_dict}
    # api_dict = {}
    # for pair in api_lib_purp:
    #     if pair[0] not in api_dict.keys():
    #         api_dict[pair[0]] = [{'package': pair[1], 'second': pair[2], 'purpose': pair[3]}]
    #     else:
    #         api_dict[pair[0]].append({'package': pair[1], 'second': pair[2], 'purpose': pair[3]})
    # api_out_json = {appname: api_dict}
    if os.path.exists(os.path.join(output_dir, 'api_lib_purpose', appname+'.json')):
        logging.info('There exists file %s. Removing it ......' % (os.path.join(output_dir, 'api_lib_purpose', appname+'.txt')))
        os.remove(os.path.join(output_dir, 'api_lib_purpose', appname+'.json'))
    with open(os.path.join(output_dir, 'api_lib_purpose', appname+'.json'), 'a') as file:
        file.write(json.dumps(out_json, indent=4))
    print('Result saved in ' + os.path.join(output_dir, 'api_lib_purpose', appname+'.json'))


def main(apk_path, oscanner_res, output_dir, appclus='app itself', libradar_file=None):
    Manifest_Permission = get_manifest_permission(apk_path)
    if not Manifest_Permission:
        logging.warning('******Note: no permission detected in Manifest file.******')
    api_class_pairs = match_class_api(oscanner_res, Manifest_Permission)
    # print(api_class_pairs)
    appname = os.path.splitext(apk_path.split('/')[-1])[0]
    # os.makedirs(os.path.join(output_dir, 'perm_lib_purpose'), exist_ok=True)

    os.makedirs(os.path.join(output_dir, 'api_lib_purpose'), exist_ok=True)
    identify_api_purpose(output_dir, appname, appclus, api_class_pairs, libradar_file)


if __name__ == '__main__':

    def check_file_path(file_path):
        if not os.path.exists(file_path):
            raise argparse.ArgumentTypeError(f"The file '{file_path}' does not exist.")
        return file_path

    parser = argparse.ArgumentParser(description='Command-line tool for analyzing APK files and their code scanning results.')
    parser.add_argument('--apk',
                        help='Path to the APK file to be analyzed. Example: --apk path/to/A.apk',
                        type=check_file_path, required=True)
    parser.add_argument('--scanfile',
                        help="Path to the result file of the APK's code scanning. Example: --scanner path/to/A.txt",
                        type=check_file_path, required=True)
    parser.add_argument('--outdir',
                        help="Directory for the output result file. Example: --outdir path/to/output/directory",
                        type=check_file_path, required=True)
    parser.add_argument('--cluster',
                        help="The cluster of the analyzed app. Example: --cluster TOOLS-0. If not specified, the default is 'app'.",
                        default='app')
    parser.add_argument('--libradar',
                        help="Whether to use the result file of Libradar. Example:  --libradar True or False. The default is False.",
                        default=False)
    parser.add_argument('--checkapi',
                        help="Whether to output the 'api_library_purpose' result. Example: --checkapi True or False. The default is True.",
                        default=True)

    args = parser.parse_args()
    logging.info('apk: ' + str(args.apk))
    logging.info('scanfile: '+ str(args.scanfile))
    logging.info('outdir: ' + str(args.outdir))
    logging.info('cluster: ' + str(args.cluster))
    logging.info('libradar: ' + str(args.libradar))
    logging.info('checkapi: ' + str(args.checkapi))

    main(apk_path=args.apk, oscanner_res=args.scanfile, output_dir=args.outdir,
         appclus=args.cluster, libradar_file=args.libradar)


