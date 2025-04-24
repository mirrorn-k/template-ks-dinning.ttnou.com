import React from 'react';
import { Typography } from '@mui/material';
import { FlexBox } from 'src/atoms/Box';

const Main = ({ tags }: { tags: string[] }) => {
  return (
    <FlexBox
      sx={{ justifyContent: 'right', marginRight: '1rem', marginLeft: 'auto' }}
    >
      {tags.map((tag, index) => (
        <Typography
          key={index}
          variant="h5"
          component="h5"
          className={'hashtag'}
        >
          {tag}
        </Typography>
      ))}
    </FlexBox>
  );
};

export default Main;
