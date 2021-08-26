import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Appbar from '../../components/Header.component';

const termsView = (props) => {
    return (
        <View>
            <Appbar name="Conditions" nav={props.navigation} />
        </View>
    )
}

export default termsView;