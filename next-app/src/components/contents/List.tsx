import { FlexColumnBox } from '@atoms/Box';
import { tItem } from '@/types';
import { Typography, Grid2 as Grid } from '@mui/material';
import { MediaImages } from '@atoms/Image';
import { grey } from '@mui/material/colors';

interface MainProps {
  list: tItem[];
}
const Main = (props: MainProps) => {
  return (
    <FlexColumnBox>
      {props.list.map((item: tItem) => {
        return (
          <Grid container key={item.uuid} spacing={4}>
            <Grid
              size={item.img1 ? { xs: 12, md: 6, lg: 7 } : { xs: 12 }}
              sx={{ p: 4, bgcolor: grey[100] }}
            >
              <FlexColumnBox>
                <Typography
                  variant="h3"
                  component={'h4'}
                  className={'textAlignLeft'}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  component={'p'}
                  className={'textAlignLeft'}
                >
                  {item.caption}
                </Typography>
              </FlexColumnBox>
            </Grid>
            {item.img1 && (
              <Grid size={{ xs: 12, md: 6, lg: 5 }}>
                <MediaImages
                  medias={[item.img1, item.img2 || item.img1]}
                  priority
                  width={1920}
                  height={{ xs: 200, sm: 230, md: 250, lg: 250, xl: 250 }}
                />
              </Grid>
            )}
          </Grid>
        );
      })}
    </FlexColumnBox>
  );
};
export default Main;
