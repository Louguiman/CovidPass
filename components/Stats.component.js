import React, { useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { StyleSheet, Text, View, Dimensions } from 'react-native';


const queryClient = new QueryClient();

const win = Dimensions.get('window');
const ratio = win.width / 6912;
const ratio1 = win.width / 625;

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

export default function Stats() {
    return (
        <QueryClientProvider client={queryClient}>
            <StatCard />
        </QueryClientProvider>
    );
}

function StatCard() {
    const { isLoading, error, data, isFetching } = useQuery("statData", () =>
        fetch("https://disease.sh/v3/covid-19/all", requestOptions)
            .then(response => response.json())

    );

    if (isLoading) return <Text>"Chargement en cours..."</Text>;

    if (error) return "Une erreur est survenue: " + error.message;

    return (
        <View style={styles.cardStat}>
            <Text style={styles.cardStatTitle}> Global </Text>
            <Text style={{ alignSelf: "center", justifyContent: "center" }}>{isFetching ? "Mis à jour des données..." : ""}</Text>
            <View style={styles.Container}>
                <View style={styles.container}>
                    <Text style={styles.cardStatBody}>Nouveaux Cas:
                        <Text style={{fontSize:11,fontWeight:'400'}}>  {data.todayCases}</Text> 
                    </Text>
                    <Text style={styles.cardStatBody}>Total des Cas: 
                        <Text style={{fontSize:11,fontWeight:'400'}}>  {data.cases}</Text>
                    </Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.cardStatBody}>Nouveaux Décès: 
                        <Text style={{fontSize:11,fontWeight:'400'}}>  {data.todayDeaths}</Text>
                    </Text>
                    <Text style={styles.cardStatBody}>Total des Décès: 
                        <Text style={{fontSize:11,fontWeight:'400'}}>  {data.deaths}</Text>
                    </Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.cardStatBody}>Nouvelles Guérisons: 
                        <Text style={{fontSize:11,fontWeight:'400'}}>  {data.todayRecovered}</Text>
                    </Text>
                    <Text style={styles.cardStatBody}>Total des Guérisons: 
                        <Text style={{fontSize:11,fontWeight:'400'}}>  {data.recovered}</Text>
                    </Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    Container: {
        flexWrap: "wrap",
        alignItems: 'center',
        flexDirection: "row",
        padding:10,
        marginTop:0,
    },
    container: {
        flexDirection: "column",
        marginTop: 10,
    },
    cardStat: {
        flex: 1,
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 75,
        marginLeft: 5,
        marginRight: 5,
        width: win.width - 40,
        height: 300 * ratio1,
        borderRadius: 10,
        shadowColor: 'grey',
        shadowOpacity: 0.5,
        elevation: 10,
        backgroundColor: 'white',
        opacity: 0.9
    },
    cardStatTitle: {
        paddingLeft: 40,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
    cardStatBody: {
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 11,
        fontWeight: 'bold',
        marginTop: 0,
    }

})