import * as Image from '@atoms/Imgae';
import Link from 'next/link';
import { CommonDataContext } from '@contexts/Common';
import { useContext } from 'react';
import { tLink } from '@ctypes/index';

const Main = ({ link }: { link: tLink }) => {
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
export default Main;

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
