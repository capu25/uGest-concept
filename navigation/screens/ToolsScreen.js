import { View, StyleSheet, TouchableOpacity, Image, Alert, Linking } from 'react-native'
import React from 'react'
import { Text } from '../../components/StyledText';

const ToolsScreen = ({ navigation }) => {

  //Funzione per la gestione del pulsante '+'
  const handleAdd = () => {
    Alert.alert(
      'Aggiungi strumento',
      'Hai dei suggerimenti per nuovi strumenti? Invia la tua proposta via mail e contribuisci alla crescita di uGest!',
      [
        {
          text: 'Annulla',
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => {
            const emailUrl = 'mailto:mail@test.com';
            Linking.openURL(emailUrl).catch((err) => {
              console.error('Errore nell\'apertura della mail:', err);
              Alert.alert('Errore', 'Non è stato possibile aprire l\'app email');
            });
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>

      <Text style={styles.headerText}>Seleziona uno degli strumenti a disposizione per utilizzarlo</Text>

      <View style={styles.containerRow}>
        <TouchableOpacity style={styles.pressable} onPress={() => {navigation.push('calendar')}}>
          <Image source={require('../../assets/customIcons/calendar.png')} style={{height: 90, width: 90}}/>
          <Text style={{textAlign: 'center', fontSize: 20}}>calendario</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pressable} onPress={() => {navigation.push('chatbot')}}>
          <Image source={require('../../assets/customIcons/chatbot.png')} style={{height: 90, width: 90}}/>
          <Text style={{textAlign: 'center', fontSize: 20}}>assistente AI</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.containerRow, {top: '8%'}]}>
        <TouchableOpacity style={styles.pressable} onPress={() => {navigation.push('pdfReader')}}>
          <Image source={require('../../assets/customIcons/qr.png')} style={{height: 90, width: 90}}/>
          <Text style={{textAlign: 'center', fontSize: 20}}>scanner QR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pressable} onPress={() => {navigation.push('kanban')}}>
          <Image source={require('../../assets/customIcons/kanban.png')} style={{height: 90, width: 90}}/>
          <Text style={{textAlign: 'center', fontSize: 20}}>Kanban Table</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.containerRow, {top: '12%', right: '24%'}]}>
        <TouchableOpacity style={styles.pressable} onPress={() => {navigation.push('sign')}}>
          <Image source={require('../../assets/customIcons/sign.png')} style={{height: 90, width: 90}}/>
          <Text style={{textAlign: 'center', fontSize: 20}}>firma</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={{left: '38%', top: '4%'}} onPress={handleAdd}>
        <Image source={require('../../assets/customIcons/add.png')} style={{height: 60, width: 60, borderRadius: 30}}/>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  headerText:{
    fontSize: 25,
    textAlign: 'center',
    bottom: '2%'
  },
  containerRow:{
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-around',
    top: 30
  },
  pressable:{
    borderWidth: 1,
    borderColor: '#ebebeb',
    backgroundColor: '#ebebeb',
    padding: 15,
    borderRadius: 20,
    width: '45%',
    alignItems: 'center'
  }
});

export default ToolsScreen