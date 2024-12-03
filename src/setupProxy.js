const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/java-api',
        createProxyMiddleware({
            target: "http://10.0.0.26:8080",
            ChangeOrigin: true
        })
    );
};