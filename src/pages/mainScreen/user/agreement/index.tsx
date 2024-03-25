import BaseLayout from "@components/baselayout"
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View } from "react-native"
import { Divider, List } from "react-native-paper"
import { RootStackParamList } from "@router/type";


const Agreement = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return <BaseLayout>
    <View className="bg-[#191919] rounded-2xl  m-5">
      <List.Item
        title="用户协议"
        right={props => <List.Icon {...props} icon="chevron-right" />}
        onPress={() => {
          navigation.navigate('UserRule')
        }}
      />
      <Divider />
      <List.Item
        title="隐私协议"
        right={props => <List.Icon {...props} icon="chevron-right" />}
        onPress={() => {
          navigation.navigate('PrivacyRule')
        }}
      />
    </View>
  </ BaseLayout>
}


export default Agreement
