import React from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import tailwind from 'twrnc';

let ScrollableCards = (): JSX.Element => {
   return (
      <View>
         <Text style={tailwind`text-3xl py-4`} >Scrollable Cards</Text>
         <ScrollView horizontal={true}  >
            <View style={tailwind`flex flex-row gap-3`}>
               <View style={tailwind`h-28 w-28 bg-gray-400 rounded-lg justify-center items-center`} >
                  <Text>Tap</Text>
               </View>
               <View style={tailwind`h-28 w-28 bg-gray-400 rounded-lg justify-center items-center`} >
                  <Text>me</Text>
               </View>
               <View style={tailwind`h-28 w-28 bg-gray-400 rounded-lg justify-center items-center`} >
                  <Text>to</Text>
               </View>
               <View style={tailwind`h-28 w-28 bg-gray-400 rounded-lg justify-center items-center`} >
                  <Text>learn</Text>
               </View>
               <View style={tailwind`h-28 w-28 bg-gray-400 rounded-lg justify-center items-center`} >
                  <Text>more</Text>
               </View>
               <View style={tailwind`h-28 w-28 bg-gray-400 rounded-lg justify-center items-center`} >
                  <Text>.....</Text>
               </View>
               <View style={tailwind`h-28 w-28 bg-gray-400 rounded-lg justify-center items-center`} >
                  <Text>👌</Text>
               </View>
            </View>
         </ScrollView>
      </View>
   )
}

const styles = StyleSheet.create({})

export default ScrollableCards;