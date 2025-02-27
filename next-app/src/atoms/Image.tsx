import Image from 'next/image';
import { tMedia } from '@ctypes/map';
import { CenteredBox } from '@atoms/Box';
import { Box } from '@mui/material';
import { useContext } from 'react';
import { CommonDataContext } from '@contexts/Common';
import Link from 'next/link';
import { tGridSize } from '@ctypes/index';

interface CustomImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  styles?: React.CSSProperties;
}
export const CustomImage = ({
  src,
  alt,
  width,
  height,
  fill = false,
  className = '',
  priority = false,
  styles = {},
}: CustomImageProps) => {
  return (
    <CenteredBox className={`custom-image-container ${className}`}>
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill={fill}
          priority={priority}
          style={{
            objectFit: 'cover', // 親要素全体を埋める（必要に応じて `contain` に変更）
            ...styles,
          }}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          style={{
            objectFit: 'contain', // アスペクト比を維持して親要素内に収める
            width: '100%', // 親要素の幅に応じてスケーリング
            height: 'auto', // アスペクト比を維持
            maxHeight: '100%', // 親要素の高さに応じてスケーリング
            ...styles,
          }}
        />
      )}
    </CenteredBox>
  );
};

interface CustomImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  styles?: React.CSSProperties;
}
export const Contain = ({
  src,
  alt,
  className = '',
  priority = false,
  styles = {},
}: CustomImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill={true}
      className={className}
      priority={priority}
      style={{
        objectFit: 'contain',
        ...styles,
      }}
    />
  );
};

export const Logo = () => {
  return (
    <Link
      href="/"
      style={{ display: 'block', maxHeight: '64px', maxWidth: '200px' }}
    >
      <CustomImage
        src="/logo.svg"
        alt="addonem llc. logo"
        width={200}
        height={64}
      />
    </Link>
  );
};

interface MediaImageProps {
  media: tMedia;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  containerStyle?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
}

export const MediaImage = ({
  media,
  width = undefined,
  height = undefined,
  fill = false,
  className = '',
  priority = false,
  containerStyle = {},
  imageStyle = {},
}: MediaImageProps) => {
  if (!fill && !width) {
    width = 1;
  } else if (fill) {
    width = undefined;
  }
  if (!fill && !height) {
    height = 1;
  } else if (fill) {
    height = undefined;
  }
  return (
    <CenteredBox
      className={`ttnoumap-media-container ${className}`}
      sx={{
        position: 'relative',
        width: width || '100%',
        height: height || '100%',
        maxWidth: '100%',
        maxHeight: '100%',
        overflow: 'hidden',
        ...containerStyle,
      }}
    >
      {fill ? (
        <Image
          src={media.url}
          alt={media.name}
          fill={fill}
          priority={priority}
          style={{
            objectFit: 'cover', // 親要素全体を埋める（必要に応じて `contain` に変更）
            ...imageStyle,
          }}
        />
      ) : (
        <Image
          src={media.url}
          alt={media.name}
          width={width}
          height={height}
          fill={fill}
          priority={priority}
          style={{
            width: '100%', // 親要素の幅に応じてスケーリング
            height: 'auto', // アスペクト比を維持
            ...imageStyle,
          }}
        />
      )}
    </CenteredBox>
  );
};

export const AnimationMediaImage = ({
  media,
  width = undefined,
  height = undefined,
  fill = false,
  className = '',
  priority = false,
}: MediaImageProps) => {
  if (!fill && !width) {
    width = 680;
  } else if (fill) {
    width = undefined;
  }
  if (!fill && !height) {
    height = 480;
  } else if (fill) {
    height = undefined;
  }
  return (
    <CenteredBox className={`ttnoumap-media-container ${className}`}>
      <Image
        src={media.url}
        alt={media.name}
        width={width}
        height={height}
        fill={fill} // "intrinsic", "responsive", "fill" などから選択
        priority={priority} // 優先的にロードするか
        unoptimized
      />
    </CenteredBox>
  );
};

interface MediaImagesProps {
  medias: tMedia[];
  width?: tGridSize | number;
  height?: tGridSize | number;
  priority?: boolean;
  containerStyle?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
}

/**
 * selectViewによる切り替え対応Imageコンポーネント
 * @param param0
 * @returns
 */
export const MediaImages: React.FC<MediaImagesProps> = ({
  medias,
  width,
  height,
  priority = false,
  containerStyle = {},
  imageStyle = {},
}) => {
  const { selectView } = useContext(CommonDataContext);
  return (
    <CenteredBox
      className={`ttnoumap-media-container`}
      sx={{
        position: 'relative',
        width: width || '100%',
        height: height || '100%',
        maxWidth: '100%',
        maxHeight: '100%',
        overflow: 'hidden',
        ...containerStyle,
      }}
    >
      {medias.map((media, index) => (
        <Box
          key={index}
          className={`${selectView !== index ? 'hidden' : ''}`}
          sx={{
            position: 'absolute',
            width: width || '100%',
            height: height || '100%',
            display: 'flex', // 画像を中央揃え
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src={media.url}
            alt={media.caption}
            fill
            style={{
              objectFit: 'contain', // アスペクト比を維持して親要素内に収める
              ...imageStyle,
            }}
            priority={priority}
          />
        </Box>
      ))}
    </CenteredBox>
  );
};
