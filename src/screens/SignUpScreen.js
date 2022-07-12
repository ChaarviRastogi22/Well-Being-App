import React, { useState, useContext } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';

const SignUpScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState(null);

  return (
    <>
      <View style = {styles.container}>
          <Text style = {{fontSize: 25, marginTop: 50}}>Welcome User</Text>
          <Text>Sign up to continue</Text>
          <Image 
              style = {styles.logo}
              source = {require('../../assets/images.png')}
          />
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
      <View style = {{alignItems: 'center', justifyContent: 'space-around'}}>
        <TouchableOpacity 
        style = {styles.buttonStyling}
          onPress={() => signup({ email, password, name, contact })} >
            <Text style = {{justifyContent: 'center', alignItems: 'center', color: 'white'}}>Sign up</Text>
          </TouchableOpacity>
        <TouchableOpacity 
          style = {styles.buttonStyling}
          onPress = {() => navigation.navigate('Signin')} >
              <Text style = {{justifyContent: 'center', alignItems: 'center', color: 'white'}}>Login</Text>
            </TouchableOpacity>
        </View>
    </View>
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
      }
});

export default SignUpScreen;
