module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
        importSource: '@dynatrace/react-native-plugin',
      },
    ],
    ["module:react-native-dotenv"],
    ['react-native-reanimated/plugin'],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@constants": "./src/constants",
          "@context": "./src/context",
          "@graphql": "./src/graphql",
          "@hooks": "./src/hooks",
          "@pages": "./src/pages",
          "@theme": "./src/theme",
          "@utils": "./src/utils",
        }
      }
    ],
  ],
};
