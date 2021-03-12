import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 44/100 * Dimensions.get('window').width,
    height: 125,
    borderColor: '#F0A714',
    borderWidth: 1,
    borderRadius: 16,
    margin: 5,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 15,
  },
  labels: {
    marginTop: 10,
    marginHorizontal: 15
  }
})