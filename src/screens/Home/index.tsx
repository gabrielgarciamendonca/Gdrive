import React from 'react';
import { SafeAreaView} from 'react-native';
import CardStorage from '../../components/CardStorage';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';

import { styles } from './style';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={ styles.container }>
      <Header />
      <SearchBar />
      <CardStorage />
    </SafeAreaView>
  );
}

export default Home;