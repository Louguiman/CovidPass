import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { SectionRow, SettingsPage, NavigateRow, BaseRow, SwitchRow, CheckRow } from 'react-native-settings-view';


const Profile = ({navigation}) => {
    return (
        <SettingsPage style={styles.container}>
            <SectionRow >
                <NavigateRow
                    text="Comptes"
                    leftIcon={{
                        name: 'account',
                        type: 'material-community',
                    }}
                    onPress={() => navigation.navigate('accountView')}
                />
                <NavigateRow
                    text="Conditions d'utilisation"
                    leftIcon={{
                        name: 'file-document',
                        type: 'material-community',
                    }}
                    onPress={() => navigation.navigate('termsView')}
                />
                <NavigateRow
                    text="Politique de Confidentialité"
                    leftIcon={{
                        name: 'folder-lock',
                        type: 'material-community',
                    }}
                    onPress={() => navigation.navigate('policyView')}
                />
                <NavigateRow
                    text="Contact"
                    leftIcon={{
                        name: 'users',
                        type: 'font-awesome',
                    }}
                    onPress={() => navigation.navigate('contactView')}
                />
                <CheckRow
                    text="Notifications"
                    checked
                    leftIcon={{
                        name: 'ios-notifications',
                        type: 'ionicon',
                    }}
                    onValueChange={(isChecked) => console.log('checked', isChecked)}
                />
                <SwitchRow
                    text="Ne pas déranger"
                    enabled
                    leftIcon={{
                        name: 'do-not-disturb',
                        type: 'material-community',
                    }}
                    onValueChange={(isEnabled) => console.log('checked', isEnabled)}
                />
                <BaseRow
                    text={'version'}
                    leftIcon={{
                        name: 'tag',
                        type: 'font-awesome',
                    }}
                    rightContent={<Text>0.1.0</Text>}
                />
            </SectionRow>
        </SettingsPage>
    );
}
const styles= StyleSheet.create({
    container: {
        marginTop:  StatusBar.currentHeight || 0,
    }
})

export default Profile;