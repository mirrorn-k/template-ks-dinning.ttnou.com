'use client';
import * as Image from '@atoms/Image';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import HtmlTypography from '@components/HtmlTypography';
import ResponsiveBox, { FlexColumnBox } from '@/atoms/Box';
import * as typeMenu from '@/types/menu';
import { isOdd } from '@functions/common/index';
import Carousel from '@components/slider/Carousel';
import { tSeat } from '@/types/index';
import { useIsMobile } from '@functions/common/flgDevice';

export default function Main() {
  return (
    <FlexColumnBox width={'100%'} gapSize={4}>
      <KV />
      <Catch />
      <Menus />
      <CorseMenus />
      <Searts />
    </FlexColumnBox>
  );
}

const KV = () => {
  return (
    <div style={{ width: '100%', margin: '0 auto', position: 'relative' }}>
      <Image.Main
        src="/ttnou/tmp/noren_2.png"
        alt="image_noren_2.png"
        width={600} // 元の画像サイズ
        height={1200}
        style={{ position: 'absolute', width: '100%' }} // 親要素を超えない
      />
      <Image.Main
        src="/ttnou/tmp/image_firstView1.png"
        alt="image_firstView1.png"
        width={600} // 元の画像サイズ
        height={1200}
        style={{ width: '100%' }} // 親要素を超えない
      />
    </div>
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
        medias={[
          {
            url: '/ttnou/tmp/image_secondView_1.jpg',
            file: 'image_secondView_1.jpg.jpg',
            name: 'image_secondView_1.jpg',
            caption: 'image_secondView_1.jpg',
            uuid: 'DOPSAKFPOJAEF;',
          },
        ]}
        containerStyle={{
          justifyItems: 'left',
        }}
        imgProps={{
          width: (750 / 4) * 3,
          height: (500 / 4) * 3,
          style: { paddingLeft: theme.spacing(4) },
        }}
      />
      <ResponsiveBox
        maxWidth={'sm'}
        sx={{ margin: 'auto', my: theme.spacing(10) }}
      >
        <Typography
          variant="h4"
          component="h3"
          color={theme.palette.secondary.contrastText}
          className={'font-text textAlignCenter'}
          sx={{ mb: theme.spacing(4) }}
        >
          お店のこだわり
        </Typography>
        <HtmlTypography
          text={'ここにお店のこだわりを記載します。 '}
          typoProps={{
            variant: 'body1',
            color: theme.palette.secondary.contrastText,
            className: 'textAlignCenter',
          }}
        />
      </ResponsiveBox>
      <Image.MediaImages
        medias={[
          {
            url: '/ttnou/tmp/image_secondView_2.jpg',
            file: 'image_secondView_2.jpg.jpg',
            name: 'image_secondView_2.jpg',
            caption: 'image_secondView_2.jpg',
            uuid: 'dふぁdふぁs;',
          },
        ]}
        containerStyle={{
          justifyItems: 'right',
        }}
        imgProps={{
          width: (750 / 4) * 3,
          height: (500 / 4) * 3,
          style: { paddingRight: theme.spacing(4) },
        }}
      />
    </Box>
  );
};

const Menus = () => {
  const theme = useTheme();
  return (
    <Box width={'100%'} sx={{ my: theme.spacing(8) }}>
      <Title title={'メニュー'} />

      {/**
       * 定番メニュ-
       */}
      <FlexColumnBox
        gapSize={8}
        position={'relative'}
        sx={{ pt: '150px', display: 'flex', alignItems: 'center' }}
      >
        <Image.Main
          src="/ttnou/tmp/title_menu_teiban.png"
          alt={'title_menu_teiban.png'}
          width={useIsMobile() ? 50 : 70}
          height={250}
          style={{
            position: 'absolute',
            top: `${theme.spacing(4)}`,
            left: theme.spacing(1),
            zIndex: -1,
            overflow: 'visible',
          }}
        />
        {teibanMenus.map((menu, index) => (
          <MenuTeiban key={`menu-teiban-${index}`} menu={menu} index={index} />
        ))}
      </FlexColumnBox>

      {/**
       * 季節のおすすめメニュー
       */}
      <FlexColumnBox gapSize={8} position={'relative'} sx={{ pt: '125px' }}>
        <Image.Main
          style={{
            position: 'absolute',
            top: `${theme.spacing(4)}`,
            left: theme.spacing(1),
            zIndex: 1,
            overflow: 'visible',
          }}
          src="/ttnou/tmp/title_menu_kisetsu.png"
          alt="title_menu_kisetsu.png"
          width={useIsMobile() ? 50 : 70}
          height={300}
        />
        <FlexColumnBox
          gapSize={4}
          bgcolor={'secondary.main'}
          sx={{
            pl: theme.spacing(9),
            pr: theme.spacing(2),
            py: theme.spacing(4),
            borderRadius: '20px',
          }}
        >
          <ResponsiveBox maxWidth={'sm'} sx={{ margin: 'auto' }}>
            {kisetsuMenus.map((menu, index) => (
              <MenuKisetsu
                key={`menu-kisetsu-${index}`}
                menu={menu}
                index={index}
              />
            ))}
          </ResponsiveBox>
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
    <ResponsiveBox
      maxWidth={'sm'}
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflowX: 'visible',
      }}
    >
      <Image.Main
        src={menu.image.url}
        alt={menu.image.name}
        width={780}
        height={700}
      />
      <Image.Main
        style={{
          position: 'absolute',
          top: `${theme.spacing(3)}`,
          left: isOdd(index) ? `0` : 'unset',
          right: isOdd(index) ? 'unset' : `0`,
          zIndex: -1,
        }}
        src="/ttnou/tmp/uzumaki.png"
        alt="uzumaki.png"
        width={300}
        height={300}
      />
      <Typography
        variant="h5"
        component="h3"
        className={'font-text textAlignCenter'}
      >
        {menu.name}
      </Typography>

      <HtmlTypography
        component="p"
        typoProps={{
          variant: 'body1',
          className: 'font-text textAlignCenter',
        }}
        text={menu.caption}
      />
      <Typography
        variant="h6"
        component="h4"
        className={'font-text textAlignCenter'}
      >
        {`${menu.price}円(税込)`}
      </Typography>
    </ResponsiveBox>
  );
};

const MenuKisetsu = ({ menu }: { menu: typeMenu.tMenu; index: number }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        margin: 'auto',
      }}
    >
      <Image.MediaImage media={menu.image} width={600} height={400} />
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

const CorseMenus = () => {
  const menus = corsese.map((menu, index) => (
    <CorseMenu key={`corse-menu-${index}`} menu={menu} />
  ));

  return (
    <Box>
      <Title title={'コースメニュー'} />
      <Carousel items={menus} />
    </Box>
  );
};

const CorseMenu = ({ menu }: { menu: typeMenu.tCorse }) => {
  const theme = useTheme();
  return (
    <ResponsiveBox maxWidth="sm" sx={{ px: theme.spacing(4), margin: 'auto' }}>
      <Typography
        variant="h5"
        component="h3"
        className={'font-text textAlignCenter'}
      >
        {menu.name}
      </Typography>
      <Typography
        variant="h5"
        component="h3"
        className={'font-text textAlignCenter'}
      >
        {`${menu.subname} ${menu.price}円(税込)`}
      </Typography>
      <Image.Main
        src={menu.image.url}
        alt={menu.image.name}
        width={600}
        height={400}
      />
      <HtmlTypography
        component="p"
        typoProps={{
          variant: 'body1',
          className: 'font-text textAlignLeft',
          sx: {
            border: `1px solid black`,
            p: theme.spacing(2),
          },
        }}
        text={`内容<br>${menu.caption}`}
      />
    </ResponsiveBox>
  );
};

const corsese: typeMenu.tCorse[] = [
  {
    uuid: 'cdsakcld;',
    name: `全8種おすすめコース`,
    subname: '≪飲み放題付き≫',
    price: 4700,
    caption: `
      <li>枝豆</li>
      <li>ホタルイカ酢味噌</li>
      <li>季節のおつくり盛り合わせ</li>
      <li>鮮魚のユッケ</li>
      <li>自家製タルタルのチキンなんばん</li>
      <li>揚げ物の盛り合わせ</li>
      <li>マグロカマの塩焼き 特々大</li>
      <li>デザート</li>
      <br>
      <p>季節、仕入れによって異なります</p>
      <p></p>
      <p>≪2時間飲み放題付き≫</p>
    `,
    image: {
      url: '/ttnou/tmp/image_courseMenu_1.jpg',
      file: 'image_courseMenu_1.jpg',
      name: 'image_courseMenu_1.jpg',
      caption: 'image_courseMenu_1.jpg',
      uuid: 'dhakhdwljj',
    },
  },
  {
    uuid: 'dsふぁd;',
    name: `ちょい飲みセット`,
    subname: '',
    price: 1100,
    caption: `
      <li>選べるドリンク</li>
      <li class="marker-none" >ビール or ハイボール or サワー</li>
      <li>小鉢とえだまめ</li>
      <li>唐揚げ3ケ or お造り3種</li>
    `,
    image: {
      url: '/ttnou/tmp/image_courseMenu_2.jpg',
      file: 'image_courseMenu_2.jpg',
      name: 'image_courseMenu_2.jpg',
      caption: 'image_courseMenu_2.jpg',
      uuid: 'dhakhdwljj',
    },
  },
];

const Searts = () => {
  const items = searts.map((item, index) => (
    <SeartItem key={`corse-menu-${index}`} item={item} />
  ));
  return (
    <Box>
      <Title title={'座席'} />
      <Carousel items={items} />
    </Box>
  );
};
const SeartItem = ({ item }: { item: tSeat }) => {
  const theme = useTheme();
  return (
    <FlexColumnBox
      sx={{ px: theme.spacing(4), pb: theme.spacing(4), alignItems: 'center' }}
    >
      <Image.Main
        src={item.image.url}
        alt={item.image.name}
        width={600}
        height={400}
      />
      <Typography
        variant="body1"
        component="label"
        className={'font-text textAlignCenter'}
      >
        {item.name}
      </Typography>
    </FlexColumnBox>
  );
};

const searts: tSeat[] = [
  {
    uuid: 'cdsakcld;',
    name: `テーブル席`,
    image: {
      url: '/ttnou/tmp/image_zaseki_1.jpg',
      file: 'image_zaseki_1.jpg',
      name: 'image_zaseki_1.jpg',
      caption: 'image_zaseki_1.jpg',
      uuid: 'fsdafdslo',
    },
  },
  {
    uuid: 'dsふぁd;',
    name: `カウンター席`,
    image: {
      url: '/ttnou/tmp/image_zaseki_2.jpg',
      file: 'image_zaseki_2.jpg',
      name: 'image_zaseki_2.jpg',
      caption: 'image_zaseki_2.jpg',
      uuid: 'vsgvdsfnlv',
    },
  },
];

const Title = ({ title }: { title: string }) => {
  const theme = useTheme();
  return (
    <Typography
      variant="h4"
      component="h3"
      className={'font-text '}
      sx={{ borderBottom: `1px solid black`, mx: theme.spacing(2) }}
    >
      {title}
    </Typography>
  );
};
