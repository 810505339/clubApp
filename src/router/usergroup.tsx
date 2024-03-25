import { Stack } from './index';
import SystemMessage from '@pages/mainScreen/user/systemmessage';
import SystemMessageInfo from '@pages/mainScreen/user/systemmessage/info';
import Account from '@pages/mainScreen/user/account';
import Orders from '@pages/mainScreen/user/orders';
import OrdersInfo from '@pages/mainScreen/user/orders/info';
import Coupons from '@pages/mainScreen/user/coupons';
import Information from '@pages/mainScreen/user/information';

import Store from '@pages/mainScreen/user/store';
import Service from '@pages/mainScreen/user/service';
import Agreement from '@pages/mainScreen/user/agreement';




import { useTranslation } from 'react-i18next';

const LoginGroup = () => {
  const { t } = useTranslation();

  return <Stack.Group>
    <Stack.Screen
      name="SystemMessage"
      options={{ headerShown: true }}
      component={SystemMessage}
    />


    <Stack.Screen
      name="SystemMessageInfo"
      component={SystemMessageInfo}

    />
    <Stack.Screen
      name="Account"
      component={Account}

    />

    <Stack.Screen
      name="Service"
      component={Service}

    />


    <Stack.Screen
      name="Store"
      component={Store}
    />
    <Stack.Screen
      name="Agreement"
      component={Agreement}
    />


    <Stack.Screen name="Orders" component={Orders} />
    <Stack.Screen name="OrdersInfo" options={{ title: t('default.titleList.ordersInfo') }} component={OrdersInfo} initialParams={{ orderContext: [] }} />
    <Stack.Screen name="Coupons" component={Coupons} />
    <Stack.Screen name="Information" component={Information} />
  </Stack.Group>;
};

export default LoginGroup;
