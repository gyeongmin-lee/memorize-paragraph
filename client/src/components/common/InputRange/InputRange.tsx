import React, { FC } from "react";
import Slider, { SliderProps } from "rc-slider";
import "rc-slider/assets/index.css";

interface InputRangeProps extends SliderProps {}

const InputRange: FC<InputRangeProps> = ({ ...sliderProps }) => {
  const style = {
    background: "#F4F4F9" /* fontLight */,
    height: 4,
    borderRadius: 2
  };

  return (
    <Slider
      trackStyle={style}
      railStyle={style}
      handleStyle={{
        border: "none",
        width: 16,
        height: 16,
        borderRadius: 8,
        background: "#56638A" /* primary */,
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)" /* default */
      }}
      {...sliderProps}
    />
  );
};

export default InputRange;
