import { Trash, Camera } from "phosphor-react-native";
import React from "react";

import { Image, TouchableOpacity, View } from "react-native";
import { theme } from "../../theme";

import { styles } from "./styles";

interface Props {
  screenshot: string | null;
  onTakeShot: () => void;
  onTakeRemove: () => void;
}

export const ScreenshotButton = ({
  screenshot,
  onTakeRemove,
  onTakeShot,
}: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={!!screenshot ? onTakeRemove : onTakeShot}
    >
      {screenshot ? (
        <View>
          <Image source={{ uri: screenshot }} style={styles.image} />
          <Trash
            size={20}
            color={theme.colors.text_secondary}
            weight="fill"
            style={styles.removeIcon}
          />
        </View>
      ) : (
        <Camera
          size={24}
          color={theme.colors.text_secondary}
          weight="bold"
          style={styles.cameraIcon}
        />
      )}
    </TouchableOpacity>
  );
};
