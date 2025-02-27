import ResponsiveBox, { CenteredBox, FlexColumnBox } from '@atoms/Box';
import { Box, Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';
import { tPageTitle } from '@ctypes/index';
import { MediaImages } from '@atoms/Image';
import Hashtags from '@/components/Hashtags';
//import { useTheme } from "@mui/material/styles";

const Main = (props: tPageTitle) => {
  //const theme = useTheme();
  return (
    <ResponsiveBox maxWidth={'xl'}>
      <FlexColumnBox gapSize={4}>
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: 'center',
            alignItems: 'stretch',
          }}
        >
          <Grid
            size={{ xs: 12, sm: 4, md: 5, lg: 5 }}
            sx={{ textAlign: 'center' }}
          >
            <CenteredBox>
              <FlexColumnBox gapSize={4}>
                <Typography variant="h1" component="h1">
                  {props.title}
                </Typography>
                <Typography variant="h5" component="h5">
                  {props.subTitle}
                </Typography>
              </FlexColumnBox>
            </CenteredBox>
          </Grid>
          {props.img1 && (
            <Grid size={{ xs: 12, sm: 8, md: 7, lg: 7 }}>
              <MediaImages
                medias={[props.img1, props.img2 || props.img1]}
                priority
                height={{ xs: 280, sm: 330, md: 380, lg: 430, xl: 480 }}
              />
            </Grid>
          )}
        </Grid>
        <Box>
          <Typography
            variant="h4"
            className={'textAlignCenter font-text'}
            sx={{ fontWeight: 'bold' }}
            dangerouslySetInnerHTML={{ __html: props.caption }}
          />
          <Hashtags tags={props.tags} />
        </Box>
      </FlexColumnBox>
    </ResponsiveBox>
  );
};

export default Main;
