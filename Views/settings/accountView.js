import React from 'react';
import AuthService from '../../services/auth.services';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight } from 'react-native';
import { Surface, Divider, Avatar, Subheading, Portal, Provider, Modal, Dialog, Paragraph, Button } from 'react-native-paper';

import Appbar from '../../components/Header.component';
import PasswordResetModal from '../../components/resetPassword.component';
import ChangeEmailModal from '../../components/changeEmail.component';
import DeleteAccountModal from '../../components/deleteAccount.component';

import Briefcase from '../../assets/icons/briefcase.png'
import location from '../../assets/icons/location.png'
import Call from '../../assets/icons/call.png'
import ChevRight from '../../assets/icons/chevron-right.png'
import Email from '../../assets/icons/email.png';
import TrashBin from '../../assets/icons/trash.png';
import Update from '../../assets/icons/update.png';
import Exit from '../../assets/icons/exit.png';


const win = Dimensions.get('window');

const accountView = (props) => {

    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const [PasswordInit, setPasswordInit] = React.useState(false);
    const [EmailChange, setEmailChange] = React.useState(false);
    const [DeleteAccount, setDeleteAccount] = React.useState(false);
    const [ProfileUpdate, setProfileUpdate] = React.useState(false);

    const showPasswordInit = () => setPasswordInit(true);
    const hidePasswordInit = () => setPasswordInit(false);

    const showEmailChange = () => setEmailChange(true);
    const hideEmailChange = () => setEmailChange(false);

    const showProfileUpdate = () => setProfileUpdate(true);
    const hideProfileUpdate = () => setProfileUpdate(false);

    const showDeleteAccount = () => setDeleteAccount(true);
    const hideDeleteAccount = () => setDeleteAccount(false);

    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    const containerStyle = { backgroundColor: 'white', margin: 10, padding: 20, height: win.height - 150, width: win.width - 50, justifyContent: 'center', alignSelf: 'center' };

    return (
        <Provider>

            <Appbar name="Comptes" nav={props.navigation} />

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Surface style={{ height: 250, width: win.width, margin: 10, padding: 10, alignItems: 'center', flexDirection: 'row'
                }}>
                    <View style={{
                        flex:1,
                        marginTop: 20,
                        marginBottom: 20,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Avatar.Image style={{ color: 'white' }} source={require('../../assets/icons/avatar-male.gif')} />
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 0, marginTop: 10 }}>Jhon </Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 0, marginTop: 0 }}>POLOLO</Text>
                    </View>

                    <View style={{ marginLeft: 15, flex:1.5 }}>

                        <View style={{ flexDirection: 'row', padding: 2, alignItems: 'center' }}>
                            <Image source={Briefcase} style={{ height: 18, width: 18, marginRight: 5 }} />
                            <Subheading style={styles.subHeading}>Archiviste</Subheading>
                        </View>
                        <View style={{ flexDirection: 'row', padding: 2, alignItems: 'center' }}>
                            <Image source={Call} style={{ height: 18, width: 18, marginRight: 5 }} />
                            <Subheading style={styles.subHeading} >+223 70 00 00 00</Subheading>
                        </View>
                        <View style={{ flexDirection: 'row', padding: 2, alignItems: 'center' }}>
                            <Image source={location} style={{ height: 18, width: 18, marginRight: 5 }} />
                            <Subheading style={styles.subHeading}>Bamako</Subheading>
                        </View>
                    </View>
                </Surface>

                <Surface style={styles.surface2}>
                    <View style={styles.listView}>
                        <Image source={location} style={styles.leftIcons} />
                        <Subheading style={{ flex: 5 }}>Réinitialiser le mot de passe</Subheading>

                        <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => showPasswordInit()}>
                            <Image source={ChevRight} style={styles.rightIcons} />
                        </TouchableHighlight>
                    </View>
                    <Divider />
                    <View style={styles.listView}>
                        <Image source={Email} style={styles.leftIcons} />
                        <Subheading style={{ flex: 5 }}>Changer l'addresse mail</Subheading>

                        <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => showEmailChange()}>
                            <Image source={ChevRight} style={styles.rightIcons} />
                        </TouchableHighlight>
                    </View>
                    <Divider />
                    <View style={styles.listView}>
                        <Image source={TrashBin} style={styles.leftIcons} />
                        <Subheading style={{ flex: 5 }}>Supprimer le compte</Subheading>

                        <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => showDeleteAccount()}>
                            <Image source={ChevRight} style={styles.rightIcons} />
                        </TouchableHighlight>
                    </View>
                    <Divider />
                    <View style={styles.listView}>
                        <Image source={Update} style={styles.leftIcons} />
                        <Subheading style={{ flex: 5 }}>Mettre à jour le profil</Subheading>

                        <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => showProfileUpdate()}>
                            <Image source={ChevRight} style={styles.rightIcons} />
                        </TouchableHighlight>
                    </View>
                    <Divider />

                </Surface>
            </View>
            {/* <PasswordResetModal visible={PasswordInit} onDimiss={hidePasswordInit} />
                    <ChangeEmailModal visible={EmailChange} onDimiss={hideEmailChange} />
                    <DeleteAccountModal visible={DeleteAccount} onDimiss={hideDeleteAccount} />  */}

            <Portal>

                <Modal visible={PasswordInit} onDismiss={hidePasswordInit} contentContainerStyle={containerStyle}>
                    <Text>Example Modal.  Click outside this area to dismiss.</Text>
                </Modal>

                <Modal visible={EmailChange} onDismiss={hideEmailChange} contentContainerStyle={containerStyle}>
                    <Text>Example Modal.  Click outside this area to dismiss.</Text>
                </Modal>

                <Modal visible={DeleteAccount} onDismiss={hideDeleteAccount} contentContainerStyle={containerStyle}>
                    <Text>Example Modal.  Click outside this area to dismiss.</Text>
                </Modal>

                <Modal visible={ProfileUpdate} onDismiss={hideProfileUpdate} contentContainerStyle={containerStyle}>
                    <Text>Example Modal.  Click outside this area to dismiss.</Text>
                </Modal>

                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>Déconnexion</Dialog.Title>
                    <Dialog.Content>
                        <Text>Vous allez être déconnecté. Etes-vous sûr? </Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={hideDialog}>Non</Button>
                        <Button onPress={() => {
                            AuthService.removeUser();
                            props.navigation.push('Login');
                        }}>Oui</Button>
                    </Dialog.Actions>
                </Dialog>

            </Portal>

            <Button style={{ marginTop: 30 }} onPress={showDialog}>
                Se déconnecter
                <Image source={Exit} style={styles.leftIcons} />
            </Button>



        </Provider>

    )
}
const styles = StyleSheet.create({
    surface1: {
        marginTop: 20,
        padding: 8,
        height: 250,
        width: win.width - 50,
        elevation: 4,
    },
    surface2: {
        marginTop: 10,
        padding: 8,
        width: win.width,
        elevation: 4,
        marginBottom: -25
    },
    subHeading: {
        color: 'grey',
        fontSize: 13
    },
    listView: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        padding: 5
    },
    leftIcons: {
        flex: 0.5,
        height: 24,
        width: 24,
        marginRight: 10
    },
    rightIcons: {
        flex: 0.5,
        height: 24,
        width: 24,
        marginRight: 0
    }
});
export default accountView;