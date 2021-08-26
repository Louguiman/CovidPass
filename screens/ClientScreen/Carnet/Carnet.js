import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { StatusBar } from 'expo-status-bar';
import FrontSide from '../../../Views/clientView/frontView';
import BackSide from '../../../Views/clientView/backView';


const win = Dimensions.get('window');
const ratio = win.width / 6912;
const ratio1 = win.width / 625;

export default class Carnet extends Component {

    UNSAFE_componentWillMount() {
        this.animatedValue = new Animated.Value(0);
        this.value = 0;
        this.animatedValue.addListener(({ value }) => {
            this.value = value
        })
        this.frontInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg']
        })
        this.backInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['180deg', '360deg']
        })
    }



    flipCard = () => {
        console.log('flipped')
        if (this.value >= 90) {
            Animated.spring(this.animatedValue, {
                toValue: 0,
                friction: 8,
                tension: 10,
                useNativeDriver: false
            }).start();
        } else {
            Animated.spring(this.animatedValue, {
                toValue: 180,
                friction: 8,
                tension: 10,
                useNativeDriver: false
            }).start();
        }

    }
    render() {

        const frontAnimatedStyle = {
            transform: [
                { rotateY: this.frontInterpolate }
            ]
        }
        const backAnimatedStyle = {
            transform: [
                { rotateY: this.backInterpolate }
            ]
        }
        return (
            <SafeAreaView>
                <ScrollView ContentContainerStyle={styles.ContentContainer}>
                    <View style={styles.container}>
                        <Animated.View style={[styles.flippedCard, frontAnimatedStyle]}>
                            <FrontSide ToBack={() => this.flipCard()} />

                        </Animated.View>
                        <Animated.View style={[styles.flippedCard, styles.backCardFlip, backAnimatedStyle]}>
                            <BackSide ToFront={() => this.flipCard()} />
                        </Animated.View>

                        <TouchableOpacity style={styles.detailsBtn} onPress={() => this.flipCard()}>
                            <Text style={{ fontWeight: 'bold', color: 'white', alignSelf: 'center' }}>VOIR PLUS DE DETAILS</Text>
                            <FontAwesomeIcon icon={faArrowRight} style={{ color: 'white', padding: 0, alignSelf: 'center', marginLeft: 5, marginRight: 0 }} size={20} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    ContentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginBottom: 10,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    containerCard: {
        alignItems: 'center',
        margin: 10,
        padding: 15
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    flippedCard: {
        marginTop: 30,
        marginBottom: 9,
        padding: 15,
        width: win.width - 50,
        height: win.height - 200,
        borderRadius: 5,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 10,
        backgroundColor: 'black',
        opacity: 0.8,
        backfaceVisibility: 'hidden'
    },
    backCardFlip: {
        backgroundColor: 'white',
        position: 'absolute',
        top: 20,
    },
    cardTitle: {
        paddingLeft: 40,
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
    },
    subtitle: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 5,
    },
    rowView: {
        flexDirection: 'row',
    },
    columnView: {
        flexDirection: 'column',
        flex: 1,
        margin: 5,
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
    detailsBtn: {
        height: 70,
        flexDirection: 'row',
        marginTop: 8,
        justifyContent: 'center',
        width: '90%',
        backgroundColor: 'black',
        borderColor: 'white',
        borderRadius: 5,
        alignSelf: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        elevation: 0.5,
        fontWeight: 'bold',
        color: 'white'


    }

})

