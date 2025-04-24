'use client';
import Modal from 'src/atoms/Modal';
import { useContext } from 'react';
import { CommonDataContext } from 'src/contexts/Common';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';
import { FlexColumnBox, FlexBox } from 'src/atoms/Box';
import { useTheme } from '@mui/material/styles';
import * as Link from 'src/atoms/Link';
import * as ImgLink from 'src/components/button/ImgLink';

const Main = () => {
  const [open, setOpen] = useState(false);

  const handleMenuOpen = () => {
    console.log('handleMenuOpen');
    setOpen(true);
  };

  const handleMenuClose = () => {
    console.log('handleMenuClose');
    setOpen(false);
  };

  return (
    <>
      <Modal
        title={''}
        actions={<></>}
        open={open}
        width={'xl'}
        onClose={handleMenuClose}
        fullScreen={true}
      >
        <MenuForm />
      </Modal>
      <IconButton
        size="large"
        edge="end"
        aria-label="menu"
        onClick={handleMenuOpen}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default Main;

export const MenuForm = () => {
  const theme = useTheme();
  const { sns, companyInfo } = useContext(CommonDataContext);
  return (
    <FlexColumnBox
      gapSize={2}
      sx={{
        p: theme.spacing(2),
        color: 'primary.contrastText',
      }}
    >
      <FlexColumnBox gapSize={1} width={'100%'}>
        <Typography
          variant="h2"
          component={'h3'}
          width={'100%'}
          sx={{ borderBottom: '1px solid black' }}
        >
          住所
        </Typography>
        <FlexColumnBox gapSize={0} sx={{ p: theme.spacing(2) }}>
          <Typography variant="body1" component="p">
            {companyInfo.postal_code}
          </Typography>
          <Typography variant="body1" component="p">
            {companyInfo.address}
          </Typography>
          <Typography variant="body1" component="p">
            {companyInfo.address_other}
          </Typography>
          <FlexBox gapSize={0.2}>
            <Link.OutLink
              href={companyInfo.google_map_link}
              label={'Google map'}
            />
          </FlexBox>
        </FlexColumnBox>
      </FlexColumnBox>

      <FlexColumnBox gapSize={1} width={'100%'}>
        <Typography
          variant="h2"
          component={'h3'}
          width={'100%'}
          sx={{ borderBottom: '1px solid black' }}
        >
          ご予約
        </Typography>
        <FlexColumnBox gapSize={0} sx={{ p: theme.spacing(2) }}>
          <Link.Main
            href={`tel:${companyInfo.tell}`}
            label={companyInfo.tell}
          />
        </FlexColumnBox>
      </FlexColumnBox>

      <FlexColumnBox gapSize={1}>
        <Typography
          variant="h2"
          component={'h3'}
          sx={{ borderBottom: '1px solid black' }}
        >
          SNS
        </Typography>
        <FlexBox
          className={'SNS'}
          sx={{ margin: 'auto', height: 50, justifyContent: 'center' }}
        >
          {sns.map((sns, index) =>
            sns.icon ? (
              <ImgLink.Icon key={`sns-${index}-${sns.name}`} link={sns} />
            ) : null
          )}
        </FlexBox>
      </FlexColumnBox>
    </FlexColumnBox>
  );
};
