import React, { Component } from "react";
import { StyleSheet, View,Button,Alert } from "react-native";
import TextInputt from "../components/TextInputt";
import Buton from "../components/Buton";

export default class Giris extends Component {
	constructor(props) {
 
		super(props)
	 
		this.state = {
	 
		  UserEmail: '',
		  UserPassword: ''
	 
		}
	 
	  }
	 
	UserLoginFunction = () =>{
	 
	 const { UserEmail }  = this.state ;
	 const { UserPassword }  = this.state ;
	 
	 
	fetch('http://192.168.8.137/User_Project/User_Login.php', {
	  method: 'POST',
	  headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({
	 
		email: UserEmail,
	 
		password: UserPassword
	 
	  })
	 
	}).then((response) => response.json())
		  .then((responseJson) => {
	 
			// If server response message same as Data Matched
		   if(responseJson === 'Data Matched')
			{
	 
				//Then open Profile activity and send user email to profile activity.
				this.props.navigation.navigate('Webrtc');
	 
			}
			else{
	 
			  Alert.alert(responseJson);
			}
	 
		  }).catch((error) => {
			console.error(error);
		  });
	 
	 
	  }
  render() {
    return (
      <View style={styles.container}>
        <TextInputt 
        style={styles.input}
        iconname='account'
        placeholder='Kullanıcı Adı'
		keyboardType='email-address'
        onChangeText={UserEmail => this.setState({UserEmail})}
         />
        <TextInputt 
        style={styles.input}
        iconname='account-key'
        placeholder='Şifre'
		secureTextEntry={true}
        onChangeText={UserPassword => this.setState({UserPassword})}
         />
        <Button 
        title='Oturum Aç'
        onPress={this.UserLoginFunction}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center'
  },
input:{
  margin:30
}
});
