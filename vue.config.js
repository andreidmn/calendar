module.exports = {
    devServer: {
        proxy: {
            '/api/': {
                target: 'https://calapp.superdev.ro/api/',
                pathRewrite: { '^/api': ''}
            }
        }
    }
};

