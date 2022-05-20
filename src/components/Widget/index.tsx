import React, { useRef, useState } from "react";
import { ChatTeardropDots } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { theme } from "../../theme";
import { styles } from "./styles";
import { Options } from "../Options";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { Form } from "../Form";
import { Success } from "../Success";
import { Copyright } from "../Copyright";

export type FeedbackType = keyof typeof feedbackTypes;

const Widget: React.FC = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleOpen = () => {
    bottomSheetRef?.current?.expand();
  };

  const handleFeedbackSent = () => {
    setFeedbackSent(true);
  };

  const handleRestartFeedback = () => {
    setFeedbackType(null);
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
        {feedbackSent ? (
          <Success onSentAnotherFeedBack={handleRestartFeedback} />
        ) : feedbackType ? (
          <Form
            feedbackType={feedbackType}
            onSent={handleFeedbackSent}
            onCancel={handleRestartFeedback}
          />
        ) : (
          <Options onChooseOption={setFeedbackType} />
        )}
        <Copyright />
      </BottomSheet>
    </>
  );
};

export default Widget;
