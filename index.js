import React from 'react';
import {Navigation} from 'react-native-navigation';
import {
  AudioPlaylistScreen,
  AudioScreen,
  DashboardScreen,
  IncidentReportScreen,
  IncidentTermsScreen,
  InstitutionListScreen,
  NewSessionScreen,
  PhotosScreen,
  RegisterScreen,
  RegisterScreen2,
  RegisterScreen3,
  RelatedRubricScreen,
  Rubric1Screen, RubricAudioScreen,
  RubricDetailScreen,
  RubricPhotosScreen,
  RubricScreen,
  RubricTextScreen,
  SessionListScreen,
  SessionScreen,
  SessionSupervisorScreen,
  SignInScreen1,
  SignInScreen2,
  TagsScreen,
  TextScreen,
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
Navigation.registerComponent('PhotosScreen', () => PhotosScreen);
Navigation.registerComponent('NewSessionScreen', () => NewSessionScreen);
Navigation.registerComponent('SessionScreen', () => SessionScreen);
Navigation.registerComponent('SessionListScreen', () => SessionListScreen);
Navigation.registerComponent(
  'SessionSupervisorScreen',
  () => SessionSupervisorScreen,
);
Navigation.registerComponent('TagsScreen', () => TagsScreen);
Navigation.registerComponent('IncidentTermsScreen', () => IncidentTermsScreen);
Navigation.registerComponent(
  'IncidentReportScreen',
  () => IncidentReportScreen,
);
Navigation.registerComponent('TextScreen', () => TextScreen);
Navigation.registerComponent('RelatedRubricScreen', () => RelatedRubricScreen);
Navigation.registerComponent('Rubric1Screen', () => Rubric1Screen);
Navigation.registerComponent('AudioScreen', () => AudioScreen);
Navigation.registerComponent('AudioPlaylistScreen', () => AudioPlaylistScreen);
Navigation.registerComponent('RubricScreen', () => RubricScreen);
Navigation.registerComponent('RubricDetailScreen', () => RubricDetailScreen);
Navigation.registerComponent('RubricTextScreen', () => RubricTextScreen);
Navigation.registerComponent('RubricPhotosScreen', () => RubricPhotosScreen);
Navigation.registerComponent('RubricAudioScreen', () => RubricAudioScreen);

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
