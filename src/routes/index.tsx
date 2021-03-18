// import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import DetailStorage from '../screens/DetailStorage';
import React from 'react';
import Header from '../components/Header';
import { useWindowDimensions } from 'react-native';
import SideBar from '../screens/SideBar';

const { Navigator, Screen } = createDrawerNavigator();

export default function Routes() {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  return (
    <Navigator
      screenOptions={
        { headerShown: false }
      }
      drawerStyle={
        {
          ...isLargeScreen ? null : { width: '100%' }, 
          backgroundColor: '#4378DB',
        }
      }
      drawerContent={(props) => <SideBar {...props} />}
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