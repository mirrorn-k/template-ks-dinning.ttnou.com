'use client';
import { useContext, useEffect } from 'react';
import { CommonDataContext } from 'src/contexts/Common';
import { CircularButton } from 'src/atoms/Button';
import * as Image from 'src/atoms/Image';
import { useSearchParams } from 'next/navigation';

const Main = () => {
  const searchParams = useSearchParams();
  const { flgChange, selectView } = useContext(CommonDataContext);

  useEffect(() => {
    //const searchParams = new URLSearchParams(window.location.search);
    const val = searchParams.get('view');
    if (val) {
      flgChange(Number(val));
    }
  }, [searchParams]);

  return (
    <CircularButton
      onClick={() => flgChange()}
      variant="contained"
      color={'secondary'}
    >
      <Image.Main
        src="/img/icon/swich_icon.svg"
        alt="swich_icon"
        height={1080}
        width={1920}
        priority
        style={{
          transform: `rotate(${selectView ? 180 : 0}deg)`,
          transition: 'transform 0.5s ease-in-out',
        }}
      />
    </CircularButton>
  );
};

export default Main;
