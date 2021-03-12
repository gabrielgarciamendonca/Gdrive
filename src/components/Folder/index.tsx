import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import FolderIcon from '../../assets/folder-icon';
import MenuFolderIcon from '../../assets/menu-folder-icon';

import { useFonts, Poppins_500Medium, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { styles } from './style';
import AppLoading from 'expo-app-loading';

interface FolderProps {
  title: string,
  date: string,
}

export default function Folder(props: FolderProps) {

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={ {...styles.container}  }>
      <View style={ styles.icons }>
        <FolderIcon />
        <MenuFolderIcon />
      </View>
      <View style={ styles.labels }>
        <Text style={{ fontFamily: 'Poppins_500Medium', color: '#F0A714', fontSize: 14 }}>{ props.title }</Text>
        <Text style={{ fontFamily: 'Poppins_400Regular', color: '#F0A714', fontSize: 12 }}>{ props.date }</Text>
      </View>
    </SafeAreaView>
  );
}