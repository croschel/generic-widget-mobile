import React from "react";

import { View, TouchableOpacity, Image, Text } from "react-native";
import SuccessImg from "../../assets/success.png";

import { styles } from "./styles";

export const Success = () => {
  return (
    <View style={styles.container}>
      <Image source={SuccessImg} style={styles.image} />
      <Text style={styles.title}>Agradecemos o feedback</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>
    </View>
  );
};
