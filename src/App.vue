<template>
  <!-- ユーザー名を表示する部分 -->
  <!-- myService.state.userName からユーザー名を取得して表示 -->
  <div>なまえ：{{ myService.state.userName }}</div>

  <!-- 仕事を表示する部分 -->
  <!-- myService.state.job から仕事を取得して表示 -->
  <div>しごと：{{ myService.state.job }}</div>

  <!-- ボタンをクリックしてユーザー名を「ねこハック」に更新 -->
  <!-- @click ディレクティブでクリックイベントを監視 -->
  <!-- myService.updateUserName('ねこハック') を実行 -->
  <button @click="myService.updateUserName('ねこハック')">名前書き換え</button>

  <!-- ボタンをクリックしてユーザー名をクリア -->
  <!-- @click ディレクティブでクリックイベントを監視 -->
  <!-- myService.clearUserName を実行 -->
  <button @click="myService.clearUserName">名前をクリア</button>
</template>

<script setup>
// my-service.ts からエクスポートされたモジュール全体を myService としてインポート
// このファイル内で myService という名前でサービスを利用可能にする
import * as myService from "./my-service.ts";
</script>
