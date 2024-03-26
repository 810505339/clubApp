import BaseLayout from "@components/baselayout"
import WebView from "react-native-webview"

const Service = () => {
  return <BaseLayout>
    <WebView source={{
      uri: 'http://114.67.231.163:8081/#/me/shop?header=0'
    }}
      style={{
        flex: 1
      }}></WebView>
  </BaseLayout>
}


export default Service
