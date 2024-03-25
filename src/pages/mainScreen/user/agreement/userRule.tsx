import WebView from "react-native-webview"

const UserRule = () => {
  return <WebView source={{
    uri: 'http://114.67.231.163:8081/#/rule?type=SERVICE_AGREEMENT'
  }}
    style={{ flex: 1 }} />
}

export default UserRule
