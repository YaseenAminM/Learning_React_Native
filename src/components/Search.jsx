import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React, { useState } from 'react';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const contacts = [
    { id: 1, name: 'Ali' },
    { id: 2, name: 'Ahmed' },
    { id: 3, name: 'Usman' },
    { id: 4, name: 'Bilal' },
    { id: 5, name: 'Hassan' },
    { id: 6, name: 'Hussain' },
    { id: 7, name: 'Omar' },
    { id: 8, name: 'Zain' },
    { id: 9, name: 'Fahad' },
    { id: 10, name: 'Saad' },
    { id: 11, name: 'Asad' },
    { id: 12, name: 'Imran' },
    { id: 13, name: 'Waleed' },
    { id: 14, name: 'Noman' },
    { id: 15, name: 'Shahzad' },
    { id: 16, name: 'Adnan' },
    { id: 17, name: 'Sami' },
    { id: 18, name: 'Rizwan' },
    { id: 19, name: 'Salman' },
    { id: 20, name: 'Kashif' },
    { id: 21, name: 'Adeel' },
    { id: 22, name: 'Tariq' },
    { id: 23, name: 'Jawad' },
    { id: 24, name: 'Hamza' },
    { id: 25, name: 'Shahid' },
    { id: 26, name: 'Amir' },
    { id: 27, name: 'Faisal' },
    { id: 28, name: 'Talha' },
    { id: 29, name: 'Moiz' },
    { id: 30, name: 'Rayyan' },
    { id: 31, name: 'Farhan' },
    { id: 32, name: 'Danish' },
    { id: 33, name: 'Nouman' },
    { id: 34, name: 'Sarfaraz' },
    { id: 35, name: 'Mustafa' },
    { id: 36, name: 'Shahzaib' },
    { id: 37, name: 'Yasir' },
    { id: 38, name: 'Zohaib' },
    { id: 39, name: 'Raheel' },
    { id: 40, name: 'Ahsan' },
    { id: 41, name: 'Naveed' },
    { id: 42, name: 'Shayan' },
    { id: 43, name: 'Rehan' },
    { id: 44, name: 'Hammad' },
    { id: 45, name: 'Abrar' },
    { id: 46, name: 'Ayaz' },
    { id: 47, name: 'Shoaib' },
    { id: 48, name: 'Muneeb' },
    { id: 49, name: 'Shafiq' },
    { id: 50, name: 'Zubair' },
  ];

  const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchQuery.toLowerCase()));

  function renderItems({ item }) {
    return (
      <View
        style={{
          backgroundColor: '#f8f9fa',
          marginBottom: 5,
          padding: 15,
          marginHorizontal: 15,
          borderRadius: 100,
        }}>
        <Text
          style={{
            color: '#c92a2a',

            fontSize: 16,
            paddingLeft: 20,
          }}>
          {item.name}
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {/* Search Bar Container */}
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search Contacts"
          placeholderTextColor={'#adb5bd'}
          underlineColorAndroid="transparent"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <View style={styles.iconContainer}>
          <Icon name="search" size={24} color="#fff" />
        </View>
      </View>

      {/* User List */}

      <FlatList
        style={{
          flex: 1,
          marginTop: 10,
          //   backgroundColor: 'red',
        }}
        data={filterContacts}
        renderItem={renderItems}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  searchBarContainer: {
    flexDirection: 'row',
    padding: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f3f5',
    borderRadius: 100,
    paddingRight: 5,

    // marginVertical: 15,
    marginTop: 10,
    marginHorizontal: 10,
  },
  searchBar: {
    flex: 1,
    paddingLeft: 20,
    borderRadius: 100,
    color: '#e03131',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e03131',
    borderRadius: 100,
    padding: 10,
  },
});
