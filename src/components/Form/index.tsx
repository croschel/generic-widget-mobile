import { ArrowLeft } from "phosphor-react-native";
import React from "react";

import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { theme } from "../../theme";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { FeedbackType } from "../Widget";
import { ScreenshotButton } from "../ScrenshotButton";

import { styles } from "./styles";
import { Button } from "../Button";

interface Props {
  feedbackType: FeedbackType;
}

export const Form = ({ feedbackType }: Props) => {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft
            weight="bold"
            size={24}
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
          <Image source={feedbackTypeInfo.image} style={styles.image} />
        </View>
      </View>
      <TextInput
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo."
        placeholderTextColor={theme.colors.text_secondary}
      />
      <View style={styles.footer}>
        <ScreenshotButton
          onTakeRemove={() => {}}
          onTakeShot={() => {}}
          screenshot={"https://github.com/croschel.png"}
        />
        <Button isLoading={false} />
      </View>
    </View>
  );
};
