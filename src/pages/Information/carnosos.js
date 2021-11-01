import React from "react";
import { View, Text } from "react-native";
import styles from './style';

export default function Information_1(){

    return (
        <View style={styles.container}>
            <Text style={styles.textSeca}>Esse grupo de frutos subdivide-se ainda em três tipos: bagas, drupas e pomos.</Text>
            <Text style={styles.textSeca}>Exemplos de frutos carnosos: laranja, maçã e melancia.</Text>
        </View>
    );
    
}