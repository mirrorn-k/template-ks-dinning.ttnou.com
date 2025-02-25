import ResponsiveBox, { FlexColumnBox } from '@atoms/Box'
import { MediaImages } from '@atoms/Imgae'
import { Typography } from '@mui/material'
import { tSubContent } from '@ctypes/index'
import { useTheme } from '@mui/material'

const SubContent = ({ content }: { content: tSubContent }) => {
  const theme = useTheme()

  if (!content) return null

  return (
    <ResponsiveBox maxWidth="lg">
      <FlexColumnBox gap={theme.spacing(4)} sx={{ textAlign: 'center' }}>
        <MediaImages
          medias={[content.img1, content.img2 || content.img1]}
          priority
          height={{ xs: 280, sm: 330, md: 380, lg: 430, xl: 480 }}
        />
        <Typography variant="h1" component="h2">
          {content.catchcopy}
        </Typography>
      </FlexColumnBox>
    </ResponsiveBox>
  )
}

export default SubContent
