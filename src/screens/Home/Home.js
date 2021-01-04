import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Home.style';

export default function Home() {
  const [search, setSearch] = React.useState('');
  const [dayName, setDayName] = React.useState('');
  const [day, setDay] = React.useState('');
  const [year, setYear] = React.useState('');
  const [month, setMonth] = React.useState('');

  const [temperature, setTemperature] = React.useState(0);
  const [feels, setFeels] = React.useState(0);
  const [description, setDescription] = React.useState('');
  const [icon, setIcon] = React.useState('');
  const [iso, setIso] = React.useState('za');
  const toDegree = (temp) => {
    return Math.round(temp);
  };

  const searchLocation = (value) => {
    setSearch(value);
    if (search === '') {
      return;
    }
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=93ed992c444c651119c49e43e921793a&units=metric`,
    )
      .then((data) => data.json())
      .then((response) => {
        console.log(response);
        setTemperature(toDegree(response.main.temp));
        setFeels(toDegree(response.main.feels_like));
        setDescription(response.weather[0].description);
        setIcon(response.weather[0].icon);
        setIso(response.sys.country);
      })
      .catch((error) => console.log(error));
  };
  React.useState(() => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const date = new Date();
    const name = date.getDay();
    let tempName = '';
    switch (name) {
      case 0:
        tempName = 'Sun';
        break;
      case 1:
        tempName = 'Mon';
        break;
      case 2:
        tempName = 'Tue';
        break;
      case 3:
        tempName = 'Wed';
        break;
      case 4:
        tempName = 'Thur';
        break;
      case 5:
        tempName = 'Fri';
        break;
      case 6:
        tempName = 'Sat';
        break;
      default:
        break;
    }
    setDayName(tempName);
    setMonth(monthNames[date.getMonth()]);
    setDay(String(date.getDate()).padStart(2, '0'));
    setYear(date.getFullYear());
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(value) => searchLocation(value)}
          value={search}
        />
        <Feather name="search" color="#000" size={30} style={styles.icon} />
      </View>
      <View style={styles.location}>
        <View>
          <Ionicons name="location" color="#000" size={28} />
        </View>
        <View>
          <Text style={styles.locationText}>
            {search !== '' ? search : 'Search for a location'}
          </Text>
        </View>
        <View>
          <Image
            source={{uri: `https://www.countryflags.io/${iso}/flat/64.png`}}
            style={{height: 40, width: 40, resizeMode: 'stretch', margin: 5}}
          />
        </View>
      </View>
      <View style={styles.dates}>
        <View>
          <Text>
            {dayName}, {month} {day} {year}
          </Text>
        </View>
      </View>
      {search !== '' && (
        <View style={styles.card}>
          <View>
            <View>
              <Text style={styles.temperature}>{temperature}</Text>
            </View>
            <View>
              <Text>Real Feel: {feels}</Text>
            </View>
          </View>
          <View>
            <View>
              <Image
                source={{
                  uri: `http://openweathermap.org/img/wn/${icon}@2x.png`,
                }}
                style={{
                  height: 80,
                  width: 80,
                  resizeMode: 'stretch',
                  margin: 5,
                }}
              />
            </View>
            <View>
              <Text>{description}</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
