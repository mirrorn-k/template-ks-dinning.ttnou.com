import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HeaderThemeProvider from '@themes/HeaderTheme';
import { LinkBox } from '@atoms/Link';
import * as Image from '@atoms/Imgae';
import MenuBtn from '@components/modal/Menu';
import { FlexBox } from '@/atoms/Box';
import { tLink } from '@ctypes/index';

interface HeaderProps {
  sns: tLink[];
  menus: tLink[];
}
const HeaderNavigation = ({ sns, menus }: HeaderProps) => {
  // snsからiconがnullのものを除外
  sns = sns.filter((sns) => sns.icon !== null);

  return (
    <HeaderThemeProvider>
      <AppBar className="appbar">
        <Toolbar>
          {/* PC ナビゲーション */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' }, // PC のみ表示
              marginLeft: 'auto',
              gap: 6, // リンク間のスペース
            }}
          >
            {menus.map((menu, index) => (
              <LinkBox
                key={`head-navi-${index}-${menu.name} `}
                href={menu.url}
                aria-label={menu.name}
              >
                <MenuLabel menu={menu} />
              </LinkBox>
            ))}
          </Box>

          {/* モバイルナビゲーション */}
          <Box
            sx={{ display: { xs: 'flex', md: 'none' }, marginRight: 'auto' }}
          >
            <MenuBtn />
          </Box>

          {/* SNS */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, marginLeft: 'auto' }}>
            <FlexBox>
              {sns.map((sns, index) => (
                <LinkBox
                  key={`sns-${index}-${sns.name}`}
                  href={sns.url}
                  aria-label={sns.name}
                >
                  {sns.icon && (
                    <Image.CustomImage
                      src={sns.icon.url}
                      alt={sns.name}
                      width={40}
                      height={40}
                    />
                  )}
                </LinkBox>
              ))}
            </FlexBox>
          </Box>
        </Toolbar>
      </AppBar>
    </HeaderThemeProvider>
  );
};

// メニューラベルのカスタムボックス
const MenuLabel = ({ menu }: { menu: tLink }) => {
  return (
    <Box>
      <Typography variant="h2" className={'font-tittle'}>
        {menu.name}
      </Typography>
    </Box>
  );
};

export default HeaderNavigation;
