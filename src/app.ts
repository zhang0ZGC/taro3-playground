import { PropsWithChildren } from 'react'
import Taro, { useLaunch } from '@tarojs/taro'
import './app.scss'

function App({ children }: PropsWithChildren<any>) {

  useLaunch(() => {
    console.log('App launched.')

    if (process.env.TARO_ENV === 'weapp') {
      // @ts-ignore
      wx.Taro = Taro
    }
  })

  // children 是将要会渲染的页面
  return children
}

export default App
