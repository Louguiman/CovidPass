import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Appbar from '../../components/Header.component';

const contactView = (props) => {
    return (

        <View>
            <Appbar name="Contact" nav={props.navigation} />
        </View>
    )
}

export default contactView;