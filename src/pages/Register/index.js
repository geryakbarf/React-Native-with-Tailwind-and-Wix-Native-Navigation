import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {Pressable, ScrollView, Text, TextInput, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

const componentId = 'RegisterScreen1';

const Register = () => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('h-full bg-white')}>
      <ScrollView>
        <Text style={tailwind('text-black mt-20 ml-16 font-bold text-2xl')}>
          Create Account
        </Text>
        <TextInput
          textContentType={'name'}
          placeholder="Full Name"
          placeholderTextColor="#999999"
          style={[
            tailwind('mt-20 ml-16 mr-16 text-lg border-b'),
            {
              borderBottomColor: '#999999',
              color: '#999999',
            },
          ]}
        />
        <TextInput
          textContentType={'emailAddress'}
          placeholder="Email"
          placeholderTextColor="#999999"
          style={[
            tailwind('mt-10 ml-16 mr-16 text-lg border-b'),
            {
              borderBottomColor: '#999999',
              color: '#999999',
            },
          ]}
        />
        <TextInput
          textContentType={'password'}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#999999"
          style={[
            tailwind('mt-10 ml-16 mr-16 text-lg border-b'),
            {
              borderBottomColor: '#999999',
              color: '#999999',
            },
          ]}
        />
        <TextInput
          keyboardType={'numeric'}
          placeholder="Institution Access Code"
          placeholderTextColor="#999999"
          style={[
            tailwind('mt-10 ml-16 mr-16 text-lg border-b mb-10'),
            {
              borderBottomColor: '#999999',
              color: '#999999',
            },
          ]}
        />
      </ScrollView>
      <Pressable
        style={[
          tailwind(
            'h-16 ml-16 mr-16 mb-10 rounded flex justify-center items-center',
          ),
          {
            backgroundColor: '#54A3DA',
          },
        ]}
        onPress={() =>
          Navigation.push(componentId, {
            component: {
              id: 'RegisterScreen2',
              name: 'RegisterScreen2',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          })
        }>
        <Text style={tailwind('text-white font-bold text-lg')}>Next</Text>
      </Pressable>
    </View>
  );
};

export default Register;
