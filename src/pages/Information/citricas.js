import React from "react";
import { View, Text } from "react-native";
import styles from "./style"

export default function Information_3(){

    return (
        <View style={styles.container}>
             <Text style={styles.textSeca}>As frutas secas estão subdivididas em dois grupos: frutas secas deiscentes e frutas secas indeiscentes.</Text>
            <Text style={styles.textSeca}>Exemplos de frutos secos: amêndoas, castanhas, nozes e avelãs.</Text>
        </View>
    );
    
}