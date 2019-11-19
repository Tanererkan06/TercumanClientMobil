import React, { Component } from 'react'
import { Text, StyleSheet,View,Image, Alert,Dimensions,TouchableOpacity,PixelRatio,Button,TextInput,SafeAreaView,ScrollView} from 'react-native';
import CheckBox from 'react-native-checkbox'
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob';
import  TextInputt  from "../components/TextInputt";
import TextInputMask from 'react-native-text-input-mask';
import InputMask from "../components/InputMask";
import AutoTags from 'react-native-tag-autocomplete';

const H = Dimensions.get('screen').height;
const W = Dimensions.get('screen').width;



export default class Hizmet extends Component {
  constructor() {
 
    super()
 
    this.state = {
      
      
      ImageSource: null,
      data: null,
      
      diller:'',
      tagsSelected: [],

      iban:false,
      paypal:false,
      kredikarti:false,
      bankahesabı:false, 
     

      Adi: '',
      Soyadi: '',
      Aranilandil: '',
      Telefon:'',
      Email:'',
      Password:'',
      İban:'',
      Paypal:'',
      Kredi_karti:'',
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
 
    RNFetchBlob.fetch('POST', 'http://192.168.8.137/User_Project/upload_image.php', {
      Authorization: "Bearer access-token",
      otherHeader: "foo",
      'Content-Type': 'multipart/form-data',
    }, [
        { name: 'image', filename: 'image.png', data: this.state.data}
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
        );;
 
      }).catch((err) => {
        // ...
      })
 
  }



 UserRegistrationFunction = () =>{

  fetch('http://192.168.8.137/User_Project/hizmet.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
      adi: this.state.Adi,
  
      soyadi: this.state.Soyadi,
  
      aranilandil: this.state.Aranilandil,

      telefon: this.state.Telefon,
      
      email: this.state.Email,
      
      password:this.state.Password,
      
      iban: this.state.İban,
      
      paypal:this.state.Paypal,
      
      kredikarti:this.state.Kredi_Karti,
      
      bankahesabi:this.state.Banka_Hesabi,
      
      onaykodu: this.state.Onay_Kodu
      
  
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
handleDelete = index => {
  //tag deleted, remove from our tags array
  let tagsSelected = this.state.tagsSelected;
  tagsSelected.splice(index, 1);
  this.setState({ tagsSelected });
}

handleAddition = dil => {
  //suggestion clicked, push it to our tags array
  this.setState({ tagsSelected: this.state.tagsSelected.concat([dil]) });
}

componentDidMount() {
  return fetch('http://192.168.8.137/User_Project/diller.php')
    .then((response) => response.json())
    .then((responseJson) => {
    this.setState({Aranilandil:responseJson})
    })
    .catch((error) => {
      console.error(error);
    });
}

kayitol = () => {
  const { Adi }  = this.state ;
  const { Soyadi }  = this.state ;
  const { Telefon }  = this.state ;
  const { Aranilandil }  = this.state ;
  const { Email }  = this.state ;
  const { Password }  = this.state ;
  
if (Adi||Soyadi||Telefon||Aranilandil||Email||Password !='') {
 this.UserRegistrationFunction&&this.uploadImageToServer
} else {
  Alert.alert('')
 
}
}

  render() {
    return (
      
      <SafeAreaView>
      <ScrollView >
      <View style={{alignItems:'center'}}>

      <AutoTags
            suggestions={this.state.Aranilandil}
            tagsSelected={this.state.tagsSelected}
            handleAddition={this.handleAddition}
            handleDelete={this.handleDelete}
          /> 

          </View>
      
    
      <TextInputt  
      placeholder='Adınız' 
      onChangeText={text => this.setState({Adi : text})}
      />
      
      <TextInputt 
      placeholder='Soyadınız' 
      onChangeText={text => this.setState({Soyadi : text})}
      />
     <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View style={styles.ImageContainer}>

            {this.state.ImageSource === null ? <Text>Diplomanızı Yükleyin</Text> :
              <Image style={styles.ImageContainer} source={this.state.ImageSource} />
            }
          </View>
      </TouchableOpacity>
      <Button
      
      title="resimleri yükle" onPress={this.uploadImageToServer}/>   
     <TextInputt 
      placeholder='Emailiniz' 
      keyboardType='email-address'
      onChangeText={text => this.setState({Email : text})}
      />
      <TextInputt 
      placeholder='Şifre oluşturun' 
      onChangeText={text => this.setState({Password : text})}
      />
     <InputMask
        keyboardType='phone-pad'
        placeholder='Telefonunuz'   
        onChangeText={text => this.setState({Telefon : text})}
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
      checked={this.state.bankahesabı}
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
      keyboardType='email-address'
      placeholder='Ödeme Alımı Paypal' 
      onChangeText={paypal => this.setState({Paypal: paypal})}
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

    


      
      <Button title="Kayıt" onPress={this.UserRegistrationFunction}/>
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
