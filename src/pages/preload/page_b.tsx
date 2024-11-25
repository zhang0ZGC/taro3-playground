import {Button, View} from "@tarojs/components";
import Taro, {useDidShow} from "@tarojs/taro";
import {useState} from "react";


const PageB = () => {
  const [preloadData, setPreloadData] = useState<any>()


  useDidShow(() => {
    setPreloadData(Taro.getCurrentInstance().preloadData)
  })


  return (
    <View>
      <View>
        当前页面preloadData：{JSON.stringify(preloadData)}
      </View>

      <View>
        <Button onClick={() => Taro.navigateBack()}>返回PageA</Button>
      </View>
    </View>
  )
}

export default PageB
