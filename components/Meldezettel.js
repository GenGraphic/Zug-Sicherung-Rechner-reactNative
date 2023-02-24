import React, {useState} from 'react'
import { View, StyleSheet, Text } from 'react-native';


const Meldezettel = () => {
    const [datum, setDatum] = useState('');

  return (
    <View style={styles.body}>
        <Text style={styles.text}>Datum: {datum} </Text>
        <View>
            <Text style={{textAlign:'center',color: '#EDF2F4'}}>Zug daten:</Text>
        </View>
    </View>
    
  )
}

export default Meldezettel

const styles = StyleSheet.create({
    body: {
        width: '90%',
        height: 100,
        backgroundColor: '#8D99AE',
        margin: 10,
        borderRadius: 10,
        padding: 5,
        borderColor: '#FFB454',
        borderWidth: 1
    },
    text: {
        color: '#EDF2F4'
    }
})