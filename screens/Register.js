import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import { ScrollView } from "react-native-gesture-handler";
import { Alert} from 'react-native'
const { width, height } = Dimensions.get("screen");
import data from '../usuario.json';

class Register extends React.Component {
  state = {
    cedula:'',
    name: '',
    celular:'',
    email: '',
    contra:'',
    confirm:'',
    ciudad:'',
    departamento:''
  }
  
  

  handleName(e) { this.state.name=e.nativeEvent.text}
  handleEmail(e) { this.state.email=e.nativeEvent.text }
  handleCedula(e) { this.state.cedula=e.nativeEvent.text }
  handleCelular(e) { this.state.celular=e.nativeEvent.text }
  handleContra(e) { this.state.contra=e.nativeEvent.text }
  handleConfir(e) { this.state.confirm=e.nativeEvent.text }
  handleCiudad(e) { this.state.ciudad=e.nativeEvent.text }
  handleDepa(e) { this.state.departamento=e.nativeEvent.text }

  emailValidator(email) {
    const re = /\S+@\S+\.\S+/;
  
    if (!email || email.length <= 0) return 'El email no puede estar vacio.';
    if (!re.test(email)) return 'Ooops! El email ingresado no es válido.';
  
    return '';
  };


  eventoRegistrar(){
    if(this.state.name == ""){
      console.log("Ingrese su nombre");
      Alert.alert( 'Error','Ingrese el nombre.',[{text: 'Aceptar', onPress: () => console.log("ok")}],{cancelable:false});
      return;
    }
    if(this.state.cedula == ""){
      console.log("Ingrese la cedula");
      Alert.alert( 'Error','Ingrese la cedula.',[{text: 'Aceptar', onPress: () => console.log("ok")}],{cancelable:false});
      return;
    }
    if(this.state.celular == ""){
      console.log("Ingrese su celular");
      Alert.alert( 'Error','Ingrese el numero de celular.',[{text: 'Aceptar', onPress: () => console.log("ok")}],{cancelable:false});
      return;
    }
    if(this.state.departamento == ""){
      console.log("Ingrese su celular");
      Alert.alert( 'Error','Ingrese el departamento en el que reside.',[{text: 'Aceptar', onPress: () => console.log("ok")}],{cancelable:false});
      return;
    }
    if(this.state.ciudad == ""){
      console.log("Ingrese su celular");
      Alert.alert( 'Error','Ingrese la ciudad en la que reside.',[{text: 'Aceptar', onPress: () => console.log("ok")}],{cancelable:false});
      return;
    }
    if(this.state.contra != this.state.confirm){
      console.log("no coinciden las contraseñas");
      Alert.alert( 'Error','No coinsiden las contraseñas',[{text: 'Aceptar', onPress: () => console.log("ok")}],{cancelable:false});
      return;
    }
    if(this.emailValidator(this.state.email)!=''){
      Alert.alert( 'Error',this.emailValidator(this.state.email),[{text: 'Aceptar', onPress: () => console.log("ok")}],{cancelable:false});
      return;
    }
    
    data.name=this.state.name;
    data.email=this.state.email;
    data.cc=this.state.cedula;
    data.telefono=this.state.celular;
    data.contrasena=this.state.contra;
    data.departamento=this.state.departamento;
    data.ciudad=this.state.ciudad;
    console.log(data)
    this.props.navigation.navigate("Login")
  }

  

  render() {
    const { navigation } = this.props;
    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block flex middle>
            <Block style={styles.registerContainer}>
             
              <Block flex>
                <ScrollView>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block middle>
                        <Image source={Images.logoRedondo} style={styles.logo} />
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 10 }}>
                      <Input
                        borderless
                        placeholder="Cédula"
                        onChange={(e)=>this.handleCedula(e)}
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 10 }}>
                      <Input
                        borderless
                        placeholder="Nombre"
                        onChange={(e)=>this.handleName(e)}
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 10 }}>
                      <Input
                        borderless
                        placeholder="Celular"
                        onChange={(e)=>this.handleCelular(e)}
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 10 }}>
                      <Input
                        borderless
                        placeholder="Email"
                        onChange={(e)=>this.handleEmail(e)}
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="ic_mail_24px"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 10 }}>
                      <Input
                        borderless
                        placeholder="Departamento"
                        onChange={(e)=>this.handleDepa(e)}
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="ic_mail_24px"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 10 }}>
                      <Input
                        borderless
                        placeholder="Ciudad"
                        onChange={(e)=>this.handleCiudad(e)}
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="ic_mail_24px"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>

                    <Block width={width * 0.8}>
                      <Input
                        password
                        borderless
                        placeholder="Contraseña"
                        onChange={(e)=>this.handleContra(e)}
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="padlock-unlocked"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                      
                    </Block>
                    <Block width={width * 0.8}>
                      <Input
                        password
                        borderless
                        placeholder="Confirmar contraseña"
                        onChange={(e)=>this.handleConfir(e)}
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="padlock-unlocked"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                      
                    </Block>
                    
                    <Block middle style={{ marginBottom: 15 }}>
                      <Button color="primary" 
                      style={styles.createButton}
                      onPress={() => this.eventoRegistrar()}
                      >
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          Crear cuenta
                        </Text>
                      </Button>
                    </Block>
                    <Block middle style={{flexDirection:"row"}}>
                      <Text size={12}>Ya poseo una cuenta: </Text>
                      <Button
                          style={{ width: 70 }}
                          onPress={() => navigation.navigate("Login")}
                          color="transparent"
                          textStyle={{
                            color: argonTheme.COLORS.PRIMARY,
                            fontSize: 12
                          }}
                        >
                          Log in
                        </Button>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
                </ScrollView>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.78,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  logo: {
    width: 150,
    height: 150,
    zIndex: 2,
    position: 'relative',
    marginTop: '5%'
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  }
});

export default Register;
