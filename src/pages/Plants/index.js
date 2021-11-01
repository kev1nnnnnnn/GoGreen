import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import styles from './style'

export default function Plants({navigation}){

    return (
        <View style={styles.container}>
            <View style={styles.contentTop}>
            <Text style={styles.titleAlbum}>Tipos de frutas</Text>
            <Text style={styles.textAlbum}>As frutas podem ser classificadas em três tipos principais: carnosos secos e citrícas. </Text>
            </View>


        <ScrollView style={styles.contentScroll}>
         

            <Text style={styles.titleScroll}>Frutos carnosos</Text>
            <Text style={styles.textScroll}>Os frutos carnosos, são aqueles que, quando maduros apresentam consistência macia.</Text>
            <Image 
            style={styles.albumImage}
            source={require('../../../assets/frutas-carnosas.jpg')}
            />
            
            <View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Carnosos')}
            >
                <Text style={styles.textButton}>Mais informações</Text>
            </TouchableOpacity>
            </View>

            <Text style={styles.titleScroll}>Frutas secas</Text>
            <Text style={styles.textScroll}>A principal característica das frutas secas é a de não apresentar polpa macia.</Text>
            <Image 
            style={styles.albumImage}
            source={require('../../../assets/frutas-secas.jpg')}
            />
             <View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Secas')}
            >
                <Text style={styles.textButton}>Mais informações</Text>
            </TouchableOpacity>
            </View>
            
            <Text style={styles.titleScroll}>Frutas cítricas ou frutas ácidas</Text>
            <Text style={styles.textScroll}>As frutas cítricas, também chamadas de frutas ácidas ou citrinos, têm como principal característica a acidez que resulta em sabor ligeiramente azedo.</Text>
            <Image 
            style={styles.albumImage}
            source={require('../../../assets/frutas-citricas.jpg')}
            />
             <View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Citricas')}
            >
                <Text style={styles.textButton}>Mais informações</Text>
            </TouchableOpacity>
            </View>
            
            
        </ScrollView>
    </View>
    );
    
}