/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Welcome from './pages/Welcome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {TailwindProvider} from 'tailwind-rn';
import utils from '../tailwind.json';
import Register from './pages/Register';
import Register2 from './pages/Register2';
import Congratulations from './pages/Register3';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import SignIn2 from './pages/SignIn2';
import InstitutionList from './pages/InstitutionList';
import Photos from './pages/Photos';
import NewSession from './pages/NewSession';
import Session from './pages/Session';
import SessionList from './pages/SessionList';
import SessionSupervisor from './pages/SessionSupervisor';
import IncidentsTerms from './pages/IncidentsTerms';
import IncidentReport from './pages/IncidentReport';
import Audio from './pages/Audio';
import AudioPlaylist from './pages/AudioPlaylist';
import RelatedRubric from './pages/RelatedRubric';
import Rubric from './pages/Rubric';
import Text from './pages/Text';
import TextMenu from './pages/Text';
import Tags from './pages/Tags';
import Rubric1 from './pages/Rubric1';
import RubricDetail from './pages/RubricDetail';
import RubricText from './pages/RubricText';
import RubricPhotos from './pages/RubricPhotos';
import RubricAudio from './pages/RubricAudio';

export const WelcomeScreen = props => {
  return (
    <TailwindProvider utilities={utils}>
      <Welcome props={props} />
    </TailwindProvider>
  );
};

const RegisterScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <Register />
    </TailwindProvider>
  );
};

const RegisterPersonalInformationScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <Register2 />
    </TailwindProvider>
  );
};

const RegisterCongratulationsScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <Congratulations />
    </TailwindProvider>
  );
};

const DashboardScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <Dashboard />
    </TailwindProvider>
  );
};

export const SignInScreen1 = () => {
  return (
    <TailwindProvider utilities={utils}>
      <SignIn />
    </TailwindProvider>
  );
};

export const SignInScreen2 = () => {
  return (
    <TailwindProvider utilities={utils}>
      <SignIn2 />
    </TailwindProvider>
  );
};

const InstitutionListScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <InstitutionList />
    </TailwindProvider>
  );
};

const PhotosScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <Photos />
    </TailwindProvider>
  );
};

const NewSessionScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <NewSession />
    </TailwindProvider>
  );
};

const SessionScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <Session />
    </TailwindProvider>
  );
};

const SessionListScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <SessionList />
    </TailwindProvider>
  );
};

const SessionSupervisorScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <SessionSupervisor />
    </TailwindProvider>
  );
};

const IncidentTermsScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <IncidentsTerms />
    </TailwindProvider>
  );
};

const IncidentReportScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <IncidentReport />
    </TailwindProvider>
  );
};

const AudioScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <Audio />
    </TailwindProvider>
  );
};

const AudioPlaylistScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <AudioPlaylist />
    </TailwindProvider>
  );
};

const RelatedRubricScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <RelatedRubric />
    </TailwindProvider>
  );
};

const RubricScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <Rubric />
    </TailwindProvider>
  );
};

const TextScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <TextMenu />
    </TailwindProvider>
  );
};

const TagsScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <Tags />
    </TailwindProvider>
  );
};

const Rubric1Screen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <Rubric1 />
    </TailwindProvider>
  );
};

const RubricDetailScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <RubricDetail />
    </TailwindProvider>
  );
};

const RubricTextScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <RubricText />
    </TailwindProvider>
  );
};

const RubricPhotosScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <RubricPhotos />
    </TailwindProvider>
  );
};

const RubricAudioScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <RubricAudio />
    </TailwindProvider>
  );
};
