import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      nome: "",
      sobrenome: "",
      email: "",
      senha: "",
      confirmarsenha: "",
    };
  }

  register = () => {};
  render() {
    return (
      <View style={styles.container}>
        <Text>Tela de Registro</Text>
        <TextInput
          placeholder="Nome"
          style={styles.inputstyle}
          value={this.state.nome}
          onChangeText={(text) => {
            this.setState({ nome: text });
          }}
        ></TextInput>
        <TextInput
          placeholder="Sobrenome"
          style={styles.inputstyle}
          value={this.state.sobrenome}
          onChangeText={(text) => {
            this.setState({ sobrenome: text });
          }}
        ></TextInput>
        <TextInput
          placeholder="Email"
          style={styles.inputstyle}
          value={this.state.email}
          onChangeText={(text) => {
            this.setState({ email: text });
          }}
        ></TextInput>
        <TextInput
          placeholder="Senha"
          style={styles.inputstyle}
          value={this.state.senha}
          onChangeText={(text) => {
            this.setState({ senha: text });
          }}
        ></TextInput>
        <TextInput
          placeholder="Confirmar senha"
          style={styles.inputstyle}
          value={this.state.confirmarsenha}
          onChangeText={(text) => {
            this.setState({ confirmarsenha: text });
          }}
        ></TextInput>
        <TouchableOpacity style={styles.opacitystyle}>
          <Text>Registrar!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Text>Voltar para login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  inputstyle: {
    width: "60%",
    height: 55,
    padding: 10,
    backgroundColor: "#FF1493",
    borderRadius: 15,
    fontSize: 15,
  },

  opacitystyle: {
    backgroundColor: "#DC143C",
    width: "60%",
    height: 50,
    borderRadius: 20,
    alignItems: "center",
  },
});
