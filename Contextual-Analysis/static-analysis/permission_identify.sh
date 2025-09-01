#!/bin/bash

# 确定的android-platforms目录
platformDir="/Users/liuwang/PycharmProjects/javaProject/android-platforms"

# 获取命令行参数
apkFile=$1
scanFile=$2
outDir=$3

# 第一个命令
timeout --kill-after=10s 30m java -Xmx40960m -jar oscanner-1.0.jar "$apkFile" "$scanFile" "$platformDir"
sleep 1
# 第二个命令
python3 permission_identify.py --apk "$apkFile" --scanfile "$scanFile" --outdir "$outDir"
