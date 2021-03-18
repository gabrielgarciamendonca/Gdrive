import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import TotalCapacity from '../../components/TotalCapacity';

export default function DetailStorage() {
  return (
    <SafeAreaView>
      <Text>
        <TotalCapacity />
      </Text>
    </SafeAreaView>
  )
}