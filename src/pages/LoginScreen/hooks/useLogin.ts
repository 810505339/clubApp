import { loginApi } from '@api/login';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useRequest } from 'ahooks';
import { RootStackParamList } from '@router/type';

export type ILoginData = {
  phone?: string,
  password?: string,
  grant_type?: 'password',
  code?: string,
  username?: string,
  mobile?: string
}

export default (loginData: ILoginData, navigation: NativeStackNavigationProp<RootStackParamList>) => {

  const { runAsync, loading } = useRequest(() => loginApi({
    ...loginData
  }), {
    manual: true,
  });

  const handleLogin = async () => {
    try {
      const data = await runAsync()
      console.log(data);

      //没有人脸去人脸识别
      if (!data?.user_info?.checkFace) {
        navigation.navigate('AuthenticationSex');
        return;
      }

      //设置信息
      if (!data?.user_info?.setPersonalInfo) {
        navigation.navigate('UserInfo');
        return;
      }

      navigation.navigate('HomeTabs');
    } catch (error) {

    }
  }


  return {
    handleLogin,
    loading,
  }
}
