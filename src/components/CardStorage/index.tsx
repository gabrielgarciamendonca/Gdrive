import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import { styles } from './style';
import { DriveIcon } from '../../assets/google-drive-icon';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface CardStorageProps {
  navigate: Function;
}

export default function CardStorage(props: CardStorageProps) {
  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.topContainer }>
        <View style={ styles.wrapIconLabel }>
          <DriveIcon />
          <View style={ styles.labels }>
            <Text style={ styles.title }>Free Storage</Text>
            <Text style={ styles.informations }>7,5 Gb / 15 Gb</Text>
          </View>
        </View>
        <TouchableOpacity style={ styles.backButton } onPress={ () => props.navigate() }>
          <AntDesign name='right' size={ 24 } color='#FFF'/>
        </TouchableOpacity>
      </View>
      <View style={ styles.slideBar }>
        <View style={ styles.slideFilled }></View>
      </View>
    </SafeAreaView>
  );
}
