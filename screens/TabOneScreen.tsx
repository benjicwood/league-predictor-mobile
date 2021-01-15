import * as React from 'react';
import { FlatList, StyleSheet, View, Text, Image } from 'react-native';

import LEAGUE from '../data/league';

import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';

const header = [
  'Logo',
  'Team',
  'Pld',
  'W',
  'D',
  'L',
  'GD',
  'P',
];

// // Indices (columns) to include on a small screen
// export const smallScreenIndices = [0, 1, 5];

// // Indices to include on a medium screen
// export const mediumScreenIndices = [0, 1, 2, 4, 5];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>League</Text> */}
      {/* <FlatList data={LEAGUE} KeyExtractor={item => item.team}></FlatList> */}

      <View style={styles.header}>
                    <Text style={{width: '10%'}}></Text>
                    <Text style={{width: '42%'}}>Team</Text>
                    <Text style={{width: '8%'}}>Pld</Text>
                    <Text style={{width: '8%'}}>W</Text>
                    <Text style={{width: '8%'}}>D</Text>
                    <Text style={{width: '8%'}}>L</Text>
                    <Text style={{width: '8%'}}>GD</Text>
                    <Text style={{width: '10%'}}>P</Text>
                </View>
      <FlatList style={styles.leagueTable} data={LEAGUE} keyExtractor={item => item.team} renderItem={({item}) => (
                <View style={styles.team}>
                    <Text style={{width: '10%'}}>
                      <Image style={styles.logo} source={require(`./club-logos/${item.icon}.png`)}></Image>
                    </Text>
                    <Text style={{width: '42%', marginTop: 3}}>{item.team}</Text>
                    <Text style={{width: '8%', marginTop: 3}}>{item.played}</Text>
                    <Text style={{width: '8%', marginTop: 3}}>{item.won}</Text>
                    <Text style={{width: '8%', marginTop: 3}}>{item.drawn}</Text>
                    <Text style={{width: '8%', marginTop: 3}}>{item.lost}</Text>
                    <Text style={{width: '8%', marginTop: 3}}>{item.gd}</Text>
                    <Text style={{width: '10%', marginTop: 3}}>{item.points}</Text>
                </View>
            )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  leagueTable: {
    width: '100%',
  },
  team: {
    display: 'flex',
    flexDirection: 'row',
    height: 30,
  },
  logo: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  headerItem:{
    height: 30,
  }
});
