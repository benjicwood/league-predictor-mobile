import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import FIXTURES from '../data/fixtures';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fixtures</Text>
      <FlatList data={FIXTURES[0]} keyExtractor={item => item.home} renderItem={({item}) => (
                <View>
                    <Text>{item.home}</Text>
                    <Text>{item.away}</Text>
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
