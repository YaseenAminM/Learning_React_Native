import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function GET_API_LIST() {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      try {
        const users = await axios.get('http://192.168.0.107:3000/users');
        console.log(users.data);
        setMyData(users.data); // ✅ correct
      } catch (error) {
        console.error(error);
      }
    }

    fetchUsers();
  }, []);
  return (
    <View style={styles.Container}>
      <Text style={styles.Header}>GET API LIST OF USERS</Text>
      {myData && (
        <ScrollView>
          {myData.map(data => {
            return (
              <View
                key={data.id}
                style={{
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    backgroundColor: '#96f2d7',
                    padding: 15,
                    marginVertical: 1.5,
                    marginHorizontal: 1.5,
                    minWidth: 50,
                  }}>
                  {data.id}
                </Text>
                <Text
                  style={{
                    backgroundColor: '#96f2d7',
                    padding: 15,
                    marginVertical: 1.5,
                    marginHorizontal: 1.5,
                    minWidth: 100,
                  }}>
                  {data.name}
                </Text>
                <Text
                  style={{
                    backgroundColor: '#96f2d7',
                    padding: 15,
                    marginVertical: 1.5,
                    marginHorizontal: 1.5,
                    flex: 1,
                  }}>
                  {data.email}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'red',
    paddingVertical: 16,
    color: '#e6fcf5',
    backgroundColor: '#12b886',
    borderColor: '#0ca678',
    borderBottomWidth: 4,
  },
});
