module.exports = {
    pages: {
        loginPage: {
            entry: 'src/main.js'
        },
        workSpace: {
            entry: 'src/Pages/WorkSpace/main.js'
        },
        paymentCorrection: {
            entry: 'src/Pages/WorkSpace/PaymentCorrection/main.js'
        },
        chat: {
            entry: 'src/Pages/WorkSpace/Chat/main.js'
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