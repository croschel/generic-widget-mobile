import React, { useRef } from "react";
import { ChatTeardropDots } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { theme } from "../../theme";
import { styles } from "./styles";
import { Options } from "../Options";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { Form } from "../Form";

export type FeedbackType = keyof typeof feedbackTypes;

const Widget: React.FC = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleOpen = () => {
    bottomSheetRef?.current?.expand();
  };
  return (
    <>
      <TouchableOpacity onPress={handleOpen} style={styles.button}>
        <ChatTeardropDots
          size={24}
          color={theme.colors.text_on_brand_color}
          weight="bold"
        />
      </TouchableOpacity>
      <BottomSheet
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
      >
        <Form feedbackType="BUG" />
      </BottomSheet>
    </>
  );
};

export default Widget;
