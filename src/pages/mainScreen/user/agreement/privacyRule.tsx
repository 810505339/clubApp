import BaseLayout from "@components/baselayout"
import WebView from "react-native-webview"

const PrivacyRule = () => {
  return <BaseLayout>
    <WebView source={{
      uri: 'http://114.67.231.163:8081/#/rule?type=PRIVACY_AGREEMENT'
    }}
      style={{ flex: 1 }} />
  </BaseLayout>
}

export default PrivacyRule
