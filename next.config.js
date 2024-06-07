const path = require('path');

module.exports = {
  webpack: (cfg) => {
      cfg.module.rules.push(
          {
              test: /\.md$/,
              loader: 'frontmatter-markdown-loader',
              options: { mode: ['react-component'] }
          }
      )
      return cfg
  },
  output: 'export',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  trailingSlash: true,
//   async redirects() {
//     return [
//         {
//             source: '/src/pages',
//             destination: '/',
//             permanent: true,
//         },
//     ];
//   },
};