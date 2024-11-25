import {Button, View} from "@tarojs/components";
import Taro, {useDidShow} from "@tarojs/taro";
import {useState} from "react";


const PageA = () => {

  const [preloadData, setPreloadData] = useState<any>()

  const handleNavigate = () => {
    Taro.preload('message', '这是来自 PageA 的preload数据')
    Taro.navigateTo({
      url: '/pages/preload/page_b'
    })
  }

  useDidShow(() => {
    setPreloadData(Taro.getCurrentInstance().preloadData)
  })


  return (
    <View>
      <View>
        当前页面preloadData：{JSON.stringify(preloadData)}
      </View>

      <View>
        <Button onClick={handleNavigate}>调用preload，并跳转到PageB</Button>
      </View>
    </View>
  )
}

export default PageA
