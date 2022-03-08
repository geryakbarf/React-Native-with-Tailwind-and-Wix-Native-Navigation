import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {Pressable, ScrollView, Text, TextInput, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

const componentId = 'NewSessionScreen';

const NewSession = () => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('h-full bg-white')}>
      <ScrollView>
        <Text style={tailwind('text-black mt-20 ml-16 font-bold text-2xl')}>
          Create New Session
        </Text>
        <TextInput
          textContentType={'name'}
          placeholder="Learning Activity"
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
          textContentType={'location'}
          placeholder="Location"
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
          textContentType={'name'}
          placeholder="Room"
          placeholderTextColor="#999999"
          style={[
            tailwind('mt-10 ml-16 mr-16 text-lg border-b'),
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
              id: 'SessionScreen',
              name: 'SessionScreen',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          })
        }>
        <Text style={tailwind('text-white font-bold text-lg')}>
          Create Session
        </Text>
      </Pressable>
    </View>
  );
};

export default NewSession;
