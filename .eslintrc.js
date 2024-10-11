module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: 'babel-eslint', // Babel을 사용하도록 ESLint에 명시
  parserOptions: {
    requireConfigFile: false, // Babel 설정 파일을 찾지 못하는 경우에도 ESLint가 동작하게 함
  },
};
