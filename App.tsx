import React from 'react';
import {StatusBar, ScrollView, useColorScheme} from 'react-native';
// import StylingPage from './src/pages/styling';
import tailwind from 'twrnc';
// import PasswordGenerator from './src/pages/passwordGen';
import {SafeAreaView} from 'react-native-safe-area-context';
import BgChanger from './src/pages/bgChanger';

let App = (): JSX.Element => {
  let colorScheme = useColorScheme();

  return (
    <>
      <SafeAreaView
        style={tailwind`${
          colorScheme == 'dark' ? 'bg-[#202124]' : 'bg-white'
        } `}>
        <StatusBar
          animated
          translucent
          backgroundColor="transparent"
          barStyle={colorScheme == 'dark' ? 'light-content' : 'dark-content'}
        />
        <ScrollView>
          {/* <StylingPage /> */}
          {/* <PasswordGenerator /> */}
          <BgChanger />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
