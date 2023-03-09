import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Pressable,
} from 'react-native';
import tailwind from 'twrnc';
import TextComp from '../common/textComp';

let BgChanger = (): JSX.Element => {
  let [randomBackground, setRandomBackground] = useState('#FFFFFF');
  let [squareColor, setSquareColor] = useState('#8D3DAF');
  let [circleColor, setCircleColor] = useState('#E07C24');
  let [triangleColor, settriangleColor] = useState('#35BDD0');
  let [ovalColor, setOvalColor] = useState('#E03B8B');
  let hexRange = '0123456789ABCDEF';
  let bgRes = '#';
  let sqRes = '#';
  let ciRes = '#';
  let trRes = '#';
  let ovRes = '#';

  let generateBackground = () => {
    for (let i = 0; i < 6; i++) {
      bgRes += hexRange[Math.floor(Math.random() * 16)];
      sqRes += hexRange[Math.floor(Math.random() * 16)];
      ciRes += hexRange[Math.floor(Math.random() * 16)];
      trRes += hexRange[Math.floor(Math.random() * 16)];
      ovRes += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackground(bgRes);
    setSquareColor(sqRes);
    setCircleColor(ciRes);
    settriangleColor(trRes);
    setOvalColor(ovRes);
  };

  return (
    <View
      style={[
        tailwind`justify-center items-center pt-20 pb-40 bg-[${randomBackground}]`,
        //   {flex: 1},
      ]}>
      <View style={tailwind`flex-row gap-10 mb-10`}>
        <View style={tailwind`bg-[${squareColor}] h-20 w-20`}></View>
        <View
          style={tailwind`bg-[${circleColor}] rounded-full h-20 w-20`}></View>
      </View>
      <TextComp style={tailwind`text-2xl text-center px-8`}>
        Press the button below to change the background color
      </TextComp>
      <Pressable
        onPress={generateBackground}
        style={tailwind`py-5 px-10 my-14 rounded-xl bg-blue-500`}>
        <Text style={tailwind`text-white`}>PRESS ME</Text>
      </Pressable>

      <View style={tailwind`flex-row gap-10 my-10`}>
        <View
          style={[styles.triangle, {borderBottomColor: triangleColor}]}></View>
        <View style={[styles.oval, {backgroundColor: ovalColor}]}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    //  borderBottomColor: 'red',
  },
  oval: {
    width: 100,
    height: 100,
    borderRadius: 50,
    //  backgroundColor: 'red',
    transform: [{scaleY: 2}],
  },
});

export default BgChanger;
