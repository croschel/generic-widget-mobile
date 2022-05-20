import React from "react";

import { Text, TouchableOpacity, View } from "react-native";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { Copyright } from "../Copyright";
import { Option } from "../Option";
import { FeedbackType } from "../Widget";

import { styles } from "./styles";

interface Props {
  onChooseOption: (feedbackType: FeedbackType) => void;
}

export const Options = ({ onChooseOption }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu feedback</Text>
      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option
            onPress={() => onChooseOption(key as FeedbackType)}
            key={key}
            title={value.title}
            image={value.image}
          />
        ))}
      </View>
    </View>
  );
};
