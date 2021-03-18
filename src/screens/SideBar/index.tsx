import React from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './style';
import { DrawerActions } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';


export default function SideBar({ progress, navigation, ...rest }: any) {
  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  return (
    <Animated.View style={{ transform: [{ translateX }] }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.topMenu}>
          <View style={styles.textsContainer}>
            <View style={styles.imageContainer}></View>
            <View>
              <Text style={styles.wellcomePhrase}>Hey</Text>
              <Text style={styles.name}>Gabriel M.</Text>
            </View>
          </View>
          <RectButton style={ styles.buttonContainer } onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
            <AntDesign  name='close' size={ 24 } color='#FFF' onPress={ () => {  }}/>
          </RectButton>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
}