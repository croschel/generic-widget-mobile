import React from "react";

import { Text, View } from "react-native";

import { styles } from "./styles";

export const Copyright = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Feito com ❤️ por Caique Roschel</Text>
    </View>
  );
};
