import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import HeaderThemeProvider from '@themes/HeaderTheme';
import { LinkBox } from '@atoms/Link';
import * as Image from '@atoms/Imgae';
import MenuBtn from '@components/modal/Menu';
import { FlexBox } from '@/atoms/Box';
import { tLink } from '@ctypes/index';

interface HeaderProps {
  sns: tLink[];
}
const HeaderNavigation = ({ sns }: HeaderProps) => {
  // snsからiconがnullのものを除外
  sns = sns.filter((sns) => sns.icon !== null);

  return (
    <HeaderThemeProvider>
      <AppBar className="appbar">
        <Toolbar>
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

export default HeaderNavigation;
