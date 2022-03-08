import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {Image, Pressable, ScrollView, Text, TextInput} from 'react-native';
import iconBack from '../../assets/icons/ic_signin_back.png';
import {Navigation} from 'react-native-navigation';

const componentId = 'SignInScreen2';

const SignIn2 = () => {
  const tailwind = useTailwind();
  return (
    <ScrollView style={tailwind('h-full bg-white')}>
      <Pressable
        style={[
          tailwind(
            'h-10 w-10 justify-center items-center mt-8 ml-8 mr-8 bg-white',
          ),
          {
            borderRadius: 20,
            elevation: 3,
          },
        ]}
        onPress={() => Navigation.pop(componentId)}>
        <Image source={iconBack} style={[tailwind('h-6 w-6 mr-2')]} />
      </Pressable>
      <Text style={tailwind('text-black font-bold text-2xl text-center')}>
        Login
      </Text>
      <TextInput
        style={[
          tailwind('mt-20 ml-16 mr-16 text-lg'),
          {
            borderBottomColor: '#999999',
            borderBottomWidth: 1,
          },
        ]}
        placeholder="Email"
        placeholderTextColor="#999999"
        textContentType={'emailAddress'}
      />
      <TextInput
        style={[
          tailwind('mt-14 ml-16 mr-16 text-lg'),
          {
            borderBottomColor: '#999999',
            borderBottomWidth: 1,
          },
        ]}
        placeholder="Password"
        placeholderTextColor="#999999"
        textContentType={'emailAddress'}
        secureTextEntry={true}
      />
      <Pressable
        style={[
          tailwind(
            'h-16 mt-10 self-center rounded flex justify-center items-center',
          ),
          {
            backgroundColor: '#54A3DA',
            width: '70%',
          },
        ]}
        onPress={() =>
          Navigation.setRoot({
            root: {
              stack: {
                children: [
                  {
                    component: {
                      id: 'DashboardScreen',
                      name: 'DashboardScreen',
                      options: {
                        topBar: {
                          visible: false,
                        },
                      },
                    },
                  },
                ],
              },
            },
          })
        }>
        <Text style={tailwind('text-white font-bold text-lg')}>Login</Text>
      </Pressable>
      <Text
        style={[
          tailwind('mt-6 ml-16'),
          {
            color: '#54A3DA',
          },
        ]}>
        Reset Password
      </Text>
    </ScrollView>
  );
};

export default SignIn2;
