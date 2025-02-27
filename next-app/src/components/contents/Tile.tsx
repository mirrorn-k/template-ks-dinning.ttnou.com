import React from 'react';
import { Grid2 as Grid, Box, Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import { MediaImages } from '@atoms/Image';
import { tTile } from '@/types';
import { tGridSize } from '@/types';

interface MainProps {
  items: tTile[];
  size?: tGridSize;
  style?: SxProps;
}

const Main = ({
  items,
  size = { xs: 12, sm: 5, md: 4, lg: 3, xl: 2 },
  style,
}: MainProps) => {
  return (
    <Grid container spacing={6} sx={style} className="tiles">
      {items.map((item) => {
        return (
          <Grid key={item.uuid} size={size} className="tile">
            <Box
              className="image"
              height={{ xs: 300, sm: 250, md: 280, lg: 350, xl: 380 }}
              alignItems={'center'}
              margin={'auto'}
            >
              <MediaImages
                medias={[item.img1, item.img2 || item.img1]}
                priority
              />
            </Box>
            <Typography variant="h4" component={'p'} className="caption">
              {item.caption || ''}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Main;
