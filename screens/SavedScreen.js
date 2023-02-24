import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Meldezettel from "../components/Meldezettel";


const RechnerScreen = ({navigation}) => {
    return (
        <View style={styles.body}>
            <Text style={styles.title}>Daten</Text>

            <ScrollView contentContainerStyle={styles.zettelCont}>
                <Meldezettel></Meldezettel>
                <Meldezettel></Meldezettel>
                <Meldezettel></Meldezettel>
                <Meldezettel></Meldezettel>
            </ScrollView>
        </View>
    )
}

export default RechnerScreen;

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#2B2D42',
        flex: 1
    },
    title: {
        color: '#FFF',
        textAlign: 'center',
        marginTop: 50,
        fontSize: 26
    },
    zettelCont: {
        alignItems: 'center',

    }

})