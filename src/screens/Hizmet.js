import React, { Component } from 'react'
import { Text, StyleSheet,View,Image, Alert,Dimensions,TouchableOpacity,PixelRatio,Button,TextInput,SafeAreaView,ScrollView} from 'react-native';
import CheckBox from 'react-native-checkbox'
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob';
import  TextInputt  from "../components/TextInputt";
import TextInputMask from 'react-native-text-input-mask';
import InputMask from "../components/InputMask";


const H = Dimensions.get('screen').height;
const W = Dimensions.get('screen').width;



export default class Hizmet extends Component {
  constructor() {
 
    super()
 
    this.state = {
      
      ImageSource2:null,
      ImageSource: null,
      data: null,
      data2:null,

     iban:false,
     paypal:false,
     kredikarti:false,
     bankahesabı:false, 
     

      Adi: '',
      Soyadi: '',
      Aranilan_dil: '',
      Telefon:'',
      Email:'',
      Password:'',
      İban:'',
      Paypal:'',
      Kredi_Karti:'',
      Banka_Hesabi:'',
      Onay_Kodu:''
 
    }
    this.validates = this.validates.bind(this);
  }
  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };
 
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
 
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
    

        this.setState({
      
          ImageSource: source,
          data: response.data,
          
 
        });
      }
    });
  }
  selectPhotoTapped2() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };
 
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
 
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source2 = { uri: response.uri };
        
        this.setState({
          ImageSource2:source2,
          data2:response.data2
 
        });
      }
    });
  }
  uploadImageToServer = () => {
 
    RNFetchBlob.fetch('POST', 'https://reactnativedeneme.000webhostapp.com/upload_image.php', {
      Authorization: "Bearer access-token",
      otherHeader: "foo",
      'Content-Type': 'multipart/form-data',
    }, [
        { name: 'image', filename: 'image.png', type: 'image/png', data: this.state.data}
      ]).then((resp) => {
 
        var tempMSG = resp.data;
        
 
        tempMSG = tempMSG.replace(/^"|"$/g, '');
       
        Alert.alert(
          'Alert Title',
          tempMSG,
          [
            {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false},
        );
 
      }).catch((err) => {
        // ...
      })
 
  }

  uploadImageToServer2 = () => {
 
    RNFetchBlob.fetch('POST', 'https://reactnativedeneme.000webhostapp.com/upload_image.php', {
      Authorization: "Bearer access-token",
      otherHeader: "foo",
      'Content-Type': 'multipart/form-data',
    }, [
        { name: 'image', filename: 'image.png', type: 'image/png', data2: this.state.data2 }
      ]).then((resp) => {
 
     
        var tempMSG2= resp.data2;
 
        tempMSG2= tempMSG2.replace(/^"|"$/g, '');
        Alert.alert(
          'Alert Title',
          tempMSG2,
          [
            {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false},
        );
 
      }).catch((err) => {
        // ...
      })
 
  }

UserRegistrationFunction = () =>{
 
  fetch('https://reactnativedeneme.000webhostapp.com/user_registration.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
      adi: this.state.Adi,
  
      soyadi: this.state.Soyadi,
  
      aranilan_dil: this.state.Aranilan_dil,

      telefon: this.state.Telefon,
  
      email: this.state.Email,

      password:this.state.Password,
  
      iban: this.state.İban,

      paypal:this.state.Paypal,

      kredikarti:this.state.Kredi_Karti,

      bankahesabi:this.state.Banka_Hesabi,

      onay: this.state.Onay_Kodu
  
    })
  
  }).then((response) => response.text())
        .then((responseJson) => {
  
  // Showing response message coming from server after inserting records.
  Alert.alert(
    'Alert Title',
    responseJson,
    [
      {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {cancelable: false},
  );
  
        }).catch((error) => {
          console.error(error);
        });
 
}
 
validates = () => { 

  let text = this.state.Email; 
  let emailError = this.state.emails;
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ; 
  if(reg.test(text) === false ) 
  { 
  Alert.alert('Email Hatalı')
  this.setState({Email:text}) 
  return false; 
  } 
  else { 
  this.setState({Email:text}) 
  console.log("Email is Correct"); 
  } 

}

kayitol = () => {

}
  render() {
    return (
      
      <SafeAreaView>
      <ScrollView >
 
      <TextInputt  
      placeholder='Aranılan Dil' 
      returnKeyType='go'
      onChangeText={aranilan_dil => this.setState({Aranilan_dil : aranilan_dil})}
      />
    
      <TextInputt  
      placeholder='Adınız' 
      onChangeText={adi => this.setState({Adi : adi})}
      />
      
      <TextInputt 
      placeholder='Soyadınız' 
      onChangeText={soyadi => this.setState({Soyadi : soyadi})}
      />
     <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View style={styles.ImageContainer}>

            {this.state.ImageSource === null ? <Text>Diplomanızı Yükleyin</Text> :
              <Image style={styles.ImageContainer} source={this.state.ImageSource} />
            }
          </View>
      </TouchableOpacity>
          
      <TouchableOpacity onPress={this.selectPhotoTapped2.bind(this)}>
          <View style={styles.ImageContainer}>

            {this.state.ImageSource2 === null ? <Text>Kimliğinizi Yükleyin</Text> :
              <Image style={styles.ImageContainer} source={this.state.ImageSource2} />
            }

          </View>
      </TouchableOpacity>
     <TextInputt 
      placeholder='Emailiniz' 
      keyboardType='email-address'
      onChangeText={email => this.setState({Email : email})}
      />
      <TextInputt 
      placeholder='Şifre oluşturun' 
      onChangeText={password => this.setState({Password : password})}
      />
     <InputMask
        keyboardType='phone-pad'
        placeholder='Telefonunuz'   
        onChangeText={telefon => this.setState({Telefon : telefon})}
        mask={"+90 ([000]) [000] [00] [00]"}
      />
<Text style={{alignSelf:'center',margin:10}}>Ödeme Yöntemini Seçin</Text>

     <View style={{alignItems: "center",padding:W/20}}>
    <View style={{flexDirection: "row",marginStart:W/20}}>
    <CheckBox 
      style={styles.checkbox}
      onChange={()=>{
          this.setState({iban:!this.state.iban,kredikarti:false,bankahesabı:false,paypal:false})
      }}
      checked={this.state.iban}
      label={"İban"}/>

      <CheckBox 
       style={styles.checkbox}
       onChange={()=>{
          this.setState({paypal:!this.state.paypal,kredikarti:false,bankahesabı:false,iban:false})
      }}
      checked={this.state.paypal}
      label={"Paypal"}/>

    </View>
</View>
  <View style={{alignItems: "center",padding:W/20}}>
    <View style={{flexDirection: "row",marginStart:W/30}}>
      <CheckBox 
       style={styles.checkbox}
       onChange={()=>{
          this.setState({kredikarti:!this.state.kredikarti,iban:false,bankahesabı:false,paypal:false})
      }}
      checked={this.state.kredikarti}
      label={"Kredi Kartı"}/>

      <CheckBox  
       style={styles.checkbox}
        onChange={()=>{
          this.setState({bankahesabı:!this.state.bankahesabı,kredikarti:false,iban:false,paypal:false})
      }}
      checked={this.state.bankahesabi}
      label={"Banka Hesabı"}/>
    </View>
</View>
    <View> 
   
      {this.state.iban==true ? 
      <InputMask 
      keyboardType='phone-pad'
      placeholder='Ödeme Alımı iban' 
      onChangeText={iban => this.setState({İban: iban})}
      mask={"TR[00] [0000] [0000] [0000] [0000] [0000] [00]"}
      />
      :this.state.paypal==true ? 
      <InputMask
      keyboardType='phone-pad'
      placeholder='Ödeme Alımı Paypal' 
      onChangeText={paypal => this.setState({Paypal: paypal})}
      mask={"[0000] [0000] [0000] [0000]"}
      />:this.state.kredikarti==true ? 
      <InputMask 
      keyboardType='phone-pad'
      placeholder='Ödeme Alımı Kredi Kartı' 
      onChangeText={kredikarti => this.setState({Kredi_Karti: kredikarti})}
      mask={"[0000] [0000] [0000] [0000]"}
      />:this.state.bankahesabı==true ? 
      <InputMask
      keyboardType='phone-pad'
      placeholder='Ödeme Alımı Banka Hesabı' 
      onChangeText={bankahesabi => this.setState({Banka_Hesabi: bankahesabi})}
      mask={"[0000] [0000] [0000] [0000]"}
      />
      :null }
   </View>

      

    <TextInputt
      style={{margin:20}} 
      placeholder='Onay Kodu' 
      onChangeText={onay_Kodu => this.setState({Onay_Kodu : onay_Kodu})}
      />

    


      <Button title="Kayıt" onPress={this.UserRegistrationFunction&&this.uploadImageToServer&&this.uploadImageToServer2}/>
      </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
       },
       ImageContainer: {
        borderRadius: 10,
        width: W/1.2,
        height: H/4,
        margin:10,
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        backgroundColor: '#DFDFDF',
     
      },
      checkbox:{
         width:W/5
      },
      input: {
        flex: 1,
        color: "#000",
        alignSelf: "center",
        marginLeft: 16,
        paddingTop: 14,
        paddingRight: 5,
        paddingBottom: 8,
        borderColor: "#D9D5DC",
        borderBottomWidth: 1,
        fontSize: 16,
        
        fontFamily: "roboto-regular",
        lineHeight: 16},
     
      TextInputStyle: {
     
        textAlign: 'center',
        height: 40,
        width: '80%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#028b53',
        marginTop: 20
      },
     
      button: {
     
        width: '80%',
        backgroundColor: '#00BCD4',
        borderRadius: 7,
        marginTop: 20
      },
     
      TextStyle: {
        color: '#fff',
        textAlign: 'center',
        padding: 10
      },
       mapcard:{
        height:H/2.2,
        width:H/2.2,
        borderRadius:10,
        borderWidth:2,
        margin:5,
        alignItems:'center',
        backgroundColor:'orange'
       }
})
