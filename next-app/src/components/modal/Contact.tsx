'use client';
import React, { useEffect } from 'react';
import Modal from '@atoms/Modal';
import { CommonDataContext } from '@contexts/Common';
import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/material/styles';
import { SmallTextField } from '@atoms/TextField';
import { tValue } from '@ctypes/index';
import * as atomBtn from '@atoms/Button';
import { CustomImage } from '@atoms/Image';
import { useSearchParams } from 'next/navigation';
import { FlexBox } from '@atoms/Box';
import { Typography } from '@mui/material';

/**
 * Hash型の入力フォームの変更を処理する関数
 * @param value
 * @param state
 * @param setState
 */
const handleChangeValues = (
  value: string | number,
  name: string | number,
  setState: React.Dispatch<React.SetStateAction<Record<string, tValue>>>
) => {
  setState((prev: Record<string, tValue>) => ({ ...prev, [name]: value }));
};

export default function ContactModalBtn() {
  const searchParams = useSearchParams();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    //const searchParams = new URLSearchParams(window.location.search);
    const val = searchParams.get('contact-modal');
    if (val) {
      setOpen(true);
    }
  }, [searchParams]);

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <Main title="お問い合わせ" open={open} onClose={handleCloseModal} />
      <atomBtn.CircularButton
        onClick={handleClick}
        variant="contained"
        color={'primary'}
      >
        <CustomImage
          src="/img/icon/contact_icon.svg"
          alt="contact_icon"
          height={1080}
          width={1920}
          priority
        />
      </atomBtn.CircularButton>
    </>
  );
}

interface MainProps {
  title?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  open: boolean;
  onClose: () => void;
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
}
function Main({
  title = 'お問い合わせ',
  actions,
  open,
  onClose,
  width = false,
}: MainProps) {
  const { contactFormItems } = React.useContext(CommonDataContext);
  const theme = useTheme();
  const [values, setValues] = React.useState<Record<string, tValue>>({});
  return (
    <Modal
      title={title}
      open={open}
      onClose={onClose}
      actions={actions}
      width={width || 'md'}
    >
      <Grid container spacing={theme.spacing(2)}>
        {contactFormItems.map((item, index) => (
          <Grid key={index} size={{ xs: 12 }}>
            <SmallTextField
              label={item.label}
              required={item.required}
              props={{
                type: item.type,
                multiline: item.type === 'textarea',
                rows: item.row,
                name: item.name,
                value: values[item.name],
                onChange: (e) =>
                  handleChangeValues(e.target.value, item.name, setValues),
              }}
            />
          </Grid>
        ))}

        <Grid size={{ xs: 12 }}>
          <FlexBox justifyContent="right">
            <atomBtn.Main
              variant="contained"
              color={'primary'}
              onClick={() => {
                console.log(values);
              }}
            >
              <Typography variant="h5" className="font-text">
                送信
              </Typography>
            </atomBtn.Main>
          </FlexBox>
        </Grid>
      </Grid>
    </Modal>
  );
}
