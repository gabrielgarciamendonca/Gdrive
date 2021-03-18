import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PieChart } from 'react-native-chart-kit'
import { Dimensions, View, Text } from 'react-native'
import { styles } from './style';


export default function TotalCapacity() {

  const screenWidth = Dimensions.get('window').width
  const data = [
    { name: 'Images', size: 2.5, color: '#4378DB' },
    { name: 'Apps', size: 1.5, color: '#28A164' },
    { name: 'Videos', size: 2, color: '#F0A714' },
    { name: 'Documents', size: 1, color: '#F35555' },
    { name: 'Others', size: 0.5, color: '#21205A' }
  ];
  const chartConfig = {
    backgroundGradientFrom: '#FFF',
    backgroundGradientTo: '#FFF',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  }

  return (
    <SafeAreaView>
      <View style={ styles.container }>
        <PieChart
          data={data}
          width={screenWidth}
          height={200}
          chartConfig={chartConfig}
          accessor="size"
          hasLegend={false}
          backgroundColor="transparent"
          paddingLeft={(screenWidth / 4).toString()}
        />
        <Text style={ styles.title }>Free Storage</Text>
        <Text style={ styles.size }>7.5 Gb</Text>
        <Text style={ styles.subTitle }>From Total 15 Gb</Text>
      </View>
    </SafeAreaView>
  )
}