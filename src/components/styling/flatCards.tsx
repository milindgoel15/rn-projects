import React from "react";
import { View, Text } from 'react-native';
import tailwind from "twrnc";

let FlatCards = () => {
   return (
      <View>
         <Text style={tailwind`text-3xl py-4`} >Flat Cards</Text>
         <View style={tailwind`flex flex-row gap-3`} >
            <View style={tailwind`h-28 w-28 rounded-md bg-red-500 items-center justify-center flex`} >
               <Text style={tailwind`text-xl`} >Red box</Text>
            </View>
            <View style={tailwind`h-28 w-28 rounded-md bg-green-500 items-center justify-center flex`} >
               <Text style={tailwind`text-xl`} >Green box</Text>
            </View>
            <View style={tailwind`h-28 w-28 rounded-md bg-blue-500 items-center justify-center flex`} >
               <Text style={tailwind`text-xl`} >Blue box</Text>
            </View>
         </View>
      </View>
   )
}

export default FlatCards;