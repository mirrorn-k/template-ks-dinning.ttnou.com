import React from 'react';
import { Typography } from '@mui/material';
import { tTableClm2 } from '@/types';
import { grey } from '@mui/material/colors';
import { FlexColumnBox } from '@/atoms/Box';

interface MainProps {
  items: tTableClm2[];
}

const Main = (props: MainProps) => {
  console.log('props.items', props.items);
  return (
    <>
      {props.items.map((item, index) => {
        return (
          <FlexColumnBox key={`compoents-table-Row2-${index}`} gapSize={2}>
            <Typography
              variant="h4"
              component="h3"
              sx={{ borderBottom: `1px solid ${grey[900]}`, pb: 1 }}
            >
              {item.label}
            </Typography>
            <Typography
              variant="h5"
              component="p"
              dangerouslySetInnerHTML={{ __html: item.value }}
            />
          </FlexColumnBox>
        );
      })}
    </>
  );
};

export default Main;
