

import WebView from "react-native-webview"
import useFindLanguage from "../hooks/useFindLanguage"
import BaseLayout from "@components/baselayout"
import { getGenericPassword } from "react-native-keychain"
import { useAsyncEffect } from 'ahooks'

const LoginPassword = () => {
  const { data } = useFindLanguage()
  useAsyncEffect(async () => {
    const generic = await getGenericPassword();

  })

  return <BaseLayout>
    {data.language && <WebView source={{
      uri: `http://localhost:5173/#/me/password?type=0&language=${data.language}&have=0&token=`
    }}
      style={{ flex: 1 }} />}
  </BaseLayout>
}




export default LoginPassword
