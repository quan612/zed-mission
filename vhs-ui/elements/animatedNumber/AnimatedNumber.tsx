import React, { FC, useState, useEffect, useRef } from "react";
import { Box, useStyleConfig } from "@chakra-ui/react";

// constants
import { XP_ANIMATION_DURATION } from "@const/GlobalData";

const ANIMATION_INTERVAL = 50;

interface IAnimatedNumber {
  from?: number;
  to: number;
  horseId: string;
  onAnimationComplete?: () => void;
}

const AnimatedNumber: FC<IAnimatedNumber> = ({
  from = 0,
  to,
  onAnimationComplete,
  horseId,
}) => {
  const [value, setValue] = useState<number>(from);
  const styles = useStyleConfig("AnimatedNumber", {});
  const intervalRef = useRef(null);

  const increaseAmount = Math.ceil(
    to / (XP_ANIMATION_DURATION / ANIMATION_INTERVAL)
  );

  const handleValueUpdate = () => {
    intervalRef.current = setInterval(() => {
      setValue((prev) => {
        if (prev + increaseAmount > to) {
          clearInterval(intervalRef.current);
          onAnimationComplete && onAnimationComplete();
          return to;
        }
        return prev + increaseAmount;
      });
    }, ANIMATION_INTERVAL);
  };

  useEffect(() => {
    setValue(from);
    handleValueUpdate();
    return () => clearInterval(intervalRef.current);
  }, [horseId]);

  return <Box __css={styles}>{value}</Box>;
};

export default AnimatedNumber;
