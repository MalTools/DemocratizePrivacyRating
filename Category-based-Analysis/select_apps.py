import json
from collections import defaultdict
import glob
import os

per_dict = {
        'approximate location (network-based)': 'android.permission.ACCESS_COARSE_LOCATION',
        'precise location (GPS and network-based)': 'android.permission.ACCESS_FINE_LOCATION',
        'take pictures and videos': 'android.permission.CAMERA',
        'body sensors (like heart rate monitors)': 'android.permission.BODY_SENSORS',
        'record audio': 'android.permission.RECORD_AUDIO',
        'read phone status and identity': 'android.permission.READ_PHONE_STATE',
        "add or modify calendar events and send email to guests without": 'android.permission.WRITE_CALENDAR',
        'read calendar events plus confidential information': 'android.permission.READ_CALENDAR',
        'read call log': 'android.permission.READ_CALL_LOG',
        'write call log': 'android.permission.WRITE_CALL_LOG',
        'find accounts on the device': 'android.permission.GET_ACCOUNTS',
        'modify your contacts': 'android.permission.WRITE_CONTACTS',
        'read your contacts': 'android.permission.READ_CONTACTS',
        'read your text messages (SMS or MMS)': 'android.permission.READ_SMS',
        'receive text messages (SMS)': 'android.permission.RECEIVE_SMS',
        'receive text messages (WAP)': 'android.permission.RECEIVE_WAP_PUSH',
        'receive text messages (MMS)': 'android.permission.RECEIVE_MMS',
        'send SMS messages': 'android.permission.SEND_SMS',
        'read cell broadcast messages': 'android.permission.READ_CELL_BROADCASTS',
        'read the contents of your USB storage': 'android.permission.READ_EXTERNAL_STORAGE',
        'modify or delete the contents of your USB storage': 'android.permission.WRITE_EXTERNAL_STORAGE',
        'access USB storage filesystem': 'android.permission.MANAGE_EXTERNAL_STORAGE',
        }

# genre = 'TOOLS'
# files = glob.glob("data/crawled_permission/%s/vpn/*.json" % genre)
genre = 'COMICS'
files = glob.glob("data/crawled_permission/%s/*.json" % genre)

ignore_apps = []


# Merge permission data from all apps
def load_permissions(files):
    all_apps_permissions = []
    file_names = []
    for file in files:
        if os.path.basename(file) in ignore_apps :
            continue
        with open(file, "r") as f:
            permissions = json.load(f)
            # Flatten each app's permissions into a set, keeping only permissions of interest
            app_permissions = set()
            for key, values in permissions.items():
                for value in values:
                    if value in per_dict:
                        app_permissions.add(value)
            all_apps_permissions.append(app_permissions)
            file_names.append(os.path.basename(file))
    return all_apps_permissions, file_names


# Greedy algorithm to solve minimum set cover problem
def find_minimal_representative_apps(all_apps_permissions, file_names, installs):
    # Universal set of all permissions
    all_permissions = set.union(*all_apps_permissions)

    # Record indices of selected representative apps
    selected_apps = []

    # Remaining permissions that need to be covered
    remaining_permissions = all_permissions.copy()

    while remaining_permissions:
        # Greedily select the app that covers the most remaining permissions
        best_app_index = -1
        best_app_coverage = set()
        highest_installs = -1

        for i, app_permissions in enumerate(all_apps_permissions):
            coverage = app_permissions & remaining_permissions
            if len(coverage) > len(best_app_coverage) or (
                    len(coverage) == len(best_app_coverage) and installs[file_names[i]] > highest_installs
            ):
                best_app_index = i
                best_app_coverage = coverage
                highest_installs = installs[file_names[i]]

        # Add the selected app to the representative set
        selected_apps.append(best_app_index)
        # Update remaining permissions
        remaining_permissions -= best_app_coverage

    # Return selected file names
    return selected_apps, [file_names[i] for i in selected_apps]


if __name__ == "__main__":
    genre_dir = './data/crawled_data/' + genre
    installs = {}
    for file in os.listdir(genre_dir):
        with open(os.path.join(genre_dir, file), 'r') as f:
            data = json.load(f)
            realInstalls = data['realInstalls']
            installs[file] = realInstalls

    # Load all app permissions
    all_apps_permissions, file_names = load_permissions(files)

    # Find the minimal representative app set
    indices, minimal_representative_apps = find_minimal_representative_apps(all_apps_permissions, file_names, installs)

    print("Selected minimal representative apps:", minimal_representative_apps)
    for app_index, app in zip(indices, minimal_representative_apps):
        print(app, all_apps_permissions[app_index])
