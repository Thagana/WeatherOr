import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  input: {
    height: 60,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#fff',
    elevation: 10,
    marginVertical: 10,
    width: '100%',
    color: '#000',
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: 32,
    elevation: 11,
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 20,
  },
  dates: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 200,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#fff',
    elevation: 10,
    marginVertical: 10,
    width: '100%',
    color: '#000',
  },
  temperature: {
    fontSize: 70,
  },
});

export default styles;
