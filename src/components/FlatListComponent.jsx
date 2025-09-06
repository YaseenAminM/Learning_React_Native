/* eslint-disable react-native/no-inline-styles */
// API user data
// https://randomuser.me/api/?results=100

import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

import data from '.././data.json';

export default function FlatListComponent() {
  function renderItem({ item }) {
    return (
      <View
        style={{
          backgroundColor: '#9775fa',
          marginBottom: 5,
          padding: 12,
          borderWidth: 2,
          margin: 8,
          borderColor: '#5f3dc4',
          display: 'flex',
          flexDirection: 'row',
          gap: '5',
        }}>
        <Text
          style={{
            color: '#e5dbff',
            fontSize: 18,
          }}>
          {item.first_name}
        </Text>
        <Text
          style={{
            color: '#e5dbff',
            fontSize: 18,
          }}>
          {item.last_name}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.headingEl}>FlatList of Users</Text>
      <View style={styles.flatListContainer}>
        <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headingEl: {
    fontSize: 24,
    color: '#e5dbff',
    backgroundColor: '#9775fa',

    padding: 10,
    borderBottomWidth: 4,
    borderColor: '#845ef7',
  },

  flatListContainer: {
    flex: 1,
    backgroundColor: '#e5dbff',
    // padding: 5,
  },
});
