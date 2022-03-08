import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {Image, Pressable, Text, View} from 'react-native';
import iconBack from '../../assets/icons/ic_signin_back.png';
import iconPlay from '../../assets/icons/ic_audio_play.png';
import {Navigation} from 'react-native-navigation';

const componentId = 'AudioPlaylistScreen';

const AudioPlaylist = () => {
  const tailwind = useTailwind();
  return (
    <View
      style={[
        tailwind('h-full'),
        {
          backgroundColor: '#FAFAFA',
        },
      ]}>
      <Pressable
        style={[
          tailwind(
            'mt-8 ml-8 flex h-8 w-8 rounded-full bg-white justify-center items-center',
          ),
          {
            elevation: 3,
          },
        ]}
        onPress={() => Navigation.pop(componentId)}>
        <Image source={iconBack} style={tailwind('h-4 w-4 mr-1')} />
      </Pressable>
      <Text style={tailwind('text-black text-center font-bold mt-4 text-lg')}>
        Audio
      </Text>
      <Text style={tailwind('text-black text-center text-sm mt-4')}>
        Your Playlist
      </Text>
      <View
        style={[
          tailwind('bg-white flex-row mt-8 h-28 border-b-2'),
          {
            borderBottomColor: '#F2F2F2',
          },
        ]}>
        <View style={tailwind('flex-col ml-8 mt-2')}>
          <Text style={tailwind('text-black text-base')}>Audio 1</Text>
          <View
            style={[
              tailwind('border-b-2 w-60 mt-4'),
              {
                borderBottomColor: '#39B54A',
              },
            ]}
          />
          <Text
            style={[
              tailwind('text-sm mt-4 mb-4'),
              {
                color: '#77C5FF',
                textDecorationLine: 'underline',
              },
            ]}
            onPress={() =>
              Navigation.push(componentId, {
                component: {
                  id: 'RelatedRubricScreen',
                  name: 'RelatedRubricScreen',
                  options: {
                    topBar: {
                      visible: false,
                    },
                  },
                },
              })
            }>
            Link to Item Rubic
          </Text>
        </View>
        <View style={tailwind('flex-row h-28 items-center')}>
          <Image source={iconPlay} style={tailwind('h-4 w-4 ml-10 mb-8')} />
          <Text style={tailwind('text-red-400 text-sm mb-8 ml-2')}>Delete</Text>
        </View>
      </View>
      <View
        style={[
          tailwind('bg-white flex-row h-28 border-b-2'),
          {
            borderBottomColor: '#F2F2F2',
          },
        ]}>
        <View style={tailwind('flex-col ml-8 mt-2')}>
          <Text style={tailwind('text-black text-base')}>Audio 2</Text>
          <View
            style={[
              tailwind('border-b-2 w-60 mt-4'),
              {
                borderBottomColor: '#39B54A',
              },
            ]}
          />
          <Text
            style={[
              tailwind('text-sm mt-4 mb-4'),
              {
                color: '#77C5FF',
                textDecorationLine: 'underline',
              },
            ]}>
            Link to Item Rubic
          </Text>
        </View>
        <View style={tailwind('flex-row h-28 items-center')}>
          <Image source={iconPlay} style={tailwind('h-4 w-4 ml-10 mb-8')} />
          <Text style={tailwind('text-red-400 text-sm mb-8 ml-2')}>Delete</Text>
        </View>
      </View>
    </View>
  );
};

export default AudioPlaylist;
