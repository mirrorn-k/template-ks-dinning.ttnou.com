'use client';
import React from 'react';
import ResponsiveBox, { FlexColumnBox } from '@atoms/Box';
import { Typography, Box } from '@mui/material';
import FooterThemeProvider from '@themes/FooterTheme';
import { FlexBox } from '@atoms/Box';
import * as Image from '@atoms/Image';
import { tCompany, tMedia } from '@/types/map';
import * as Link from '@atoms/Link';

interface FooterProps {
  companyInfo: tCompany;
  imgTenpo: tMedia[];
}
const Footer = ({ companyInfo, imgTenpo }: FooterProps) => {
  return (
    <FooterThemeProvider>
      <Box
        component={'footer'}
        sx={{
          bgcolor: 'primary.main',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          padding: 2,
          marginTop: 6,
        }}
      >
        <ResponsiveBox maxWidth="lg">
          <FlexColumnBox>
            <Typography
              variant="h3"
              component="h3"
              sx={{ borderBottom: `3px solid black` }}
            >
              店舗情報
            </Typography>
            <Box>
              <Typography variant="h5" component="h5">
                {companyInfo.organization_name}
              </Typography>
            </Box>
            <FlexColumnBox gapSize={0.2}>
              <Typography variant="body1" component="p">
                {companyInfo.postal_code}
              </Typography>
              <Typography variant="body1" component="p">
                {companyInfo.address}
              </Typography>
              <Typography variant="body1" component="p">
                {companyInfo.address_other}
              </Typography>
              <Typography variant="body1" component="p">
                {companyInfo.tell}
              </Typography>
            </FlexColumnBox>
            <FlexBox gapSize={0.2}>
              <Link.OutLink
                href={companyInfo.google_map_link}
                label={'Google map'}
              />
            </FlexBox>
            <Box sx={{ justifyItems: 'center' }}>
              <TenpoImg imgTenpo={imgTenpo} />
            </Box>
            <FlexBox>
              <Typography className={`copyright`}>
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

const TenpoImg = ({ imgTenpo }: { imgTenpo: tMedia[] }) => {
  const width = 200;
  const height = 370;

  switch (imgTenpo.length) {
    case 0:
      return null;
    case 1:
      return (
        <Image.MediaImage media={imgTenpo[0]} width={width} height={height} />
      );
    default:
      return (
        <Image.MediaImages medias={imgTenpo} width={width} height={height} />
      );
  }
};
