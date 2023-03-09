import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import tailwind from 'twrnc';

let sukhnalake = require('../assets/sukhna-lake.png')

let BlogPost = (): JSX.Element => {
   let openLink = (webLink: string) => {
      Linking.openURL(webLink);
   }

   return (
      <View>
         <Text style={tailwind`text-3xl py-4`} >Trending Places</Text>
         <View style={tailwind`h-96 bg-slate-600 rounded-xl `}>
            <Image source={sukhnalake} borderTopLeftRadius={12} borderTopRightRadius={12} style={{ height: 200, width: 362, resizeMode: "cover" }} />
            {/* <Image source={{ uri: 'https://cityfrill.com/wp-content/uploads/2019/06/sukhna-lake.png' }} style={{ height: 200, width: 360, resizeMode: 'cover', }} /> */}
            <View style={tailwind`pl-4 py-1`} >
               <Text style={tailwind`py-2 text-2xl font-bold`} >Sukhna Lake, Chandigarh</Text>
               <Text style={tailwind`py-1 font-semibold`} >a reservoir at the foothills of the Himalayas.</Text>
               <Text style={tailwind`py-1 font-medium`}>30 min away</Text>
               <View style={tailwind`flex flex-row gap-5 mt-4 `} >
                  <TouchableOpacity onPress={() => openLink('https://en.wikipedia.org/wiki/Sukhna_Lake')} style={tailwind`bg-white rounded-lg py-3 px-5`}>
                     <Text style={tailwind`text-black`}>Read more</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => openLink('https://goo.gl/maps/uMhrJCjUHobm5Gy9A')} style={tailwind`bg-white rounded-lg py-3 px-5`}>
                     <Text style={tailwind`text-black`}>Get directions</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({})

export default BlogPost;