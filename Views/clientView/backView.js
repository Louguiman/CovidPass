import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions,TouchableOpacity, StatusBar } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const win = Dimensions.get('window');
const ratio = win.width / 6912;
const ratio1 = win.width / 625;

const backView = (props) => {
    return (
        <View style={{justifyContent:'center'}}>
            <TouchableOpacity onPress={() => props.ToFront() }>
                <FontAwesomeIcon icon={faArrowLeft} style={{ color: 'black', padding: 0, alignSelf:'flex-start' , marginLeft:5, marginRight: 0, marginBottom:10 }} size={25} />
            </TouchableOpacity>
            
            <Text style={styles.title}> Jhon Doe </Text>

            {/* <Text style={styles.subtitle}>Informations Personelles</Text>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.leftCard}>
                    <Text>Contact:</Text>
                    <Text>Date de naissance:</Text>
                    <Text>Profession:</Text>
                    <Text >Adresse:</Text>
                    <Text>Nationalité:</Text>
                </View>

                <View style={styles.rightCard}>
                    <Text>+223 76 00 00 01</Text>
                    <Text>19/11/1976</Text>
                    <Text>Archiviste</Text>
                    <Text style={{ flexWrap: 'wrap' }}>Rue 15, Porte 756 </Text>
                    <Text>Malienne</Text>
                </View>
            </View> */}

            <Text style={styles.subtitle}>Informations Vaccination</Text>
            <View style={{ flexDirection: 'row' }}>

                <View style={styles.leftCard}>
                    <Text>Date 1ere Vaccination:</Text>
                    <Text>Nom du vaccin:</Text>
                    <Text>Lot no:</Text>
                    <Text>Date d'expiration:</Text>
                    <Text>Centre de vaccination:</Text>

                    <Text>Date 2eme vaccination</Text>
                    <Text>Nom du vaccin:</Text>
                    <Text>Lot no:</Text>
                    <Text>Date d'expiration:</Text>
                    <Text>Centre de vaccination:</Text>

                    <Text>Date 3eme vaccination</Text>
                    <Text>Nom du vaccin:</Text>
                    <Text>Lot no:</Text>
                    <Text>Date d'expiration:</Text>
                    <Text>Centre de vaccination:</Text>
                    <Text>Pays:</Text>
                </View>
                <View style={styles.rightCard}>
                    <Text> 10/02/2021</Text>
                    <Text>AstraZeneca</Text>
                    <Text>445B</Text>
                    <Text>20/05/2025</Text>
                    <Text>CCRF commune 6</Text>

                    <Text> 10/02/2021</Text>
                    <Text>AstraZeneca</Text>
                    <Text>445B</Text>
                    <Text>20/05/2025</Text>
                    <Text>CCRF commune 6</Text>

                    <Text> 10/02/2021</Text>
                    <Text>AstraZeneca</Text>
                    <Text>445B</Text>
                    <Text>20/05/2025</Text>
                    <Text>CCRF commune 6</Text>
                    <Text>Mali</Text>
                </View>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 5,
    },
    leftCard: {
        padding: 10
    },
    rightCard: {
        padding: 10
    },
    detailsBtn: {
        backgroundColor: 'white',
        borderColor: 'white'
    }

})

export default backView;