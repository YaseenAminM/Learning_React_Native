import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const data = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  title: `Item ${i + 1}`,
}));

// 🎨 Random color generator
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default function GridScrollView() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Grid</Text>
      <ScrollView contentContainerStyle={styles.container}>
        {data.map(item => {
          return (
            <View key={item.id} style={[styles.gridItem, { backgroundColor: getRandomColor() }]}>
              <Text style={styles.gridItemText}>{item.title}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f1f3f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#000',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    flexWrap: 'wrap',
  },
  gridItem: {
    padding: 10,
    margin: 5,
    width: '30%',
    height: 100,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridItemText: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
