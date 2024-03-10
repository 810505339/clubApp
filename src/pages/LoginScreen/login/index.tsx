import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { RootStackParamList } from '@router/type';
import BaseLayout from '@components/baselayout';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const bgImage = require('@assets/imgs/login/bg.png');


const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function handleLogin() {
    navigation.navigate('LoginOrRegister');
  }
  return (
    <BaseLayout source={bgImage}>
      <View className="absolute left-16 right-16 bottom-0 h-64">
        <Button
          mode="outlined"
          style={{ borderColor: '#EE2737', height: 50, borderRadius: 33 }}
          labelStyle={{
            fontSize: 18,
            color: '#EE2737',
            fontWeight: '600',
          }}
          contentStyle={{ height: 50 }}
          onPress={handleLogin}>
          登录 / 注册
        </Button>
        <View className='flex-row items-center justify-center'>
          <View className="m-auto border  mt-8 w-[50%] flex-row items-center justify-between">
            <View className="w-8 h-0 border-t border-[#ffffff7f]  " />
            <Text className="text-xs text-[#ffffff7f]">
              三方账号登录
            </Text>
            <View className="w-8 h-0 border-t border-[#ffffff7f]" />
          </View>
        </View>

      </View>
    </BaseLayout>
  );
};

export default Login;
