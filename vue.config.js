module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    },
    devServer:{
        proxy:{
            ["/api"]:{
                target:'http://trading.loidair.com',
                changeOrigin:true,
                pathRewrite: {
                    ['^/api']: ''
                }
            }
        }
    }
}

