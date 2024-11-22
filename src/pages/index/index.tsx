import { View, Text, Video } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <View dangerouslySetInnerHTML={{__html: '123'}} />
      <Video src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' controls={false} />
    </View>
  )
}
