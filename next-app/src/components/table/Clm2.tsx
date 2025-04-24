import React from 'react';
import styled from '@mui/material/styles/styled';
import { Grid2 as Grid, Typography } from '@mui/material';
import { tTableClm2 } from 'src/types';

// 親Gridコンテナのカスタムスタイル
const GridContainer = styled(Grid)(({ theme }) => ({
  alignItems: 'center', // 垂直方向の位置を揃える（必要に応じて）
  borderTop: '1px solid #ccc',
  '&:last-child': {
    borderBottom: '1px solid #ccc',
  },
  gap: theme.spacing(0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(1),
  },
}));

const CommonGridItem = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(2),
  },
}));

const LabelGrid = styled(CommonGridItem)(({}) => ({
  textAlign: 'center',
}));

const ValueGrid = styled(CommonGridItem)(({ theme }) => ({
  gridColumnStart: 2,
  marginLeft: 'auto', // 親要素内で右寄せ
  [theme.breakpoints.down('md')]: {
    paddingTop: 0,
  },
}));

interface MainProps {
  items: tTableClm2[];
}

const Main = (props: MainProps) => {
  console.log('props.items', props.items);
  return (
    <>
      {props.items.map((item) => {
        return (
          <GridContainer container key={item.key}>
            <LabelGrid size={{ xs: 4, sm: 5, md: 4 }}>
              <Typography variant="h6" component="h4" sx={{ fontWeight: 700 }}>
                {item.label}
              </Typography>
            </LabelGrid>
            <ValueGrid size={{ xs: 10, sm: 7, md: 8 }}>
              <Typography
                variant="body1"
                dangerouslySetInnerHTML={{ __html: item.value }}
              />
            </ValueGrid>
          </GridContainer>
        );
      })}
    </>
  );
};

export default Main;
