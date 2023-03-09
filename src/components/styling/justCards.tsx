import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import tailwind from "twrnc";

let JustCards = (): JSX.Element => {
   return (
      <View>
         <Text style={tailwind`text-3xl py-4`} >Just Cards</Text>
         <View style={tailwind`flex flex-row gap-3`} >
            <View style={[tailwind`h-28 w-28 items-center justify-center flex rounded-xl`, styles.elevated]} >
               <Text>Elevated</Text>
            </View>
            <View style={tailwind`h-28 w-28 items-center justify-center flex rounded-xl border border-white `} >
               <Text>Outlined</Text>
            </View>
            <View style={tailwind`h-28 w-28 items-center justify-center flex rounded-xl bg-green-100`} >
               <Text style={tailwind`text-black`}>Filled</Text>
            </View>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   elevated: {
      elevation: 1
   },
})

export default JustCards;