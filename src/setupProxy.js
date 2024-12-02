const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/java-api',
        createProxyMiddleware({
            target: "http://localhost:8080",
            ChangeOrigin: true
        })
    );
};