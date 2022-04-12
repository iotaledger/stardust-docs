const path = require('path');

module.exports = {
    title: 'Stardust Documentation',
    url: '/',
    baseUrl: '/',
    themes: ['@docusaurus/theme-classic'],
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'stadust-docs',
                path: path.resolve(__dirname, './docs'),
                routeBasePath: 'stardust-docs',
                sidebarPath: path.resolve(__dirname, './sidebars.js'),
                remarkPlugins: [require('remark-code-import'), require('remark-import-partial'), require('remark-remove-comments')],
            }
        ],
    ],
    staticDirectories: [path.resolve(__dirname, './static')],
};