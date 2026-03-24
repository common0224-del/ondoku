# Ondoku App

高校の英語授業向け音読アプリ。

## できること（初期版）
- 英文を画面に表示する
- 通し読みモードへ進む
- 1文ずつ練習モードへ進む
- 今後 OCR / 録音 / 音声認識 / 誤読ハイライトを追加する

## 技術スタック
- React Native
- Expo
- TypeScript
- React Navigation

## セットアップ
~~~bash
npx create-expo-app ondoku-app -t expo-template-blank-typescript
cd ondoku-app
npm install @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context
