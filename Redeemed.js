import 'react-native-gesture-handler';
//import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
//import { LinearGradient } from 'expo-linear-gradient';
//import CustomInput from './components/generics/CustomInput';
//import CustomButton from './components/generics/CustomButton';
import styled from "styled-components/native";
import success from "./images/success_ilus.png";
import CustomTouchableOpacity from './components/generics/CustomTouchableOpacity';
import Heading from './components/generics/Heading';
import Message from './components/generics/Message';
import {  OpenSans_400Regular, useFonts } from '@expo-google-fonts/open-sans';
//import Input from './components/input';

const Wrapper = styled.View`
  background: white;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 100%;
`;

const Code = styled.Text`
  font-weight: normal;
  font-size: 12px;
  text-align: right;
  color: #8495AA;
`;

const titleTextValue = "¡Listo! Premio canjeado";
const descriptionTextValue = "Entregá a mail@usuario.com una hamburguesa con papas.";

export default function Redeemed({navigation}) {
  useFonts({
    OpenSans_400Regular
  });
  return (
      <Wrapper>
        <Code style={{fontFamily: 'OpenSans_400Regular'}}>Codigo 123</Code>
        <View style={{flexGrow: 1}}>
          <Message imgPath={success} titleText={titleTextValue} descriptionText={descriptionTextValue}/>
          <Heading title="Premio canjeado!"/>
        </View>
        <CustomTouchableOpacity title="Hello World!" behavior={() => navigation.navigate("Err")}/>
      </Wrapper>
  );
};