import { View, StyleSheet, TouchableOpacity, TextBase } from 'react-native'
import { React, useContext, useState } from 'react'

//IMPORT CONTEXT
import { EmojiContext } from '../../context/EmojiContext';

//IMPORT CUSTOM TEXT
import { Text } from '../../components/StyledText';

//IMPORT TASKLIST
import TaskList from '../../components/TaskList';

//IMPORT PERCENTAGE WIDGET
import ProgressCircle from '@ecancan/react-native-progress-circle';

const HomeScreen = ({ navigation }) => {

  const {profileEmoji } = useContext(EmojiContext);
  const [taskProgress, setTaskProgress] = useState(0);

  const handleTaskCountUpdate = ({ total, completed }) => {
    const progress = total === 0 ? 0 : Math.round((completed / total) * 100);
    setTaskProgress(progress);
  };

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('it-IT', {
    day: 'numeric',
    month: 'long',
    //year: 'numeric'
  });

  return (
    <View style={styles.container}>
      
      <View style={styles.headerContainer}>
        <View>
          <Text style={{fontSize: 30}}>Ciao Antonio Pio</Text>
          <Text style={{fontSize: 25, fontFamily: 'nunito-thin', color: '#737373'}}>{formattedDate}</Text>
        </View>

        <TouchableOpacity style={styles.userImage} onPress={() => navigation.navigate('impostazioni')}>
          <Text style={{fontSize: 40}}>{profileEmoji}</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.headerContainer, {top: 10}]}>
        <Text style={{fontSize: 26}}>Ecco i tuoi <Text style={{fontSize: 26, fontFamily: 'nunito-bold'}}>principali incarichi:</Text></Text>
      </View>

      <View style={styles.taskContainer}>
        <View style={{flex:1}}>
          <TaskList onTaskCountUpdate={handleTaskCountUpdate} />
        </View>
      </View>

      <View style={styles.widgetRow}>
        <View style={[styles.widget, {right: 4.2, justifyContent: 'center', alignItems: 'center'}]}>
            <ProgressCircle
              percent={taskProgress}
              radius={45}
              borderWidth={10}
              color="#4686ff"
              shadowColor="white"
              bgColor="#ebebeb"
            >
              <Text style={{ fontSize: 18 }}>{taskProgress}%</Text>
            </ProgressCircle>
            <Text style={{fontSize: 15, top: 2, textAlign: 'center'}}>Completamento incarichi</Text>
        </View>
        <View style={[styles.widget, {left: 4.2}]}>
          <Text style={{fontFamily: 'nunito-bold'}}>Domani:</Text>
          <View style={{marginTop: 15}}>
            <Text><Text style={{color:'#4686ff'}}>● </Text>Modifica UI/UX</Text>
            <Text style={{marginVertical: 5}}><Text style={{color:'#4686ff'}}>● </Text>Sviluppo .Net</Text>
            <Text><Text style={{color:'#4686ff'}}>● </Text>Call revisione c...</Text>
          </View>
        </View>
      </View>

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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
  },
  userImage: {
    padding: 10,
  },
  taskContainer:{
    borderWidth: 1,
    borderColor: '#ebebeb',
    backgroundColor: '#ebebeb',
    padding: 10,
    borderRadius: 20,
    width: '90%',
    height: '50%',
    top: 20,
  },
  widgetRow:{
    flexDirection: 'row',
    width: '90%',
    height: '20%',
    justifyContent: 'space-around',
    top: 40
  },
  widget:{
    borderWidth: 1,
    borderColor: '#ebebeb',
    backgroundColor: '#ebebeb',
    borderRadius: 20,
    padding: 10,
    width: '48%'
  }
})

export default HomeScreen;