import React from 'react';
import { Grid2 as Grid, Typography, Box } from '@mui/material';
import { MediaImage } from '@atoms/Image';
import { ContentTitle } from '@atoms/Typography';
import { tHighlightContent } from '@/types';
import { ArrowLink } from '@atoms/Link';
import { FlexColumnBox } from '@atoms/Box';
import { useTheme } from '@mui/material';

interface MainProps {
  contents: tHighlightContent[];
}

const Main = (props: MainProps) => {
  const theme = useTheme();
  return (
    <FlexColumnBox gapSize={4}>
      <ContentTitle variant="body1" component={'h3'}>
        オリジナルサービス
      </ContentTitle>

      {props.contents.map((content: tHighlightContent) => {
        return (
          <Grid key={content.uuid} container alignItems="stretch">
            <Grid size={{ xs: 12, sm: 6, md: 5, lg: 5 }}>
              <FlexColumnBox
                sx={{
                  p: { xs: theme.spacing(3), md: theme.spacing(8) },
                  width: '100%',
                  height: '100%',
                }}
                gapSize={4}
                className={'color-secondary thin'}
              >
                <Typography
                  variant="h4"
                  component="h2"
                  className={'textAlignCenter'}
                >
                  {content.title}
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  dangerouslySetInnerHTML={{ __html: content.description }}
                />
                <ArrowLink href={content.link} label={content.label} />
              </FlexColumnBox>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 7, lg: 7 }}>
              <Box
                className="color-secondary"
                sx={{
                  width: '100%',
                  height: '100%',
                }}
              >
                <MediaImage
                  media={content.img}
                  width={680}
                  height={680}
                  priority
                />
              </Box>
            </Grid>
          </Grid>
        );
      })}
    </FlexColumnBox>
  );
};

export default Main;
