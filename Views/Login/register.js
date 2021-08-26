import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const win = Dimensions.get("window");
const ratio = win.width / 6912;
const ratio1 = win.width / 625;

const Register = ({navigation}) => {
  const [text, onChangeText] = React.useState("");
 
  return (
    <SafeAreaView>
      <ScrollView ContentContainerStyle={styles.ContentContainer}>
        <View style={styles.container}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            GESTION DES UTILISATEURS
          </Text>
          <View style={styles.card}>
            <Text> </Text>
            <TouchableOpacity onPress={() => navigation.goBack() }>
                <FontAwesomeIcon icon={faArrowLeft} style={{ color: 'black', padding: 0, alignSelf:'flex-start' , marginLeft:5, marginRight: 0, marginBottom:10 }} size={25} />
            </TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder="Recherche"
                value={text}
              />
              
            </View>
            
            

            <View style={styles.showAllBtn}>
              <Button
                color="black"
                title="Voir Tous Les Utilisateurs"
                onPress={() => console.log("show all clients")}
              />
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{
                  color: "white",
                  padding: 0,
                  alignSelf: "center",
                  marginLeft: 5,
                  marginRight: 20,
                }}
                size={20}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ContentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginBottom: 10,
  },
  container: {
    padding: 10,
    marginTop: 40,
    alignItems: "center",
    margin: 10,
  },
  containerCard: {
    alignItems: "center",
    margin: 10,
    padding: 15,
  },
  card: {
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 15,
    padding: 15,
    width: win.width - 50,
    height: win.height - 100,
    borderRadius: 5,
    shadowColor: "black",
    shadowOpacity: 0.5,
    elevation: 10,
    backgroundColor: "white",
    opacity: 0.9,
  },
  input: {
    width: "80%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  clientList: {
    padding: 10,
  },
  showAllBtn: {
    flexDirection: "row",
    marginBottom: 0,
    justifyContent: "flex-end",
    width: "90%",
    backgroundColor: "black",
    borderColor: "white",
    borderRadius: 5,
    alignSelf: "center",
    borderStyle: "solid",
    borderWidth: 1,
    elevation: 0.9,
    fontWeight: "bold",
    color: "white",
    marginTop:10
  },
});

export default Register;
