import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text } from "react-native";
import {  OpenSans_400Regular, useFonts } from '@expo-google-fonts/open-sans';

const CustomInput = (props) => {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular
  });
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
      />
      <Text style={{paddingHorizontal: 30, fontSize: 12, color: '#353535', letterSpacing: -0.2}}>
        {props.infoText}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#EDF3FB',
    height: 55,
    marginVertical: 8,
    borderWidth: 0,
    borderRadius: 6,
    fontFamily: 'OpenSans_400Regular',
    color: '#002350',
    paddingHorizontal: 16,
  },
});

export default CustomInput;