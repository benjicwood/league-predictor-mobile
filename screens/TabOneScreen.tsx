import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import LEAGUE from '../data/league';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>League</Text>
      {/* <FlatList data={LEAGUE} KeyExtractor={item => item.team}></FlatList> */}
      <FlatList data={LEAGUE} keyExtractor={item => item.team} renderItem={({item}) => (
                <View>
                    <Text>{item.team}</Text>
                    <Text>{item.points}</Text>
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
});
