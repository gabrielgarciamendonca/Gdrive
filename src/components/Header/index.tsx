import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './style';
import { Menu }  from '../../assets/menu-button';
import { TwoPoints } from '../../assets/two-points-icon';
import { DrawerActions, useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string;
  showCancel: boolean;
}

export default function Header(props: HeaderProps) {

  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function fallBack() {
    navigation.goBack();
  }

  function openMenu() {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  return (
    <SafeAreaView style={ styles.container }>
      {props.showCancel ? (<>
        <AntDesign name='left' size={ 24 } color='#21205A' onPress={ () => { fallBack() } }/>
        <Text style={{ fontFamily: 'Poppins_500Medium', color: '#21205A', fontSize: 16 }}>{ props.title }</Text>
        <TwoPoints />
      </>) :
      (<>
        <Menu onPress={ openMenu }/>
        <Text style={{ fontFamily: 'Poppins_500Medium', color: '#21205A', fontSize: 16 }}>{ props.title }</Text>
        <View style={ styles.imageBox }></View>
      </>)
      }
      
    </SafeAreaView>
  );
}
