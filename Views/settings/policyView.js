import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Appbar from '../../components/Header.component';

const policyView = (props) => {
    return (
        <View>
            <Appbar name="Confidentialité" nav={props.navigation}/>
        </View>
    )
}

export default policyView;