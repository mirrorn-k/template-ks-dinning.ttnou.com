import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

interface SliderSwitcherProps {
  items: React.ReactNode[];
  thresholds?: number[];
  height?: number;
  width?: string | number;
  transitionDuration?: number;
}

const SliderSwitcher: React.FC<SliderSwitcherProps> = ({
  items,
  thresholds,
  height = 50,
  width = '100%',
  transitionDuration = 300,
}) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const defaultThresholds = Array.from(
    { length: items.length },
    (_, i) => (100 / items.length) * (i + 1)
  );
  const actualThresholds = thresholds || defaultThresholds;

  return (
    <Box width={width} textAlign="center">
      <Typography gutterBottom>スライダーでコンポーネントを切り替え</Typography>
      <Slider
        value={value}
        onChange={handleChange}
        step={1}
        min={0}
        max={100}
      />
      <Box
        position="relative"
        height={height}
        width="100%"
        overflow="hidden"
        mt={2}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            position="absolute"
            width="100%"
            top={0}
            left={0}
            style={{
              opacity: value < actualThresholds[index] ? 1 : 0,
              transition: `opacity ${transitionDuration}ms ease-in-out`,
            }}
          >
            {item}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SliderSwitcher;
