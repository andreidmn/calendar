module.exports = {
    devServer: {
        proxy: {
            '/api/': {
                target: 'https://calapp.superdev.ro/api/',
                pathRewrite: { '^/api': ''}
            }
        }
    }/*,
    chainWebpack: {(config) => {
        config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
    }},
    runtimeCompiler: true*/
};
