const withPlugins = require('next-compose-plugins');
const withCss = require('@zeit/next-css')
const withSaas = require('@zeit/next-sass')


module.exports = withPlugins(
  [
    [
      withCss(withSaas({
        devIndicators: {
          autoPrerender: true,
        },
        webpack: (config, { isServer }) => {
          if (isServer) {
            const antStyles = /antd\/.*?\/style\/css.*?/
            const origExternals = [...config.externals]
            config.externals = [
              (context, request, callback) => {
                if (request.match(antStyles)) return callback()
                if (typeof origExternals[0] === 'function') {
                  origExternals[0](context, request, callback)
                } else {
                  callback()
                }
              },
              ...(typeof origExternals[0] === 'function' ? [] : origExternals),
            ]
      
            config.module.rules.unshift({
              test: antStyles,
              use: 'null-loader',
            })

            config.node = {
              fs: 'empty'
            }

          }
          return config
        },
      }))
    ]
  ],{

    publicRuntimeConfig: {
      AUTH_ENDPOINT:"https://auth.pasajob.apolidata.com/graphql",
      HASURA_GRAPHQL:"http://localhost:8080/v1/graphql"
    }

  });