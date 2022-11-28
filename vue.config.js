const path = require("path");

module.exports = {
    publicPath:'/webpage/',
    productionSourceMap:false,
    configureWebpack: {
        devServer: {
            open: true,
            host: "0.0.0.0",
            port: 8080,
            // https: true,
            proxy: {
                // 配置跨域
                "/api": {
                    // target: "http://112.124.14.136:8080",
                    target: "http://192.168.0.44:15000",
                    ws: true,
                    changeOrigin: true,
                    secure: false,
                },
            },
        },
    },
};
