import { StyleSheet, Text, View, Image, TextInput, Keyboard, TouchableWithoutFeedback, Pressable, ScrollView} from 'react-native';
import CheckBox from 'expo-checkbox';
import React, { useState } from 'react';
import Rechner from '../components/Rechner';

const DismissKeybord = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);



const RechnerScreen = ({navigation}) => {
    const [isChecked, setChecked] = useState(false);
    const [gewicht, setGewicht] = useState('');
    const [neigung, setNeigung] = useState('');
    const [radsätze, setRadsätze] = useState('');
    const [resultKN, setResultKN] = useState('');
    const [resultFestMittle, setResultFestMittle] = useState('');

    function OpenMenu() {
        MenuLeft.styles.body.width = 100; 
    }

    function StartCalculate() {
        let results = Rechner(gewicht, neigung, radsätze, isChecked)

    setResultKN(results[0]);
    setResultFestMittle(results[1]);
    }
    return (
    <DismissKeybord>
    
      <View style={styles.body}>

        <View>
          <Text style={styles.title}>Rechner Zug Sicherung</Text>
        </View>

        <ScrollView contentContainerStyle={styles.scrollBody}>
          <View style={styles.inputField}>
            <Image style={styles.icon} source={require('../assets/icons/time-icon.png')}/>
            <Text style={styles.textField}>Abstellzeit nicht mehr als eine Stunde</Text>
            <CheckBox 
              value={isChecked} 
              onValueChange={setChecked}/>
          </View>

          <View style={styles.inputField}>
            <Image style={styles.icon} source={require('../assets/icons/weight-icon.png')}/>
            <Text style={styles.textField}>Wie schwer ist der Zug?(Tonen)</Text>
            <TextInput 
              style={styles.inputTxt} 
              keyboardType='numeric' 
              placeholder='1200' 
              maxLength={4}
              onChangeText={text => setGewicht(text)}
            />
          </View>

          <View style={styles.inputField}>
            <Image style={styles.icon} source={require('../assets/icons/angle-icon.png')}/>
            <Text style={styles.textField}>Wie groß ist die Neigung?</Text>
            <TextInput 
              style={styles.inputTxt} 
              keyboardType='numeric' 
              placeholder='2.5' 
              maxLength={4}
              onChangeText={text => setNeigung(text)}
            />
          </View>

          <View style={styles.inputField}>
            <Image style={styles.icon} source={require('../assets/icons/axle-icon.png')}/>
            <Text style={styles.textField}>Wie viele Radsätze hat der Zug?</Text>
            <TextInput 
              style={styles.inputTxt} 
              keyboardType='numeric' 
              placeholder='50' 
              maxLength={3}
              onChangeText={text => setRadsätze(text)}
            />
          </View>

          <View>
            <Pressable style={styles.btnRechnen}>
              <Text 
                style={styles.textBtn} 
                onPress={StartCalculate}
                >Rechnen
              </Text>
            </Pressable>
            <Pressable style={styles.btnSave}>
              <Text 
                style={styles.textBtn} 
                >Speichern
              </Text>
            </Pressable>
          </View>

          <View style={styles.resultCont}>
              <Text style={{fontSize:26, color: '#2B2D42'}}>Sie brauchen:</Text>
              <Text style={{fontSize:40, color:'#2B2D42'}}>
                {resultKN + 'kn'}
              </Text>
              <Text style={{fontSize:15, color:'#2B2D42'}}>oder</Text>
              <Text style={{fontSize:30, color:'#2B2D42'}}>
                {resultFestMittle + ' Feststellmittle'}
              </Text>
          </View>

        </ScrollView>
      </View>
    
    </DismissKeybord>
    )
}

export default RechnerScreen;

const styles = StyleSheet.create({
    body: {
      backgroundColor: '#2B2D42',
      flex: 1
    },
    scrollBody: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'space-around'
    },  
    title: {
      textAlign: 'center',
      paddingTop: 50,
      fontSize: 26,
      color: '#EDF2F4',
      marginBottom: 30,
    },
    inputField: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#EDF2F4',
      borderRadius: 5,
      width: '90%',
      height: 55,
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      shadowColor: '#fff',
      shadowOffset: {width: -4, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3
    },
    icon: {
      width: 30,
      height: 30
    },
    textField: {
      color: '#2B2D42'
    },
    inputTxt: {
      borderBottomColor: '#2B2D42',
      borderBottomWidth: 1
    },
    btnRechnen: {
      backgroundColor: '#FFB454',
      width: 230,
      height: 30,
      borderRadius: 5,
      padding: 5,
      marginBottom: 20
    },
    btnSave: {
        width: 230,
        height: 30,
        borderRadius: 5,
        borderColor: '#FFB454',
        borderWidth: 1,
        padding: 5,
      },
    textBtn: {
      color: '#EDF2F4',
      textAlign: 'center',
      fontSize: 18,
    },
    resultCont: {
      backgroundColor: '#EDF2F4',
      height: 200,
      width: '90%',
      borderRadius: 5,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      shadowColor: '#fff',
      shadowOffset: {width: -4, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3
    },
    userCont: {
      backgroundColor: '#fff',
      height: 80,
      width: 100,
      alignSelf: 'center',
      borderRadius: 50,
      marginBottom: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });