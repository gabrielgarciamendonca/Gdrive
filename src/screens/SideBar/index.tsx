import React from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './style';
import { DrawerActions } from '@react-navigation/native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';


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
        <View style={styles.itemsMenu}>
          <TouchableOpacity style={styles.item}>
            <AntDesign style={{marginRight: 20}} name='clockcircle' size={ 24 } color='#FFF' onPress={ () => {  }}/>
            <Text style={{color: '#FFF'}}>Recent</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <AntDesign style={{marginRight: 20}} name='star' size={ 24 } color='#FFF' onPress={ () => {  }}/>
            <Text style={{color: '#FFF'}}>Favourite</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <AntDesign style={{marginRight: 20}} name='notification' size={ 24 } color='#FFF' onPress={ () => {  }}/>
            <Text style={{color: '#FFF'}}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <AntDesign style={{marginRight: 20}} name='setting' size={ 24 } color='#FFF' onPress={ () => {  }}/>
            <Text style={{color: '#FFF'}}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <AntDesign style={{marginRight: 20}} name='info' size={ 24 } color='#FFF' onPress={ () => {  }}/>
            <Text style={{color: '#FFF'}}>Help & Feedback</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logout}>
          <TouchableOpacity style={styles.item}>
            <AntDesign style={{marginRight: 20}} name='logout' size={ 24 } color='#FFF' onPress={ () => {  }}/>
            <Text style={{color: '#FFF'}}>Log out</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
}