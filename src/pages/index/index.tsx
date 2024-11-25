import {View, Button} from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <View>
        <Button onClick={() => Taro.navigateTo({url: '/pages/preload/page_a'})}>Taro preload测试</Button>
      </View>
    </View>
  )
}
