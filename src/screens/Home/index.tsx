import React from 'react';
import { SafeAreaView} from 'react-native';
import Header from '../../components/Header';

import { styles } from './style';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={ styles.container }>
      <Header />
    </SafeAreaView>
  );
}

export default Home;