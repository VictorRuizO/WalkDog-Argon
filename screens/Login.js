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
import { Alert} from 'react-native'
import data from '../usuario.json';
const { width, height } = Dimensions.get("screen");

class Login extends React.Component {
  state = {
    email: '',
    contra:''
  }

  handleEmail(e) { this.state.email=e.nativeEvent.text }
  handleContra(e) { this.state.contra=e.nativeEvent.text }

  eventoLogin(){
    if(this.state.contra != data.contrasena || this.state.email != data.email){
      console.log("usuario no encontrado");
      Alert.alert( 'Error','No coincide el usuario y la contraseña o el usuario no esta registrado.',[{text: 'Aceptar', onPress: () => console.log("ok")}],{cancelable:false});
      return;
    }
    console.log(data)
    console.log(this.state)
    this.props.navigation.navigate("Home")
    
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
                        placeholder="Email"
                        onChange={(e)=>this.handleEmail(e)}
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="ic_mail_24px"
                            value="adasdasda"
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
                        placeholder="Password"
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
                    
                    <Block middle style={{ marginBottom: 15 }}>
                      <Button color="primary" 
                      style={styles.createButton}
                      onPress={() => this.eventoLogin()}
                      >
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          Login
                        </Text>
                      </Button>
                    </Block>
                    <Block middle style={{flexDirection:"row"}}>
                      <Text size={12}>No poseo una cuenta: </Text>
                      <Button
                          style={{ width: 70 }}
                          onPress={() => navigation.navigate("Register")}
                          color="transparent"
                          textStyle={{
                            color: argonTheme.COLORS.PRIMARY,
                            fontSize: 12
                          }}
                        >
                          Registrarme
                        </Button>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
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

export default Login;
