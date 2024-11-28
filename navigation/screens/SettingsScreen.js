import React, { useState, useContext } from 'react'
import { View, StyleSheet, TouchableOpacity, Modal, Alert, Linking } from 'react-native'
import { Text } from '../../components/StyledText';
import { EmojiContext } from '../../context/EmojiContext';

const EMOJI_OPTIONS = ['🧑🏻‍💻', '👩‍💻', '🧔🏻','👩🏻','🤖', '🚀'];

const SettingsScreen = ({ navigation }) => {
  const { profileEmoji, setProfileEmoji } = useContext(EmojiContext);
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);

  const handleEmojiSelect = (emoji) => {
    setProfileEmoji(emoji); // Update the context
    setEmojiPickerVisible(false);
  };

  const handleDeleteData = () => {
    Alert.alert(
      'Elimina dati',
      'Proseguendo tutti i tuoi dati verrano eliminati e sarai reindirizzato alla schermata di accesso.',
      [
        {
          text: 'Annulla',
          style: 'cancel'
        },
        {
          text: 'Elimina',
          style: 'destructive',
          onPress: () => {
            //toDo
            navigation.navigate('login');
          }
        }
      ]
    );
  };

    //Funzione per la gestione del pulsante 'segnalazione errori'
  const handleErrorSpot = () => {
    Alert.alert(
      'Segnalazione errore',
      'Hai notato dei problemi? Invia il tuo riscontro via mail.',
      [
        {
          text: 'Annulla',
        },
        {
          text: 'Prosegui',
          style: 'cancel',
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

  const openCustomSite = async () => {
    const url = 'https://www.google.it';
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.error(`Non posso aprire questo URL: ${url}`);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setEmojiPickerVisible(true)}>
        <Text style={{fontSize: 110}}>{profileEmoji}</Text>
      </TouchableOpacity>

      <Modal
        visible={emojiPickerVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setEmojiPickerVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.emojiPicker}>
            {EMOJI_OPTIONS.map((emoji) => (
              <TouchableOpacity 
                key={emoji} 
                onPress={() => handleEmojiSelect(emoji)}
                style={styles.emojiOption}
              >
                <Text style={{fontSize: 50}}>{emoji}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>

      <View style={styles.mainText}>
        <Text style={{fontSize: 35, fontFamily: 'nunito-bold'}}>Antonio Pio Caputo</Text>
        <Text style={{fontSize: 25, textAlign: 'center', color: '#919191'}}>Software Developer</Text>
      </View>

      <View style={styles.optBox1}>
        <TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate('personal-info')}}>
          <Text style={styles.btnText}>🙎🏻‍♂️ Informazioni personali</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={openCustomSite}>
          <Text style={styles.btnText}>🔒 Accesso e sicurezza</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={openCustomSite}>
          <Text style={styles.btnText}>✉️ Contatta un superiore</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.optBox2}>
        <TouchableOpacity style={styles.btn} onPress={handleErrorSpot}>
          <Text style={styles.btnText}>⚠️ Segnala un errore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={handleDeleteData}>
          <Text style={styles.btnText}>🗑️ Elimina dati</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.exitBtn} onPress={() => navigation.navigate('login')}>
        <Text style={{fontFamily: 'nunito-bold', textAlign: 'center', fontSize: 20, color: 'red'}}>Esci</Text>
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
  mainText:{
    //margin if needed
  },
  optBox1:{
    borderWidth: 1,
    borderColor: '#ebebeb',
    backgroundColor: '#ebebeb',
    padding: 18,
    borderRadius: 20,
    width: '90%',
    top: 10
  },
  optBox2:{
    borderWidth: 1,
    borderColor: '#ebebeb',
    backgroundColor: '#ebebeb',
    padding: 18,
    borderRadius: 20,
    width: '90%',
    top: 25
  },
  btn:{
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 5
  },
  btnText:{
    fontSize: 20,
    margin: 10
  },
  exitBtn:{
    borderWidth: 1,
    borderColor: '#ebebeb',
    backgroundColor: '#ebebeb',
    padding: 10,
    borderRadius: 12,
    width: '90%',
    top: 38
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  emojiPicker: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: 300
  },
  emojiOption: {
    margin: 10,
    padding: 10,
    borderRadius: 10
  }
});

export default SettingsScreen;