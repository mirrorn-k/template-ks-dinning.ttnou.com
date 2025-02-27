import * as Image from '@atoms/Image';
import Link from 'next/link';
import { CommonDataContext } from '@contexts/Common';
import { useContext } from 'react';
import { tLink } from '@ctypes/index';

export const Icon = ({ link }: { link: tLink }) => {
  if (link.icon === null) return null;
  return (
    <Link href={link.url}>
      <Image.CustomImage
        src={link.icon.url}
        alt={link.name}
        width={40}
        height={40}
      />
    </Link>
  );
};

export const Instagram = () => {
  const { sns } = useContext(CommonDataContext);

  const obj = sns.find((obj: tLink) => obj.name.toLowerCase() === 'instagram');
  if (!obj || !obj.icon) return null;
  return (
    <Link href={obj.url}>
      <Image.CustomImage
        src={obj.icon.url}
        alt={obj.name}
        width={40}
        height={40}
      />
    </Link>
  );
};
