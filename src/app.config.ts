export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  subpackages: [
    {
      root: 'pages/preload',
      pages: [
        'page_a',
        'page_b'
      ],
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
