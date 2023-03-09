import React from "react";
import { View, Text, ScrollView } from 'react-native';
import tailwind from "twrnc";

import FlatCards from "../components/styling/flatCards";
import JustCards from "../components/styling/justCards";
import BlogPost from "../components/styling/blogPost";
import ScrollableCards from "../components/styling/scrollableCards";
import ContactList from "../components/styling/contactList";

let StylingPage = () => {
   return (
      <ScrollView>
         <View style={tailwind`p-4`}>
            <FlatCards />
            <JustCards />
            <ScrollableCards />
            <BlogPost />
            <ContactList />
         </View>
      </ScrollView>
   )
}

export default StylingPage;