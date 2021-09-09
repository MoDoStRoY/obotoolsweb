module.exports = {
    pages: {
        loginPage: {
            entry: 'src/main.js',
            title: 'OBO Tools'
        },
        workSpace: {
            entry: 'src/Pages/WorkSpace/main.js',
            title: 'OBO Tools'
        },
        paymentCorrection: {
            entry: 'src/Pages/WorkSpace/PaymentCorrection/main.js',
            title: 'OBO Tools'
        },
        chat: {
            entry: 'src/Pages/WorkSpace/Chat/main.js',
            title: 'OBO Tools'
        }
    },

    configureWebpack: {
        resolve: {extensions: ['.js', '.ts']},
        module: {
            rules: [
                { test: /\.vue$/, include: /ClientApp/, loader: 'vue-loader', options: { loaders: { js: 'ts-loader' } } },
                { test: /\.ts$/, include: /ClientApp/, use: [
                        {
                            loader: 'ts-loader',
                            options: {
                                appendTsSuffixTo: [/\.vue$/]
                            }
                        }
                    ] }]
        }
    }
}