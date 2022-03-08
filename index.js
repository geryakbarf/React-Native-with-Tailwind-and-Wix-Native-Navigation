import React from 'react';
import {Navigation} from 'react-native-navigation';
import { SignInScreen1, SignInScreen2, WelcomeScreen } from "./src/App";

Navigation.registerComponent('WelcomeScreen', () => WelcomeScreen);
Navigation.registerComponent('SignInScreen1', () => SignInScreen1);
Navigation.registerComponent('SignInScreen2', () => SignInScreen2);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: 'WelcomeScreen',
              name: 'WelcomeScreen',
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
  });
});
