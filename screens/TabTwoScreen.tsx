import * as React from 'react';
import { FlatList, StyleSheet, View, Text, TextInput } from 'react-native';

import FIXTURES from '../data/fixtures';

import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fixtures</Text>
      <FlatList data={FIXTURES[0]} keyExtractor={item => item.home} renderItem={({item}) => (
                <View style={styles.fixture}>
                    <Text>{item.home}</Text>
                    <TextInput style={styles.textInput}></TextInput>
                    <TextInput style={styles.textInput}></TextInput>
                    <Text>{item.away}</Text>
                </View>
            )} />
    </View>
  );
}

// { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Newcastle United' },

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'whitesmoke',
    width: 30,
    height: 30,
    border: '1px solid black',
  },
  fixture: {
    flexDirection: 'row',
  },
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
