import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, Image, Dimensions, ImageBackground, FlatList, TouchableHighlight } from 'react-native';

import { images, FONTS } from '../../../constants';
import StatsCard from '../../../components/Stats.component';
import AppLoading from 'expo-app-loading';

const win = Dimensions.get('window');
const ratio = win.width / 6912;
const ratio1 = win.width / 625;

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Une Fièvre ",
        description: " ou sensation de fièvre, dans 88 % des cas selon l'OMS.",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Des Signes Respiratoires",
        description: " comme une toux, un essoufflement ou une sensation d’oppression dans la poitrine."
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Des maux de tête",
        description: " avec des courbatures accompagnées d'une fatigue inhabituelle."
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29f456",
        title: "Une perte brutale de l’odorat",
        description: "Sans obstruction nasale, une disparition totale du goût, ou une diarrhée."
    },

];

const Home = () => {

    return (
        <SafeAreaView>
            <ScrollView ContentContainerStyle={styles.ContentContainer}>

                <View style={styles.container}>
                    <Text style={styles.logo}>CovidPass</Text>
                    <Image style={{ width: win.width - 50, height: 3456 * ratio, borderRadius: 25, marginLeft: 20, marginRight: 20, marginTop: 0 }} resizeMode="contain" source={images.banner1} />
                </View>

                <View >
                    <Text style={styles.cardTitle}>Auto-Isolation</Text>
                </View>
                <View style={styles.card}>

                    <View >
                        <ImageBackground style={styles.container} source={images.blob1}>
                            <Text style={{ alignSelf: 'center', fontSize: 18, color: 'white', paddingLeft: 55, paddingRight: 15, marginTop: 50, marginBottom: 50 }}>L'auto-isolation est une mesure importante en vue de rompre
                                la chaîne de transmission de la maladie</Text>
                        </ImageBackground>
                    </View>
                </View>
                <View >
                    <Text style={styles.cardTitle}>Les Symptômes</Text>
                </View>
                <FlatList
                    horizontal={true}
                    data={DATA}
                    renderItem={({ item, index, separators }) => (
                        <TouchableHighlight
                            key={item.key}
                            onShowUnderlay={separators.highlight}
                            onHideUnderlay={separators.unhighlight}>
                            <View style={styles.cardSymp}>
                                <Text style={styles.cardSympTitle}>{item.title}</Text>
                                <Text style={styles.cardSympBody}>{item.description}</Text>
                            </View>
                        </TouchableHighlight>
                    )}
                />
                <View >
                    <Text style={styles.cardTitle}>Les Statistiques</Text>
                </View>
                <StatsCard />


            </ScrollView>
        </SafeAreaView>

    );
}


const styles = StyleSheet.create({
    ContentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginBottom: 40,
    },
    container: {
        alignItems: 'center',
    },
    logo: {
        fontSize: 50,
        color: "black",
        marginTop: 30,
        marginBottom: 0,
    },
    card: {

        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 15,
        width: win.width - 50,
        height: 300 * ratio1,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOpacity: 0.6,
        elevation: 10,
        backgroundColor: 'white',
        opacity: 0.9
    },
    cardSymp: {

        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 20,
        marginRight: 10,
        width: win.width - 50,
        height: 300 * ratio1,
        borderRadius: 10,
        shadowColor: 'grey',
        shadowOpacity: 0.5,
        elevation: 10,
        backgroundColor: 'white',
        opacity: 0.9
    },
    cardTitle: {
        paddingLeft: 40,
        fontSize: 25,
        marginTop: 10,
    },
    cardSympTitle: {
        paddingLeft: 40,
        fontSize: 20,
        marginTop: 20,
    },
    cardSympBody: {
        paddingLeft: 40,
        paddingRight: 40,
        fontSize: 15,
        fontWeight: '300',
        marginTop: 20,
    }

})

export default Home;