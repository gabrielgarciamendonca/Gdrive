import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 153,
    backgroundColor: '#4378DB',
    borderRadius: 29,
    marginVertical: 35,
  },
  backButton: {
    height: 54,
    width: 56,
    borderBottomLeftRadius: 16,
    borderTopRightRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#405DB5',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  informations: {
    color: '#FFF',
  },
  labels: {
    alignSelf: 'center',
    marginLeft: 20,
  },
  wrapIconLabel: {
    marginTop: 30,
    marginLeft: 30,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  slideBar: {
    height: 7,
    backgroundColor: '#405DB5',
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 20,
  },
  slideFilled: {
    height: 7,
    backgroundColor: '#FFF',
    marginRight: 130,
    borderRadius: 20,
  }
})