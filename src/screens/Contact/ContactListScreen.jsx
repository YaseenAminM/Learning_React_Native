/* eslint-disable react-native/no-inline-styles */
import { FlatList, Text } from 'react-native';
import React from 'react';
import ContactItem from '../../components/ContactItem';

import { users } from './userContact';

export default function ContactListScreen() {
  function renderItem({ item }) {
    return <ContactItem first_name={item.first_name} phone_number={item.phone_number} />;
  }
  return (
    <>
      <FlatList
        bounces={true}
        style={{}}
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              marginLeft: 10,
              marginTop: 10,
              color: '#343a40',
            }}>
            Contacts
          </Text>
        }
      />
    </>
  );
}
