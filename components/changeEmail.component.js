import * as React from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';

const MyComponent = (props) => {

  const containerStyle = { backgroundColor: 'white', padding: 20 };

  return (
        <Modal visible={props.visible} onDismiss={props.onDismiss} contentContainerStyle={containerStyle}>
          <Text>Example Modal.  Click outside this area to dismiss.</Text>
        </Modal>
  );
};

export default MyComponent;