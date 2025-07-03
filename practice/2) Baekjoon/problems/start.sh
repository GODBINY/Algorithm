#!/bin/bash

# 1. 입력 파라미터 확인
PROBLEM_NUM=$1

if [ -z "$PROBLEM_NUM" ]; then
  echo "❗ 문제 번호를 입력하세요. 예: ./start.sh 1234"
  exit 1
fi

# 2. JS 파일 생성
JS_FILE="${PROBLEM_NUM}.js"
INPUT_DIR="../inputs"
INPUT_FILE="${INPUT_DIR}/${PROBLEM_NUM}.txt"

# 3. JS 템플릿 코드 생성
cat <<EOF >"$JS_FILE"
let fs = require("fs");
let input = fs
  .readFileSync("${INPUT_FILE}")
  .toString()
  .trim()
  .split("\\n");

console.log(input);
EOF

echo "JS 파일 생성: $JS_FILE"

# 4. inputs 디렉토리 없으면 생성
if [ ! -d "$INPUT_DIR" ]; then
  mkdir -p "$INPUT_DIR"
  echo "inputs 디렉토리 생성: $INPUT_DIR"
fi

# 5. 빈 텍스트 파일 생성 (없을 때만)
if [ ! -f "$INPUT_FILE" ]; then
  touch "$INPUT_FILE"
  echo "입력 파일 생성: $INPUT_FILE"
else
  echo " 입력 파일이 이미 존재합니다: $INPUT_FILE"
fi
