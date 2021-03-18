import React from 'react';
import { View, ScrollView } from 'react-native';
import CardStorage from '../../components/CardStorage';
import Filter from '../../components/Filter';
import Folder from '../../components/Folder';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import { useNavigation } from '@react-navigation/native';

import { styles } from './style';

export default function Home() {

  const navigation = useNavigation();

  function handlePushDetailStorage() {
    navigation.navigate('DetailStorage');
  }

  return (
    <ScrollView style={ styles.container }>
      <View style={ styles.menuContainer }>
        <SearchBar />
        <CardStorage navigate={ handlePushDetailStorage }/>
      </View>
      <View style={ styles.foldersContainer }>
        <View style={ styles.filter }>
          <Filter />
        </View>
        <View style={ styles.folders }>
          <Folder title="Web Design" date="20 Dec 2020"/>
          <Folder title="App Design" date="21 Dec 2020"/>
          <Folder title="Font Collections" date="22 Dec 2020"/>
        </View>
      </View>
    </ScrollView>
  );
}