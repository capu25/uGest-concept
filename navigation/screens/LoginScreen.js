import { View, StyleSheet, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'

//IMPORT CUSTOM TEXT
import { Text } from '../../components/StyledText';

const LoginScreen = ({ navigation }) => {

  const [visiblePassword, setVisiblePassword] = useState(false);

  const handleNav = () => {
    navigation.replace('mainTabs');
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

      <View>
        <Image
          source={require('../../assets/appImages/mainLogo.png')}
          style={{ height: 170, width: 170, bottom: 50 }}
          resizeMode="contain"
        />
      </View>

      <View style={styles.box}>
        <View style={styles.inputGroup}>
          <Text style={styles.labelText}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="sample@mail.to"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.labelText}>Password</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={[styles.input, { flex: 1, right: 10 }]}
              placeholder="●●●●"
              secureTextEntry={!visiblePassword}
              autoCapitalize='none'
            />
            <TouchableOpacity
               onPress={() => setVisiblePassword(!visiblePassword)}
               style={styles.eyeIconContainer}
            >
              <Text style={{ fontSize: 16, color: '#4686ff' }}>
                {visiblePassword ? '🔒' : '👁️'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={[styles.labelText, {color: '#4686ff'}]}>ID Aziendale</Text>
          <TextInput
            style={styles.input}
            placeholder="ES: CN01"
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNav}>
        <Text style={styles.buttonText}>Accedi</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.helpText}>non riesco ad accedere</Text>
      </TouchableOpacity>

    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ebebeb'
  },
  box:{
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    bottom: 20
  },
  labelText:{
    fontFamily: 'nunito-bold',
    fontSize: 22
  },
  inputGroup:{
    margin: 10
  },
  input:{
    borderWidth: 1,
    borderColor: '#ebebeb',
    padding: 5,
    borderRadius: 7,
    backgroundColor: '#ebebeb',
    width: 300,
    height: 50,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ebebeb',
    borderRadius: 8,
    backgroundColor: '#ebebeb',
    paddingHorizontal: 10,
  },
  eyeIconContainer: {
    marginLeft: 10,
  },
  button: {
    borderWidth: 2,
    borderColor: '#4686ff',
    backgroundColor: '#fff',
    padding: 10,
    paddingHorizontal: 60,
    borderRadius: 10
  },
  buttonText: {
    fontFamily: 'nunito-bold',
    fontSize: 25,
    color: '#4686ff'
  },
  helpText: {
    fontFamily: 'nunito',
    fontSize: 15,
    top: 100
  }
})

export default LoginScreen;