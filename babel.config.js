const unistylesPluginOptions = {
  autoProcessImports: ["@codemask/styles"],
  debug: true,
  root: "app",
};

module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      ["react-native-unistyles/plugin", unistylesPluginOptions],
      ["react-native-reanimated/plugin"],
    ],
    presets: ["babel-preset-expo"],
  };
};
