import React from 'react';
import {View, Image, Text, TouchableOpacity, Linking} from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'

import logoImg from '../../assets/logo.png'

import styles from './style';
import { FlatList } from 'react-native-gesture-handler';
export default function Detail()
{
    const navigation = useNavigation()
    // const message = `Olá ${incident.name}, gostaria de ajudar no caso '${incident.title}' com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}`
    const message = `Olá APAD, gostaria de ajudar no caso caso1 com o valor de`;


    function navagationBack()
    {
        navigation.goBack()
    }
    function sendMail() {
        MailComposer.composeAsync({
           subject: `Herói do caso:1`,
           recipients: 'leo@leo.com',
           body: message
        })
     }
  
    function sendWhatsapp()
    {
        Linking.openURL(`whatsapp://send?phone=351936884061&text=${message}`)
    }
    
    return(
        <View style={styles.container}>
         <View style={styles.header}>
            <Image source={logoImg} />

            <TouchableOpacity onPress={navagationBack} >
               <Feather name="arrow-left" size={28} color="#E82041" />
            </TouchableOpacity>
         </View>

         <View style={styles.incident}>
            <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
            <Text style={styles.incidentValue}>NOME de poa/RS </Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>Test1</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text  >
            <Text style={styles.incidentValue}>
                {/* {
                    Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency: 'BRL'
                    }).format(incident.value)
                } */}
                R$ 120,00
            </Text>
         </View>
         <View style={styles.contactBox}>
            <Text style={styles.heroTitle}>Salve o dia!</Text>
            <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

            <Text style={styles.heroDescription}>Entre em contato: </Text>

            <View style={styles.actions}>
               <TouchableOpacity style={styles.action}  onPress={sendWhatsapp}>
                  <Text style={styles.actionText}>WhatsApp</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.action} onPress={sendMail}>
                  <Text style={styles.actionText}>E-mail</Text>
               </TouchableOpacity>
            </View>
         </View>

         </View>
    );
}
