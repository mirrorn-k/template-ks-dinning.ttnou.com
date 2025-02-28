import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

interface CarouselProps {
  items: React.ReactNode[];
  height?: number | string;
  width?: string | number;
  transitionDuration?: number;
  flgNaviBtn?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  height = 'auto',
  width = '100%',
  transitionDuration = 300,
  flgNaviBtn = false,
}) => {
  const [index, setIndex] = useState<number>(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <Box width={width} textAlign="center" position="relative" {...handlers}>
      {/* インジケーター（ドット） */}
      <Box display="flex" justifyContent="center" mt={1}>
        {items.map((_, i) => (
          <Box
            key={i}
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: i === index ? 'black' : 'gray',
              marginX: 0.5,
              cursor: 'pointer',
            }}
            onClick={() => setIndex(i)}
          />
        ))}
      </Box>
      <Box
        position="relative"
        height={height}
        width="100%"
        overflow="hidden"
        mt={2}
      >
        <Box
          display="flex"
          width={`${items.length * 100}%`}
          style={{
            transform: `translateX(-${index * (100 / items.length)}%)`,
            transition: `transform ${transitionDuration}ms ease-in-out`,
          }}
        >
          {items.map((item, i) => (
            <Box key={i} width={`${100 / items.length}%`} flexShrink={0}>
              {item}
            </Box>
          ))}
        </Box>
      </Box>
      {/* ナビゲーションボタン */}
      {flgNaviBtn && (
        <>
          <IconButton
            onClick={prevSlide}
            sx={{
              position: 'absolute',
              top: '50%',
              left: 0,
              transform: 'translateY(-50%)',
            }}
          >
            <ArrowBackIos />
          </IconButton>
          <IconButton
            onClick={nextSlide}
            sx={{
              position: 'absolute',
              top: '50%',
              right: 0,
              transform: 'translateY(-50%)',
            }}
          >
            <ArrowForwardIos />
          </IconButton>
        </>
      )}
    </Box>
  );
};

export default Carousel;
