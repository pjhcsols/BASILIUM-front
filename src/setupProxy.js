const { base_url } = require('./Backend/Axios');

const { createProxyMiddleware } = require('http-proxy-middleware');

modules.exports = (app) => {
    app.use(
        createProxyMiddleware('/goods/*',{
            target: `${base_url}`,
            changeOrigin: true
        })
    ),
    app.use(
        createProxyMiddleware('/*',{
            target: `${base_url}`,
            changeOrigin: true
        })
    ),
    app.use(
        createProxyMiddleware('/*',{
            target: 'http://localhost:3000',
            changeOrigin: true
        })
    )
};