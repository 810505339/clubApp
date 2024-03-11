import BaseLayout from '@components/baselayout';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Text } from 'react-native-paper';
import { RootStackParamList } from '@router/type';
import { remapProps } from 'nativewind'

remapProps(Text, {
  className: 'style'
})
const TestText = () => {
  /* 测试Text */
  return <Text className=' text-red-500 font-bold text-right'>11</Text>
}


const App = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const toUrl = () => {
    /* */
    navigation.navigate('Verification', {
      phone: '123'
    })
  }
  return (
    <BaseLayout>
      <Button onPress={toUrl}>toUrl</Button>
      <TestText />
    </BaseLayout>
  );
};



export default App;
