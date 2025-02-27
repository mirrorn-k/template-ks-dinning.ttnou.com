import { Box, Typography } from '@mui/material';
import { FlexColumnBox } from '@atoms/Box';
import * as Img from '@atoms/Image';
import * as Link from '@atoms/Link';
import { tContentImg1 } from '@/types';
import ResponsiveBox from '@atoms/Box';

const Main = ({ content }: { content: tContentImg1 }) => {
  const styles = {
    parents: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      margin: 'auto',
    },
    visual: {
      borderStyle: 'solid',
      borderWidth: '4px',
      padding: '1rem',
      marginRight: '1rem',
      marginLeft: '1rem',
    },
    caption: {
      paddingRight: '2rem',
      paddingLeft: '2rem',
    },
  };

  return (
    <FlexColumnBox width={'100%'}>
      <ResponsiveBox sx={styles.parents} maxWidth={'lg'}>
        <FlexColumnBox gapSize={4}>
          <Typography
            variant="h2"
            component="h2"
            className={'headline textAlignCenter'}
          >
            {content.title}
          </Typography>
          <Box maxWidth={'lg'} sx={styles.visual}>
            <Img.MediaImage
              media={content.img1}
              width={1920}
              height={680}
              priority
            />
          </Box>
        </FlexColumnBox>
        <ResponsiveBox maxWidth={'lg'} sx={styles.caption}>
          <Typography variant="body1" component="p">
            {content.description}
          </Typography>
        </ResponsiveBox>
        {content.href && content.label && (
          <Link.ArrowLink href={content.href} label={content.label} />
        )}
      </ResponsiveBox>
    </FlexColumnBox>
  );
};

export default Main;
