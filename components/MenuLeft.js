import { Text, View, StyleSheet, Image } from 'react-native';
import React, { Component, useState } from 'react';

export class MenuLeft extends Component {
    
  render() {
    return (
      <View style={styles.body}>
        <Text style={styles.menuTitle}>Menu</Text>

        <View style={styles.iconsCont}>
            <View style={styles.buttons}>
                <Image style={styles.icons} source={require('../assets/icons/settings.png')}/>
                <Text>Einstellungen</Text>
            </View>

            <View style={styles.buttons}>
                <Image style={styles.icons} source={require('../assets/icons/logout.png')}/>
                <Text>Abmelden</Text>
            </View>

            <View style={styles.buttons}>
                <Image style={styles.icons} source={require('../assets/icons/cancel.png')}/>
                <Text>Close</Text>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    body: {
        width: 100,
        height: '100%',
        backgroundColor: '#EDF2F4',
        paddingTop: 50,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    menuTitle: {
        textAlign: 'center',
        fontSize: 18,
    },
    icons: {
        width: 50,
        height: 50,
    },
    buttons: {
        display: 'felx',
        alignItems: 'center',
    },
    iconsCont: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
})

export default MenuLeft