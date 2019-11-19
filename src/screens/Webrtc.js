import React, { Component } from 'react';
import {
  Platform,
  PermissionsAndroid
} from 'react-native';

import PermissionWebview from '../native';

export default class Webrtc extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'WebView',
      headerStyle: { backgroundColor: '#336384' },
      headerTitleStyle: { color: 'white' },
      headerTintColor: 'white',
    }
  };

  constructor(props){
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <PermissionWebview 
        style={{flex: 1}}
        mediaPlaybackRequiresUserAction={true}
        domStorageEnabled={true}
        allowsInlineMediaPlayback={true}
        source={{uri: 'https://arcane-shelf-90657.herokuapp.com/demos/audio-conferencing.html'}} 
        allowFileAccessFromFileURLs={true}
        allowUniversalAccessFromFileURLs={true}
      />
    );
  }
} 
