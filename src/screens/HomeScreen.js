import React, { Component } from 'react'
import {Button,Dimensions,
  TextInput,View,Text, Alert,StyleSheet} from 'react-native';
import CheckBox from 'react-native-checkbox';
import Buton from '../components/Buton';
import AutoTags from 'react-native-tag-autocomplete';

const H = Dimensions.get('screen').height;
const W = Dimensions.get('screen').width;


class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
    };
  constructor(props){
    super(props);
  
  this.state = {
    tagsSelected: [],
    diller:null,
    Hizmet:false,
    Tercuman:false
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
      this.setState({diller:responseJson})
      })
      .catch((error) => {
        console.error(error);
      });
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
         <View style={styles.autocompleteContainer}>
         <Text style={{fontSize: 28, color:"#000",paddingBottom:20}}>Bildiğiniz Dilleri Giriniz</Text>
          <AutoTags
            suggestions={this.state.diller}
            tagsSelected={this.state.tagsSelected}
            handleAddition={this.handleAddition}
            handleDelete={this.handleDelete}
          />
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

        <Buton title="Oturum Aç"
          style={{width:W/1.5}}
          onPress={()=> this.props.navigation.navigate('Giris')}
        />

        
    </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  autocompleteContainer: {
    alignItems:'center',
    justifyContent:'center',
    paddingTop: 0,
    zIndex: 1,
    width: "100%",
    paddingHorizontal: 8,
    marginBottom:40,
  },
  input: {maxHeight: 40},
  inputContainer: {
    display: "flex",
    flexShrink: 0,
    flexGrow: 0,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#c7c6c1",
    paddingVertical: 13,
    paddingLeft: 12,
    paddingRight: "5%",
    width: "100%",
    justifyContent: "flex-start",
  },
  plus: {
    position: "absolute",
    left: 15,
    top: 10,
  },
});

export default HomeScreen;
