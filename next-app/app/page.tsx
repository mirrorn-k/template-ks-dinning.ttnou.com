'use client';
import * as Image from '@atoms/Image';
import NextImg from 'next/image';
import Box from '@mui/material/Box';
import { Calculate } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { FlexColumnBox } from '@/atoms/Box';
import * as typeMenu from '@/types/menu';
import { isOdd } from '@functions/common/index';

export default function Main() {
  return (
    <FlexColumnBox width={'100%'} gapSize={4}>
      <KV />
      <Catch />
      <Menus />
    </FlexColumnBox>
  );
}

const KV = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        //minHeight: { xs: '200vw', md: '1650px', lg: '1450px' },
        //height: '90vh',
        width: '100%',
      }}
    >
      <Image.MediaImages
        medias={[
          {
            url: '/ttnou/tmp/noren_1.png',
            file: 'noren_1.png',
            name: 'noren_1.png',
            caption: 'noren_1.png',
            uuid: 'dhakhdwljj',
          },
        ]}
        containerStyle={{
          objectPosition: 'top',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        imageStyle={{ objectPosition: 'top' }}
      />
      <Image.MediaImages
        medias={[
          {
            url: '/ttnou/tmp/image_firstView1.png',
            file: 'image_firstView1.png',
            name: 'image_firstView1.png',
            caption: 'image_firstView1.png',
            uuid: 'dhakhdwljj',
          },
        ]}
      />
    </Box>
  );
};

const Catch = () => {
  const theme = useTheme();
  return (
    <Box width={'100%'} sx={{ my: theme.spacing(8), position: 'relative' }}>
      <Box
        width={'100%'}
        height={`calc(100% - ${theme.spacing(8)})`} // topの倍数で指定
        bgcolor={theme.palette.secondary.dark}
        color={theme.palette.secondary.contrastText}
        sx={{
          position: 'absolute',
          top: `${theme.spacing(4)}`,
          borderRadius: '20px',
          zIndex: -1,
        }}
      />
      <Image.MediaImages
        height={300}
        medias={[
          {
            url: '/ttnou/tmp/image_secondView_1.jpg',
            file: 'image_secondView_1.jpg.jpg',
            name: 'image_secondView_1.jpg',
            caption: 'image_secondView_1.jpg',
            uuid: 'DOPSAKFPOJAEF;',
          },
        ]}
        containerStyle={{ paddingRight: theme.spacing(6) }}
        imageStyle={{ objectPosition: 'left' }}
      />
      <Box
        width={'100%'}
        color={theme.palette.secondary.contrastText}
        sx={{ my: theme.spacing(10) }}
      >
        <Typography
          variant="h4"
          component="h3"
          className={'font-text textAlignCenter'}
          sx={{ mb: theme.spacing(4) }}
        >
          お店のこだわり
        </Typography>
        <Typography
          variant="body1"
          component="p"
          className={'textAlignCenter'}
          dangerouslySetInnerHTML={{
            __html: 'ここにお店のこだわりを記載します。 ',
          }}
        />
      </Box>
      <Image.MediaImages
        height={300}
        medias={[
          {
            url: '/ttnou/tmp/image_secondView_2.jpg',
            file: 'image_secondView_1.jpg.jpg',
            name: 'image_secondView_1.jpg',
            caption: 'image_secondView_1.jpg',
            uuid: 'sdjaKSJ;ALDK',
          },
        ]}
        containerStyle={{ paddingLeft: theme.spacing(6) }}
        imageStyle={{ objectPosition: 'right' }}
      />
    </Box>
  );
};

const Menus = () => {
  const theme = useTheme();
  return (
    <Box width={'100%'} sx={{ my: theme.spacing(8) }}>
      <Typography
        variant="h4"
        component="h3"
        className={'font-text '}
        sx={{ borderBottom: `1px solid black` }}
      >
        メニュー
      </Typography>

      {/**
       * 定番メニュ-
       */}
      <FlexColumnBox gapSize={8} position={'relative'} sx={{ pt: '250px' }}>
        <Image.MediaImage
          containerStyle={{
            position: 'absolute',
            top: `${theme.spacing(4)}`,
            zIndex: -1,
            overflow: 'visible',
          }}
          media={{
            url: '/ttnou/tmp/title_menu_teiban.png',
            file: 'title_menu_teiban.png',
            name: 'title_menu_teiban.png',
            caption: 'title_menu_teiban.png',
            uuid: 'dhakhdwljj',
          }}
          width={50}
          height={250}
        />
        {teibanMenus.map((menu, index) => (
          <MenuTeiban key={`menu-teiban-${index}`} menu={menu} index={index} />
        ))}
      </FlexColumnBox>

      {/**
       * 季節のおすすめメニュー
       */}
      <FlexColumnBox gapSize={8} position={'relative'} sx={{ pt: '125px' }}>
        <Image.MediaImage
          containerStyle={{
            position: 'absolute',
            top: `${theme.spacing(4)}`,
            zIndex: 1,
            overflow: 'visible',
          }}
          media={{
            url: '/ttnou/tmp/title_menu_kisetsu.png',
            file: 'title_menu_kisetsu.png',
            name: 'title_menu_kisetsu.png',
            caption: 'title_menu_kisetsu.png',
            uuid: 'gcuidsahfilar78',
          }}
          width={50}
          height={300}
        />
        <FlexColumnBox
          gapSize={4}
          bgcolor={'secondary.main'}
          sx={{
            pl: theme.spacing(8),
            py: theme.spacing(4),
            borderRadius: '20px',
          }}
        >
          {kisetsuMenus.map((menu, index) => (
            <MenuKisetsu
              key={`menu-kisetsu-${index}`}
              menu={menu}
              index={index}
            />
          ))}
        </FlexColumnBox>
      </FlexColumnBox>
    </Box>
  );
};

const MenuTeiban = ({
  menu,
  index,
}: {
  menu: typeMenu.tMenu;
  index: number;
}) => {
  const theme = useTheme();
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
      <Image.MediaImage media={menu.image} width={400} height={300} />
      <Image.MediaImage
        containerStyle={{
          position: 'absolute',
          top: `${theme.spacing(3)}`,
          left: isOdd(index) ? `-${theme.spacing(12)}` : 'unset',
          right: isOdd(index) ? 'unset' : `-${theme.spacing(12)}`,
          zIndex: -1,
          overflow: 'visible',
        }}
        media={{
          url: '/ttnou/tmp/uzumaki.png',
          file: 'uzumaki.png',
          name: 'uzumaki.png',
          caption: 'uzumaki.png',
          uuid: 'dhakhdwljj',
        }}
        width={300}
        height={200}
      />
      <Typography
        variant="h5"
        component="h3"
        className={'font-text textAlignCenter'}
      >
        {menu.name}
      </Typography>
      <Typography
        variant="body1"
        component="p"
        className={'font-text textAlignCenter'}
        dangerouslySetInnerHTML={{
          __html: `${menu.caption}`,
        }}
      />
      <Typography
        variant="h6"
        component="h4"
        className={'font-text textAlignCenter'}
      >
        {`${menu.price}円(税込)`}
      </Typography>
    </Box>
  );
};

const MenuKisetsu = ({ menu }: { menu: typeMenu.tMenu; index: number }) => {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
      <Image.MediaImage media={menu.image} width={400} height={200} />
      <Typography
        variant="h5"
        component="h3"
        className={'font-text textAlignLeft'}
      >
        {menu.name}
      </Typography>
      <Typography
        variant="h6"
        component="h4"
        className={'font-text textAlignLeft'}
      >
        {`${menu.price}円(税込)`}
      </Typography>
    </Box>
  );
};

const teibanMenus: typeMenu.tMenu[] = [
  {
    uuid: 'dfsadasd',
    name: '刺身盛り合わせ5種',
    price: 790,
    caption: '新鮮なお刺身の中から人気の高い5種類をご提供！',
    image: {
      url: '/ttnou/tmp/image_menu_teiban_1.png',
      file: 'image_menu_teiban_1.png',
      name: 'image_menu_teiban_1.png',
      caption: 'title_menu_teiban.png',
      uuid: 'dhakhdwljj',
    },
  },
  {
    uuid: 'dfsadasd',
    name: '自家製チキンなんばん',
    price: 690,
    caption: 'いつでも揚げたてが食べられる定番メニューです。',
    image: {
      url: '/ttnou/tmp/image_menu_teiban_2.png',
      file: 'image_menu_teiban_2.png',
      name: 'image_menu_teiban_2.png',
      caption: 'image_menu_teiban_2.png',
      uuid: 'dsasjakdljsakljd',
    },
  },
];

const kisetsuMenus: typeMenu.tMenu[] = [
  {
    uuid: 'cdsakcld;',
    name: '刺身盛り合わせ5種',
    price: 790,
    caption: '新鮮なお刺身の中から人気の高い5種類をご提供！',
    image: {
      url: '/ttnou/tmp/image_menu_kisetsu_1.jpg',
      file: 'image_menu_kisetsu_1.jpg',
      name: 'image_menu_kisetsu_1.jpg',
      caption: 'image_menu_kisetsu_1.jpg',
      uuid: 'dhakhdwljj',
    },
  },
  {
    uuid: 'vdsavdsj;o',
    name: '自家製チキンなんばん',
    price: 690,
    caption: 'いつでも揚げたてが食べられる定番メニューです。',
    image: {
      url: '/ttnou/tmp/image_menu_kisetsu_2.jpg',
      file: 'image_menu_kisetsu_2.jpg',
      name: 'image_menu_kisetsu_2.jpg',
      caption: 'image_menu_kisetsu_2.jpg',
      uuid: 'dsasjakdljsakljd',
    },
  },
];
