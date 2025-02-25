"use client";
import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const Main = styled(Button)(() => ({
  borderRadius: 5,
}));

/**
 * 円形ボタン
 */
export const CircularButton = styled(Button)(({}) => ({
  borderRadius: "50%",
  width: 50,
  height: 50,
  minWidth: 50,
  padding: 0,
}));
