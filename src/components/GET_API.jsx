import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function GET_API() {
  //   const [data, setData] = useState(undefined);
  const [myData, setMyData] = useState(undefined);

  //   const getAPIData = async () => {
  //     console.log('Helloooo');
  //     const url = 'https://jsonplaceholder.typicode.com/todos/';
  //     const result = await fetch(url);
  //     const res = await result.json();
  //     setData(res);
  //     console.log(data);
  //   };

  //   useEffect(() => {
  //     getAPIData();
  //   }, []);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        // console.log(response.data);
        setMyData(response.data);
      })
      .catch(error => console.log(error))
      .finally(() => {
        console.log('request ended');
      });
  }, []);

  return (
    <View
      style={{
        backgroundColor: 'lightgrey',
        flex: 1,
      }}>
      <Text>Advices</Text>
      {myData ? (
        <ScrollView
          style={{
            backgroundColor: 'transparent',
            flex: 1,
          }}>
          {myData.map(data => {
            return (
              <Text
                key={data.id}
                style={{
                  fontSize: 8,
                  marginBottom: 10,
                }}>
                {data.id} : {data.title}
              </Text>
            );
          })}
        </ScrollView>
      ) : null}
    </View>
  );
}
