import BaseLayout from "@components/baselayout"
import WebView from "react-native-webview"

const Agreement = () => {
  return < BaseLayout >
    <WebView source={{
      uri: 'http://114.67.231.163:8081/#/me/rule-list?header=0'
    }}
      style={{
        flex: 1
      }}></WebView>
  </ BaseLayout>
}


export default Agreement
