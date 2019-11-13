import React, { Component } from 'react'
import {Button,Dimensions,
  TextInput,View,Text, Alert} from 'react-native';
import CheckBox from 'react-native-checkbox';
import Buton from '../components/Buton';


const H = Dimensions.get('screen').height;
const W = Dimensions.get('screen').width;


export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
    };
  constructor(props){
    super(props);
  
  this.state = {
  
    Hizmet:false,
    Tercuman:false
  }
  
  }
  Onay = () => {
        if (this.state.Hizmet==false&&this.state.Tercuman==false) {
          Alert.alert('Seçiminizi Yapın')
        }else if(this.state.Hizmet==true){
          this.props.navigation.navigate('Hizmet')
        }else{
          this.props.navigation.navigate('Tercuman')
        }
};
  render() {
    return (
      <View style={{ flex: 1,marginTop:H/18 }}>
         <View style={{ alignItems:'center',justifyContent:'center' }}>
         <Text style={{fontSize: 28, color:"#000",paddingBottom:20}}>Bildiğiniz Dilleri Giriniz</Text>
      <TextInput style={{borderWidth:1,borderColor:"#707070",borderRadius:4,height:40,width:W/1.5}}/>
         </View>
     
      <View style={{alignItems:'flex-start',}}>


      <CheckBox
        style={{ margin: 20,width:300}}
        onChange={()=>{
          this.setState({
              Hizmet:!this.state.Hizmet,Tercuman:false,
          })
        }}
        label='Hizmet Almak İstiyorum'
        checked={this.state.Hizmet}
        
        />
         <CheckBox
         style={{ margin: 20,width:300}}
           onChange={()=>{
          this.setState({
              Tercuman:!this.state.Tercuman,Hizmet:false
          })
        }}
        checked={this.state.Tercuman}
        label={"Tercüman Olmak İstiyorum"}
        />
      </View>
    <View style={{alignItems:'center'}}>
    <Buton
          style={{width:W/1.5,backgroundColor:'#2196F3',margin:20}}
          text={{color:'white'}}
          title="Onay"
          onPress={this.Onay}
        />

        <Buton title="Giriş Yap"
          style={{width:W/1.5}}
          onPress={()=> this.props.navigation.navigate('Giris')}
        />

         <Buton title="WebRtc"
          style={{width:W/1.5}}
          onPress={()=> this.props.navigation.navigate('Webrtc')}
        />
    </View>
        
      </View>
    );
  }
}
