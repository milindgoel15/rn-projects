import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  useColorScheme,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import tailwind from 'twrnc';
import * as Yup from 'yup';
import TextComp from '../components/textComp';
import {Formik} from 'formik';

let PasswordGenerator = (): JSX.Element => {
  let colorScheme = useColorScheme();
  // let length: any;

  let [password, setPassword] = useState('');
  let [isPassGenerated, setIsPassGenerated] = useState(false);
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(true);
  let [numbers, setNumbers] = useState(false);
  let [symbols, setSymbols] = useState(false);

  let passwordSchema = Yup.object().shape({
    passwordLength: Yup.number()
      .required('Length is required!')
      .positive('Length should be a positive number')
      .integer('Should be an integer, not in decimal format')
      .min(5, 'Should be atleast 5 characters')
      .max(16, 'Should only be maximum 16 characters'),
  });

  let generatePassword = (passwordLength: number) => {
    let charList = '';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (uppercase) {
      charList += upperCaseChars;
    }
    if (lowercase) {
      charList += lowerCaseChars;
    }
    if (numbers) {
      charList += digitChars;
    }
    if (symbols) {
      charList += specialChars;
    }

    let passwordResult = createPassword(passwordLength, charList);
    setPassword(passwordResult);
    setIsPassGenerated(true);
  };

  let createPassword = (passwordLength: number, characters: string) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const element = Math.round(Math.random() * characters.length);
      result += characters.charAt(element);
    }
    return result;
  };

  let resetPassword = () => {
    setPassword('');
    setIsPassGenerated(false);
    setUppercase(false);
    setLowercase(true);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <View style={tailwind`p-4 my-16`}>
      <TextComp style={tailwind`text-3xl `}>Password Generator</TextComp>
      <Formik
        initialValues={{passwordLength: ''}}
        validationSchema={passwordSchema}
        onReset={() => resetPassword()}
        onSubmit={values => {
          generatePassword(+values.passwordLength);
          // console.log(values);
        }}>
        {({
          values,
          errors,
          touched,
          isValid,
          handleChange,
          handleReset,
          handleSubmit,
        }) => (
          <>
            <View style={tailwind`my-5`}>
              <TextComp style={tailwind`text-lg font-semibold`}>
                Enter length of password you want to generate:
              </TextComp>
              <TextInput
                style={tailwind`border border-gray-400 px-4 rounded-md my-4 ${
                  colorScheme == 'dark' ? 'text-white' : 'text-black'
                } `}
                keyboardType="numeric"
                placeholder="Enter password length"
                placeholderTextColor={colorScheme == 'dark' ? 'white' : 'black'}
                maxLength={2}
                value={values.passwordLength}
                onChangeText={handleChange('passwordLength')}
                clearButtonMode="while-editing"
              />
              {touched.passwordLength && errors.passwordLength && (
                <TextComp style={tailwind`text-red-500`}>
                  {' '}
                  {errors.passwordLength}{' '}
                </TextComp>
              )}
            </View>
            <View>
              <TextComp style={tailwind`text-lg font-semibold`}>
                Select formats for passwords:
              </TextComp>
              <View style={tailwind`my-4 mx-1`}>
                <View
                  style={tailwind`flex flex-row justify-between items-center`}>
                  <TextComp style={tailwind` text-base`}>
                    Should be uppercase
                  </TextComp>
                  <BouncyCheckbox
                    style={tailwind`py-3 mx-1`}
                    size={25}
                    fillColor="#0a64f5"
                    isChecked={uppercase}
                    disableText={true}
                    textStyle={{color: '#e6e5e3'}}
                    innerIconStyle={{borderWidth: 2}}
                    onPress={() => {
                      setUppercase(!uppercase);
                    }}
                  />
                </View>
                <View
                  style={tailwind`flex flex-row justify-between items-center`}>
                  <TextComp style={tailwind` text-base`}>
                    Should be lowercase (Default: true)
                  </TextComp>
                  <BouncyCheckbox
                    style={tailwind`py-3 mx-1`}
                    size={25}
                    fillColor="#0a64f5"
                    isChecked={lowercase}
                    disableText={true}
                    textStyle={{color: '#e6e5e3'}}
                    innerIconStyle={{borderWidth: 2}}
                    onPress={() => {
                      setLowercase(!lowercase);
                    }}
                  />
                </View>
                <View
                  style={tailwind`flex flex-row justify-between items-center`}>
                  <TextComp style={tailwind` text-base`}>
                    Should use numbers
                  </TextComp>
                  <BouncyCheckbox
                    style={tailwind`py-3 mx-1`}
                    size={25}
                    fillColor="#0a64f5"
                    isChecked={numbers}
                    disableText={true}
                    textStyle={{color: '#e6e5e3'}}
                    innerIconStyle={{borderWidth: 2}}
                    onPress={() => {
                      setNumbers(!numbers);
                    }}
                  />
                </View>
                <View
                  style={tailwind`flex flex-row justify-between items-center`}>
                  <TextComp style={tailwind` text-base`}>
                    Should use symbols
                  </TextComp>
                  <BouncyCheckbox
                    style={tailwind`py-3 mx-1`}
                    size={25}
                    fillColor="#0a64f5"
                    isChecked={symbols}
                    disableText={true}
                    textStyle={{color: '#e6e5e3'}}
                    innerIconStyle={{borderWidth: 2}}
                    onPress={() => {
                      setSymbols(!symbols);
                    }}
                  />
                </View>
              </View>
            </View>
            <View
              style={tailwind`flex flex-row gap-4 justify-center my-4 rounded-xl overflow-hidden`}>
              <Pressable
                style={tailwind`py-4 px-10 items-center rounded-xl bg-[#f50a0a]`}
                accessibilityLabel="Tap to generate password"
                android_ripple={{
                  radius: 130,
                  color: '#2830a1',
                }}
                onPress={() => {
                  handleReset();
                  resetPassword();
                }}>
                <Text style={tailwind`text-2xl font-semibold text-white`}>
                  Reset
                </Text>
              </Pressable>
              <Pressable
                style={tailwind`py-4 px-10 items-center rounded-xl bg-[#0a64f5]`}
                accessibilityLabel="Tap to generate password"
                disabled={!isValid}
                android_ripple={{
                  radius: 130,
                  color: '#2830a1',
                }}
                onPress={() => handleSubmit()}>
                <Text style={tailwind`text-2xl font-semibold text-white`}>
                  Generate
                </Text>
              </Pressable>
            </View>
          </>
        )}
      </Formik>
      <View
        style={tailwind`my-10 border-2 py-5 rounded-lg ${
          isPassGenerated ? 'border-gray-100' : 'border-gray-500'
        }`}>
        <Text
          selectable
          style={tailwind`text-xl text-center ${
            isPassGenerated ? 'text-white' : 'text-gray-500'
          }`}>
          {isPassGenerated
            ? password
            : 'Password will be displayed here.\nHint: Long press to copy'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PasswordGenerator;
