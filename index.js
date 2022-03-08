import React from 'react';
import {Navigation} from 'react-native-navigation';
import {
  DashboardScreen,
  InstitutionListScreen, RegisterScreen, RegisterScreen2, RegisterScreen3,
  SignInScreen1,
  SignInScreen2,
  WelcomeScreen,
} from "./src/App";

Navigation.registerComponent('WelcomeScreen', () => WelcomeScreen);
Navigation.registerComponent('SignInScreen1', () => SignInScreen1);
Navigation.registerComponent('SignInScreen2', () => SignInScreen2);
Navigation.registerComponent('InstitutionScreen', () => InstitutionListScreen);
Navigation.registerComponent('DashboardScreen', () => DashboardScreen);
Navigation.registerComponent('RegisterScreen1', () => RegisterScreen);
Navigation.registerComponent('RegisterScreen2', () => RegisterScreen2);
Navigation.registerComponent('RegisterScreen3', () => RegisterScreen3);

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
