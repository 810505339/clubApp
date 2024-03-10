import BaseLayout from '@components/baselayout';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from 'react-native-paper';
import { RootStackParamList } from '@router/type';

const App = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const toUrl = () => {
    /* */
    navigation.navigate('UserInfo')
  }
  return (
    <BaseLayout>
      <Button onPress={toUrl}>toUrl</Button>
    </BaseLayout>
  );
};



export default App;
