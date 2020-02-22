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
import { openDatabase } from "expo-sqlite";
import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import { ScrollView } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("screen");
const db = openDatabase("walkdog.db");
class Register extends React.Component {
  state = {
    cedula:'',
    name: '',
    celular:'',
    email: '',
    contra:'',
    confirm:''
  }

  

  handleName(e) { this.state.name=e.nativeEvent.text}
  handleEmail(e) { this.state.email=e.nativeEvent.text }
  handleCedula(e) { this.state.cedula=e.nativeEvent.text }
  handleCelular(e) { this.state.celular=e.nativeEvent.text }
  handleContra(e) { this.state.contra=e.nativeEvent.text }
  handleConfir(e) { this.state.confirm=e.nativeEvent.text }

  eventoRegistrar(){
    db.transaction(tx => {
      tx.executeSql(
        "INSERT INTO Paseador VALUES ('"+this.state.cedula+"','"+this.state.name+"','"+this.state.celular+"','"+this.state.email+"',0,0)"
      );
      tx.executeSql(
        'SELECT * FROM Paseador',
        [],
        (tx,result)=>{
          console.log('asasa');
        },
        () => console.log("error fetching")
      );
    });
  }

  creartablas(){
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS "Paseador" ("Cedula"	NUMERIC,"Nombre"	TEXT,"Celular"	TEXT, "Correo"	TEXT,"Paseos"	INTEGER,"Calificacion"	INTEGER,PRIMARY KEY("Cedula");'
        );
    });
  }

  render() {
    const { navigation } = this.props;
    this.creartablas();
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
                    <Block row width={width * 0.75}>
                      <Checkbox
                        checkboxStyle={{
                          borderWidth: 3
                        }}
                        color={argonTheme.COLORS.PRIMARY}
                        label="I agree with the"
                      />
                      <Button
                        style={{ width: 100 }}
                        color="transparent"
                        textStyle={{
                          color: argonTheme.COLORS.PRIMARY,
                          fontSize: 14
                        }}
                      >
                        Privacy Policy
                      </Button>
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
