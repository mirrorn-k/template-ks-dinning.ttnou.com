import { Box, Grid2 as Grid, Typography } from '@mui/material';
import NewsThemeProvider from '@themes/NewsTheme';
import { CustomImage } from '@atoms/Imgae';
import { FlexColumnBox } from '@atoms/Box';

export const list = () => {
  return (
    <NewsThemeProvider>
      <Box>
        <FlexColumnBox
          gapSize={2}
          sx={{
            padding: '32px',
            borderTop: '1px solid #000',
            '&:last-child': {
              borderBottom: '1px solid #000',
            },
          }}
        >
          <Grid container spacing={2}>
            <Grid
              size={{ xs: 3, md: 5, xl: 2 }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="h5"
                component="h5"
                className={`category-chip SNS`}
              >
                SNS
              </Typography>
            </Grid>
            <Grid size={{ xs: 9, md: 7, xl: 5 }}>
              <Typography
                variant="h5"
                component="h5"
                className={`textAlignLeft`}
              >
                2021.10.01
              </Typography>
              <Typography
                variant="h4"
                component="h4"
                className={`textAlignLeft`}
              >
                サイトリニューアルのお知らせ
              </Typography>
            </Grid>
            <Grid
              size={{ xs: 0, xl: 5 }}
              sx={{ display: { xs: 'none', xl: 'block' } }}
            >
              <CustomImage
                src="/tmp/news1.jpg"
                alt="news1"
                width={1920}
                height={680}
                priority
              />
            </Grid>
          </Grid>
        </FlexColumnBox>
      </Box>
    </NewsThemeProvider>
  );
};
