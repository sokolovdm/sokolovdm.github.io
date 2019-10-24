module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/sokolovdm/'
        : '/',
    presets: [
      '@vue/cli-plugin-babel/preset'
    ]
};

