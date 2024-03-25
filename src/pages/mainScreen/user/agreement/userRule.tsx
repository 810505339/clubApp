import WebView from "react-native-webview"
import BaseLayout from "@components/baselayout"
const UserRule = () => {
  return <BaseLayout>
    <WebView source={{
      uri: 'http://114.67.231.163:8081/#/rule?type=SERVICE_AGREEMENT'
    }}
      style={{ flex: 1 }} />
  </BaseLayout>
}

export default UserRule
