import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {Pressable, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

const Congratulations = () => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('h-full bg-white')}>
      <View style={tailwind('flex h-full justify-center items-center')}>
        <Text
          style={[
            tailwind('text-center text-base'),
            {
              color: '#999999',
            },
          ]}>
          Welcome and congratulation,
        </Text>
        <Text
          style={[
            tailwind('text-center text-base mt-10 ml-10 mr-10'),
            {
              color: '#999999',
            },
          ]}>
          Starting now as supervisor you could use this app to create learning
          session, give feedback, assessment, and tracking student's progress
          much easier.
        </Text>
        <Text
          style={[
            tailwind('text-center text-base mt-10 ml-10 mr-10'),
            {
              color: '#999999',
            },
          ]}>
          However, this is a beta version. Occasionally, there will be some
          bumpy experience, please be patient and keep telling us what went
          wrong, so we could get it fixed and deliver the awesome version
          sooner.
        </Text>
      </View>
      <Pressable
        style={[
          tailwind(
            'h-16 self-center rounded flex justify-center items-center absolute bottom-10',
          ),
          {
            backgroundColor: '#54A3DA',
            width: '80%',
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
        <Text style={tailwind('text-white font-bold text-lg')}>Next</Text>
      </Pressable>
    </View>
  );
};

export default Congratulations;
