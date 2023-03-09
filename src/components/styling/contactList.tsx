import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import tailwind from 'twrnc';
import contactData from '../../utils/contactData';

let ContactList = (): JSX.Element => {
  return (
    <View>
      <Text style={tailwind`text-3xl py-4`}>Contact List</Text>
      <View>
        {contactData.map(item => (
          <View
            key={item.uid}
            style={tailwind`flex flex-row gap-6 py-2 items-center ml-2`}>
            <Image
              source={{uri: item.imageUrl}}
              style={tailwind`h-20 w-20 rounded-full`}
            />
            <View style={tailwind`flex gap-1`}>
              <Text style={tailwind`text-xl font-bold`}>{item.name}</Text>
              <Text>{item.status}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ContactList;
