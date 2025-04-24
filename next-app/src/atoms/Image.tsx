import Image from 'next/image';
import { tMedia } from '@ctypes/map';
import { CenteredBox } from 'src/atoms/Box';
import { useContext } from 'react';
import { CommonDataContext } from 'src/contexts/Common';
import Link from 'next/link';

export const Main = (props: React.ComponentProps<typeof Image>) => {
  return (
    <Image
      {...props}
      alt={props.alt || ''}
      style={{ maxWidth: '100%', height: 'auto', ...props.style }} // `maxWidth` 適用
    />
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
      <Main src="/logo.svg" alt="addonem llc. logo" width={200} height={64} />
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
          width={width}
          height={height}
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
  containerStyle?: React.CSSProperties;
  imgProps: Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'>;
}
/**
 * selectViewによる切り替え対応Imageコンポーネント
 * @param param0
 * @returns
 */
export const MediaImages: React.FC<MediaImagesProps> = ({
  medias,
  containerStyle,
  imgProps,
}) => {
  const { selectView } = useContext(CommonDataContext);

  return (
    <div
      className="ttnoumap-media-container"
      style={{
        width: '100%',
        margin: '0 auto',
        position: 'relative',
        ...containerStyle,
      }}
    >
      {medias.map((media, index) => (
        <Main
          key={index}
          {...imgProps}
          src={media.url}
          alt={media.name || ''}
          style={{
            maxWidth: '100%',
            height: 'auto',
            display: selectView === index ? 'block' : 'none',
            ...imgProps.style,
          }}
        />
      ))}
    </div>
  );
};
