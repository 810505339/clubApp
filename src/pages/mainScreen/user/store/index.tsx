import BaseLayout from "@components/baselayout"
import WebView from "react-native-webview"
import useLanguageSelect from "../hooks/useFindLanguage"


const Store = () => {

  const { data } = useLanguageSelect()



  return <BaseLayout>
    {data.language && <WebView source={{
      uri: `http://114.67.231.163:8081/#/me/shop?have=0&language=${data.language}`
    }}
      style={{
        flex: 1
      }} />}

  </BaseLayout>
}


export default Store
