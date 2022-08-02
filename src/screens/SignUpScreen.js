import React, { useState, useContext } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';

const SignUpScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState(null);

  console.log(state);

  return (
    <>
    <ScrollView
      showsVerticalScrollIndicator = {true}>
      <View style = {styles.container}>
          <Text style = {{fontSize: 25, marginTop: 50}}>Welcome User</Text>
          <Text>Sign up to continue</Text>
          <Image 
              style = {styles.logo}
              source = {require('../../assets/images.png')}
          />
          <Spacer />
      <View style = {{justifyContent: 'center'}}>
      <Input
        label="Name"
        value={name}
        onChangeText={setName}
        autoCorrect={false}
      />
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        label="Phone no"
        value={contact}
        onChangeText={setContact}
      />
      </View>

      {state.errorMessage ? <Text style = {styles.errorText}>{state.errorMessage}</Text> : null }
      
      <View style = {{alignItems: 'center', justifyContent: 'space-around'}}>
        <TouchableOpacity 
        style = {styles.buttonStyling}
          onPress={() => signup({ email, password, name, contact })} >
            <Text style = {{justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: 15}}>Sign up</Text>
          </TouchableOpacity>
        <TouchableOpacity 
          style = {styles.buttonStyling}
          onPress = {() => navigation.navigate('Signin')} >
              <Text style = {{justifyContent: 'center', alignItems: 'center', color: 'white'}}>Login</Text>
            </TouchableOpacity>
        </View>
    </View>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
    logo: {
        height: 100,
        width: 100,
        marginLeft: 100,
        marginTop: 20
    },
  container: {
        flex: 1,
        justifyContent: 'center',
        margin: 15
      },
      buttonStyling: {
        backgroundColor: '#00bbc4',
        alignItems: 'center',
        borderRadius: 25,
        height: 35,                        
        width: 200,
        justifyContent: 'center',
        marginTop: 30
      },
      errorText: {
        fontSize: 20,
        color: 'red'
      }
});

export default SignUpScreen;
