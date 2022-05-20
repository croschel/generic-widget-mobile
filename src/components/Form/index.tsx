import { ArrowLeft } from "phosphor-react-native";
import React, { useState } from "react";
import * as FileSystem from "expo-file-system";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { theme } from "../../theme";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { FeedbackType } from "../Widget";
import { ScreenshotButton } from "../ScrenshotButton";

import { styles } from "./styles";
import { Button } from "../Button";
import { captureScreen } from "react-native-view-shot";
import { api } from "../../lib/api";

interface Props {
  feedbackType: FeedbackType;
  onCancel: () => void;
  onSent: () => void;
}

export const Form = ({ feedbackType, onCancel, onSent }: Props) => {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const [comment, setComment] = useState("");
  const handleScreenshot = () => {
    captureScreen({
      format: "jpg",
      quality: 0.5,
    })
      .then((uri) => setScreenshot(uri))
      .catch((error) => console.log(error));
  };
  const handleScreenshotRemove = () => {
    setScreenshot(null);
  };

  const handleSendFeedback = async () => {
    if (isSendingFeedback) {
      return;
    }
    setIsSendingFeedback(true);
    const screenshotBase64 =
      screenshot &&
      (await FileSystem.readAsStringAsync(screenshot, { encoding: "base64" }));
    const body = {
      type: feedbackType,
      screenshot: `data:image/png;base64, ${screenshotBase64}`,
      comment,
    };
    console.log(body);
    try {
      await api.post("/feedbacks", body);
      onSent();
    } catch (error) {
      console.log(error);
      setIsSendingFeedback(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onCancel}>
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
        autoCorrect={false}
        multiline
        style={styles.input}
        onChangeText={setComment}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo."
        placeholderTextColor={theme.colors.text_secondary}
      />
      <View style={styles.footer}>
        <ScreenshotButton
          onTakeRemove={handleScreenshotRemove}
          onTakeShot={handleScreenshot}
          screenshot={screenshot}
        />
        <Button onPress={handleSendFeedback} isLoading={isSendingFeedback} />
      </View>
    </View>
  );
};
