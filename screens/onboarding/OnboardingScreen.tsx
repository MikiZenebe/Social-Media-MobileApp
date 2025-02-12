import { View, Text } from "react-native";
import React, { useState } from "react";
import { onBoardingSlides } from "@/configs/constants";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Slider from "@/components/onboarding/slider";
import Slide from "@/components/onboarding/slide";

export default function OnboardingScreen() {
  const [index, setIndex] = useState(0);

  const prev = onBoardingSlides[index - 1];
  const next = onBoardingSlides[index + 1];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slider
        key={index}
        index={index}
        setIndex={setIndex}
        prev={
          prev && <Slide slide={prev} totalSlide={onBoardingSlides.length} />
        }
        next={
          prev && <Slide slide={next} totalSlide={onBoardingSlides.length} />
        }
      ></Slider>
    </GestureHandlerRootView>
  );
}
