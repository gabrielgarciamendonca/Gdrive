import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingTop: 70,
  },
  topMenu: {
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  itemsMenu: {
    width: 80 / 100 * Dimensions.get('window').width,
    height: 55 / 100 * Dimensions.get('window').height,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  logout: {
    width: 80 / 100 * Dimensions.get('window').width,
    marginHorizontal: 10,
  },
  imageContainer: {
    width: 56,
    height: 56,
    backgroundColor: 'black',
    borderRadius: 100,
    marginRight: 10,
  },
  textsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wellcomePhrase: {
    color: '#FFF',
  },
  name: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  }
})