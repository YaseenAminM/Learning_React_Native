/* eslint-disable react-native/no-inline-styles */
import { View, Text, SectionList } from 'react-native';
import React from 'react';

const listItems = [
  {
    title: 'Fruits',
    data: [
      {
        id: 1,
        name: 'Apple',
      },
      {
        id: 2,
        name: 'Mango',
      },
      {
        id: 3,
        name: 'Orange',
      },
    ],
  },
  {
    title: 'Vegitables',
    data: [
      {
        id: 4,
        name: 'Carrot',
      },
      {
        id: 5,
        name: 'Potato',
      },
      {
        id: 6,
        name: 'Tomato',
      },
    ],
  },
];

export default function SelectionListComponent() {
  function renderItem({ item }) {
    return (
      <View
        style={{
          backgroundColor: 'green',
          padding: 15,
          marginHorizontal: 25,
          marginBottom: 5,
        }}>
        <Text
          style={{
            color: '#fff',
          }}>
          {item.name}
        </Text>
      </View>
    );
  }
  function renderSectionHeader({ section }) {
    return (
      <View
        style={{
          backgroundColor: 'royalblue',
          padding: 10,
          margin: 10,
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 28,
          }}>
          {section.title}
        </Text>
      </View>
    );
  }

  return (
    <View>
      <SectionList sections={listItems} renderItem={renderItem} renderSectionHeader={renderSectionHeader} />
    </View>
  );
}
