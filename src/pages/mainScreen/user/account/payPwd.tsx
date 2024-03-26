import WebView from "react-native-webview"
import useFindLanguage from "../hooks/useFindLanguage"
import BaseLayout from "@components/baselayout"

const PayPwd = () => {
  const { data } = useFindLanguage()

  return <BaseLayout>
    {data.language && <WebView source={{
      uri: `http://localhost:5173/#/me/password?type=1&language=${data.language}&have=0&token=`
    }}
      style={{ flex: 1 }} />}
  </BaseLayout>
}

export default PayPwd
