import React from 'react';
import {Image, Pressable, SafeAreaView, Text, View} from 'react-native';
import logo from '../../assets/image/logo_profolio.png';
import {useTailwind} from 'tailwind-rn';
import {Navigation} from 'react-native-navigation';

const componentId = 'WelcomeScreen';

const Welcome = () => {
  const tailwind = useTailwind();
  return (
    <SafeAreaView style={[tailwind('h-full'), {backgroundColor: '#FAFAFA'}]}>
      <View style={tailwind('flex justify-center items-center mt-40')}>
        <Image source={logo} />
      </View>
      <Pressable
        style={[
          tailwind(
            'mt-20 mr-14 ml-14 h-16 rounded flex justify-center items-center',
          ),
          {backgroundColor: '#54A3DA', elevation: 1},
        ]}
        onPress={() =>
          Navigation.push(componentId, {
            component: {
              id: 'RegisterScreen1',
              name: 'RegisterScreen1',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          })
        }>
        <Text style={tailwind('text-white')}>
          Create Account (Trial Version)
        </Text>
      </Pressable>
      <Pressable
        style={[
          tailwind(
            'h-16 mt-10 mr-14 ml-14 rounded flex justify-center items-center',
          ),
          {borderColor: '#54A3DA', borderWidth: 3},
        ]}
        onPress={() =>
          Navigation.push(componentId, {
            component: {
              name: 'SignInScreen1',
              id: 'SignInScreen1',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          })
        }>
        <Text style={{color: '#54A3DA'}}>Sign In(Premium Version)</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Welcome;
