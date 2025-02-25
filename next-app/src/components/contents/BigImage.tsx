import { Box, Grid2 as Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ResponsiveBox, { FlexColumnBox } from "@/atoms/Box";
import * as Img from "@/atoms/Imgae";
import * as Link from "@/atoms/Link";
import { tContentImg1 } from "@/types";

const Main = ({ content }: { content: tContentImg1 }) => {
  const theme = useTheme();
  return (
    <FlexColumnBox width={"100%"} gapSize={4}>
      {content.catchcopy && (
        <Typography
          variant="h2"
          component="h2"
          className={"bigImg-headline textAlignCenter"}
        >
          {content.catchcopy}
        </Typography>
      )}
      <Box sx={{ bgcolor: "black", color: "white" }}>
        <ResponsiveBox maxWidth={"xl"} sx={{ margin: "auto" }}>
          <Grid container spacing={0}>
            <Grid size={{ xs: 12, md: 6, lg: 4 }} sx={{ p: theme.spacing(8) }}>
              <FlexColumnBox gapSize={4}>
                <Typography variant="h4" component="h3" className={"font-text"}>
                  {content.title}
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  dangerouslySetInnerHTML={{ __html: content.description }}
                />
              </FlexColumnBox>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 8 }}>
              <Img.MediaImage
                media={content.img1}
                width={1920}
                height={680}
                priority
              />
            </Grid>
          </Grid>
        </ResponsiveBox>
      </Box>
      {content.href && content.label && (
        <ResponsiveBox maxWidth={"lg"} sx={{ margin: "auto" }}>
          <Link.ArrowLink href={content.href} label={"実績はこちら"} />
        </ResponsiveBox>
      )}
    </FlexColumnBox>
  );
};

export default Main;
