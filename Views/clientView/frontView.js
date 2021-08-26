import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {  faCube } from '@fortawesome/free-solid-svg-icons';


const frontView = (props) => {
    return (
        <View style={{justifyContent:'center',}}>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <FontAwesomeIcon icon={faCube} style={{ color: 'white', padding: 0, marginBottom: -2, marginRight: 10 }} size={32} />
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>Passe Sanitaire</Text>
            </View>

            <View style={{ flexDirection: 'column', marginTop: 30, marginBottom: 5 }}>
                <Text style={styles.label}>Nom    Prénom</Text>
                <Text style={styles.nameText}>Jhon</Text>
                <Text style={styles.nameText}>Pololo</Text>
            </View>
            <View style={styles.rowView}>
                <View style={styles.columnView}>
                    <Text style={styles.label}>Adresse</Text>
                    <Text style={styles.bodyText}>Banankabougou porte 128, Rue 12 Bamako/Mali</Text>
                </View>
                <View style={styles.columnView}>
                    <Text style={styles.label}>ID</Text>
                    <Text style={styles.bodyText}>AA00125649</Text>
                </View>
            </View>
            <View style={styles.rowView}>
                <View style={styles.columnView}>
                    <Text style={styles.label}>Statut</Text>
                    <Text style={styles.bodyText}>Vacciné</Text>
                </View>
                <View style={styles.columnView}>
                    <Text style={styles.label}>Contact</Text>
                    <Text style={styles.bodyText}>+223 94 00 00 04</Text>
                </View>
            </View>
                      

            {/* <ImageBackground source={BackgroundImage} resizeMode="auto" style={styles.image}>
                        
                            <Text style={styles.text}>Inside</Text>
                            <Text style={styles.title}> Jhon Doe </Text>
                            
                        </ImageBackground> */}
        </View>                         
    )
}

const styles = StyleSheet.create({
    
    rowView: {
        flexDirection: 'row',
    },
    columnView: {
        flexDirection: 'column',
        flex: 1,
        padding: 5,
    },

    label: {
        color: 'white',

    },
    bodyText: {
        color: 'white',
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold'
    },
    nameText: {
        color: 'white',
        margin: 5,
        fontSize: 28,
        fontWeight: 'bold'
    },

})


export default frontView;