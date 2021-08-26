import React from 'react';
import { Appbar } from 'react-native-paper';


export default function Header(props) {
    return (
            <Appbar.Header>
                <Appbar.BackAction onPress={() => props.nav.goBack()} />
                <Appbar.Content title={props.name} style={{}} />
            </Appbar.Header>
        
    );
}
