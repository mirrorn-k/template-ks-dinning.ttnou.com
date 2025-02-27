'use client';
import Modal from '@atoms/Modal';
import { useContext } from 'react';
import { CommonDataContext } from '@contexts/Common';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';
import { LinkBox } from '@atoms/Link';
import { FlexColumnBox, FlexBox } from '@atoms/Box';
import { useTheme } from '@mui/material/styles';
import * as ImgLink from '@components/button/ImgLink';
import ViewChangeBtn from '@components/button/ViewChangeBtn';
import ContactModalBtn from '@components/modal/Contact';

const Main = () => {
  const theme = useTheme();
  const { menus, sns } = useContext(CommonDataContext);

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
        <FlexColumnBox gapSize={2}>
          <FlexColumnBox gapSize={1}>
            <Typography
              variant="h2"
              component={'h3'}
              sx={{ borderBottom: '1px solid black' }}
            >
              MENU
            </Typography>
            <FlexColumnBox gapSize={0} sx={{ p: theme.spacing(2) }}>
              <LinkBox href={'/'}>
                <Typography className={'font-tittle'}>HOME</Typography>
              </LinkBox>
              {menus.map((menu, index) => (
                <LinkBox
                  key={`head-navi-sp-${index}-${menu.name}`}
                  onClick={handleMenuClose}
                  href={menu.url}
                >
                  <Typography className={'font-tittle'}>{menu.name}</Typography>
                </LinkBox>
              ))}
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
              {sns.map((sns, index) => (
                <LinkBox
                  key={`sns-${index}-${sns.name}`}
                  href={sns.url}
                  aria-label={sns.name}
                >
                  {sns.icon && <ImgLink.Icon link={sns} />}
                </LinkBox>
              ))}
            </FlexBox>
          </FlexColumnBox>

          <FlexColumnBox gapSize={1}>
            <Typography
              variant="h2"
              component={'h3'}
              sx={{ borderBottom: '1px solid black' }}
            >
              QRコード
            </Typography>

            <FlexBox sx={{}}>
              <ViewChangeBtn />
              <ContactModalBtn />
            </FlexBox>
          </FlexColumnBox>
        </FlexColumnBox>
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
