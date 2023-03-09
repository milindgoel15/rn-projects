import React, {ReactNode} from 'react';
import {Text, useColorScheme, TextStyle} from 'react-native';

interface props {
  children: ReactNode;
  style?: TextStyle;
}

let TextComp: React.FC<props> = ({children, style}) => {
  let colorScheme = useColorScheme();

  let defaultStyle: TextStyle = {
    color: colorScheme == 'dark' ? 'white' : 'black',
  };

  return <Text style={{...defaultStyle, ...style}}>{children}</Text>;
};

export default TextComp;
