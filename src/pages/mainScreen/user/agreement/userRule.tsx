import WebView from "react-native-webview"
import BaseLayout from "@components/baselayout"
import useLanguageSelect from "../hooks/useFindLanguage"
const UserRule = () => {
  const { data } = useLanguageSelect()
  return <BaseLayout>
    {data.language && <WebView source={{
      uri: `http://114.67.231.163:8081/#/rule?type=PRIVACY_AGREEMENT&language=${data.language}&have=0`
    }}
      style={{ flex: 1 }} />}

  </BaseLayout>
}

export default UserRule
