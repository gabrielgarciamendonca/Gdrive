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
      <Header />
      <SearchBar />
      <CardStorage />
      <View style={ styles.foldersContainer }>
        <Filter />
      </View>
    </SafeAreaView>
  );
}

export default Home;