import { FlexColumnBox } from '@/atoms/Box'
import * as tAbility from '@ctypes/ability'
import { MediaImages } from '@/atoms/Imgae'
import { Typography } from '@mui/material'
import ResponsiveBox from '@/atoms/Box'
import { tGridSize } from '@ctypes/index'

const Main = ({
  item,
  width,
  height,
}: {
  item: tAbility.tAbilityContent
  width?: tGridSize | number
  height?: tGridSize | number
}) => {
  return (
    <FlexColumnBox gapSize={2} alignItems={'center'}>
      <MediaImages
        medias={[item.img1, item.img2 || item.img1]}
        width={width}
        height={height}
        priority
      />
      <ResponsiveBox maxWidth="md">
        <Typography
          variant="h5"
          component="p"
          className="font-text"
          dangerouslySetInnerHTML={{ __html: item.caption }}
        />
      </ResponsiveBox>
    </FlexColumnBox>
  )
}

export default Main
