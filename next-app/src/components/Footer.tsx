'use client';
import React, { useContext } from 'react';
import ResponsiveBox, { FlexColumnBox } from '@atoms/Box';
import { Typography, Box } from '@mui/material';
import FooterThemeProvider from '@themes/FooterTheme';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import { FlexBox } from '@atoms/Box';
import { CommonDataContext } from '@contexts/Common';
import * as Image from '@atoms/Imgae';
import { LinkBox } from '@atoms/Link';
import * as SnsBtn from '@components/button/ImgLink';

const Footer: React.FC = () => {
  const theme = useTheme();
  const { menus } = useContext(CommonDataContext);

  return (
    <FooterThemeProvider>
      <Box
        component={'footer'}
        sx={{
          bgcolor: 'primary.main',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          padding: theme.spacing(2),
          marginTop: theme.spacing(6),
        }}
      >
        <ResponsiveBox maxWidth="lg">
          <FlexColumnBox>
            <Toolbar
              sx={{
                justifyContent: 'center',
              }}
            >
              {/* ロゴ */}
              <Image.Logo />

              {/* PC ナビゲーション */}
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' }, // PC のみ表示
                  marginLeft: 'auto',
                  gap: theme.spacing(6), // リンク間のスペース
                }}
              >
                {menus.map((menu, index) => (
                  <LinkBox
                    key={`head-navi-${index}-${menu.name}`}
                    href={menu.url}
                    aria-label={menu.name}
                  >
                    <Typography className={'font-tittle'}>
                      {menu.name}
                    </Typography>
                  </LinkBox>
                ))}
              </Box>
            </Toolbar>
            <FlexBox
              className={'SNS'}
              sx={{ margin: 'auto', height: 50, justifyContent: 'center' }}
            >
              <SnsBtn.Instagram />
            </FlexBox>
            <FlexBox>
              <Typography variant="h5" component="h5">
                Copyright©︎ addonem lcc. All Rights Reserved.
              </Typography>
            </FlexBox>
          </FlexColumnBox>
        </ResponsiveBox>
      </Box>
    </FooterThemeProvider>
  );
};
export default Footer;
