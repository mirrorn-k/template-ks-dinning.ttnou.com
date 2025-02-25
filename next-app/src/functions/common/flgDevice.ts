"use client";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

/**
 * モバイル端末の場合はtrue
 * @param param0
 * @returns
 */
export function useIsMobile() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.only("xs"));
}

/**
 * タブレット端末の場合は true
 * @param param0
 * @returns
 */
export function useIsTablet() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.between("sm", "lg"));
}

/**
 * PC端末の場合はtrue
 * @param param0
 * @returns
 */
export function useIsDesktop() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up("lg"));
}

/**
 * タブレット端末以下の場合はtrue
 * @param param0
 * @returns
 */
export function useIsDownTablet() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("lg"));
}

/**
 * タブレット端末以下の場合はtrue
 * @param param0
 * @returns
 */
export function useIsUnderTablet() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("md"));
}

/**
 * タブレット端末以上の場合はtrue
 * @param param0
 * @returns
 */
export function useIsOverTablet() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up("md"));
}
