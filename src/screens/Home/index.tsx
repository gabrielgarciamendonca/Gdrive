import React from 'react';
import { SafeAreaView} from 'react-native';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';

import { styles } from './style';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={ styles.container }>
      <Header />
      <SearchBar />
    </SafeAreaView>
  );
}

export default Home;