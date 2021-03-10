import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_500Medium } from '@expo-google-fonts/poppins';

import { styles } from './style';
import { Menu }  from '../../assets/menu-button';

const Header: React.FC = () => {

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={ styles.container }>
      <Menu />
      <Text style={{ fontFamily: 'Poppins_500Medium', color: '#21205A', fontSize: 16 }}>My Drive</Text>
      <View style={ styles.imageBox }></View>
    </SafeAreaView>
  );
}

export default Header;