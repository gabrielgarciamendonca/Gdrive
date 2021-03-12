import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useFonts, Poppins_500Medium } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

import { FilterIcon } from '../../assets/filter-icon';
import { styles } from './style';

const Filter: React.FC = () => {

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={ styles.container }>
      <Text style={{ fontFamily: 'Poppins_500Medium', color: '#21205A', fontSize: 16 }}>My Folders</Text>
      <FilterIcon />
    </SafeAreaView>
  );
}

export default Filter;