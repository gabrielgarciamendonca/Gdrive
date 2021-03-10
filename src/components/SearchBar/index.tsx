import React from 'react';
import { SafeAreaView, TextInput } from 'react-native';

import { styles } from './style';
import { Toogle }  from '../../assets/toogle-icon';

const SearchBar: React.FC = () => {
  return (
    <SafeAreaView style={ styles.container }>
      <Toogle />
      <TextInput style={ styles.input } placeholder="Search Files" />
    </SafeAreaView>
  );
}

export default SearchBar;