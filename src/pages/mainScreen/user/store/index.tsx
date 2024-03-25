import BaseLayout from "@components/baselayout"
import { View } from "react-native"
import { Text } from "react-native-paper"
import WebView from "react-native-webview"

const Store = () => {
  return <BaseLayout>
    <WebView source={{
      uri: 'http://114.67.231.163:8081/#/me/shop?header=0'
    }}
      style={{
        flex: 1
      }}></WebView>
  </BaseLayout>
}


export default Store
