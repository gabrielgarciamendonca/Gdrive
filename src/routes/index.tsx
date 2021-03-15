import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import DetailStorage from '../screens/DetailStorage';
import React from 'react';
import Header from '../components/Header';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <Navigator
      screenOptions={
        { headerShown: false }
      }
    >
      <Screen
        name='Home'
        component={ Home }
        options={{
          headerShown: true,
          header: () => <Header title='My Drive' showCancel={false} />
        }}
      />
      <Screen
        name='DetailStorage'
        component={ DetailStorage }
        options={{
          headerShown: true,
          header: () => <Header title='Storage Details' showCancel={true} />
        }}
      />
    </Navigator>
  )
}