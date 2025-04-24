'use client';
import React from 'react';
import ResponsiveBox, { FlexColumnBox } from '@/atoms/Box';
import { Typography, Box } from '@mui/material';
import FooterThemeProvider from '@/themes/FooterTheme';
import { FlexBox } from '@/atoms/Box';
import * as Image from '@/atoms/Image';
import { tCompany, tMedia } from '@/types/map';
import * as Link from '@/atoms/Link';
import { Grid } from '@mui/system';

import HtmlTypography from '@/components/HtmlTypography';

interface FooterProps {
  companyInfo: tCompany;
  imgTenpo: tMedia[];
  items?: { label: string; value: string }[];
}
const Footer = ({ companyInfo, imgTenpo, items }: FooterProps) => {
  return (
    <FooterThemeProvider>
      <Box
        width={'100%'}
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
            <Grid container gap={1}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <FlexColumnBox gapSize={0.2}>
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
                </FlexColumnBox>
              </Grid>
              <Grid size={{ xs: 12, sm: 5 }} sx={{ justifyItems: 'center' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyItems: 'center',
                    alignItems: 'center',
                  }}
                >
                  <TenpoImg imgTenpo={imgTenpo} />
                </Box>
              </Grid>
            </Grid>

            {items && (
              <FlexColumnBox gapSize={0.2}>
                {items.map((item, index) => (
                  <TableRow key={index} label={item.label} value={item.value} />
                ))}
              </FlexColumnBox>
            )}
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
        <Image.Main
          src={imgTenpo[0].url}
          alt={imgTenpo[0].name}
          width={width}
          height={height}
        />
      );
    default:
      return (
        <Image.MediaImages
          medias={imgTenpo}
          imgProps={{ width: width, height: height }}
        />
      );
  }
};

const TableRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <Box
      sx={{
        borderBottom: `1px solid black`,
        display: { xs: 'block', sm: 'flex' },
      }}
    >
      <Typography
        variant="body1"
        sx={{
          width: { xs: '100%', sm: '25%' },
          textAlign: { xs: 'left', sm: 'center' },
        }}
      >
        {label}
      </Typography>
      <HtmlTypography
        component="p"
        typoProps={{
          variant: 'body2',
          className: 'font-text textAlignLeft',
          sx: {
            pl: 2,
          },
        }}
        text={`${value}`}
      />
    </Box>
  );
};
