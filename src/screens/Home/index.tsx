import React from 'react';
import { SafeAreaView, View} from 'react-native';
import CardStorage from '../../components/CardStorage';
import Filter from '../../components/Filter';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';

import { styles } from './style';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.menuContainer }>
        <Header />
        <SearchBar />
        <CardStorage />
      </View>
      <View style={ styles.foldersContainer }>
        <Filter />
      </View>
    </SafeAreaView>
  );
}

export default Home;