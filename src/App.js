import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {HomeScreen,Hizmet,Tercuman,Webrtc, Giris, Profil} from './screens/index';

const RootStack = createStackNavigator({
  Home:{
    screen:HomeScreen 
  },
  Hizmet:{
    screen:Hizmet
  },
  Tercuman:{
    screen:Tercuman
  },
  Webrtc:{
    screen:Webrtc
  },
  Giris:{
    screen:Giris
  },
  Profil:{
    screen:Profil
  }
},{
initialRouteName: 'Home'});
const AppContainer = createAppContainer(RootStack);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
 