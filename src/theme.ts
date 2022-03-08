/* eslint-disable @typescript-eslint/no-empty-interface */
import {
  ThemeProvider as _ThemeProvider,
  ThemeOptions,
  createTheme as _createTheme,
  useTheme as _useTheme,
} from '@mui/material/styles';

// mui의 style에 대한 인터페이스 재정의 (기본적으로 type 유추가 가능)
declare module '@mui/material/styles' {
  interface CustomTheme {
    mode?: string;
    dark?: {
      backgorund01: string;
      backgorund02: string;
    };
    light?: {
      backgorund01: string;
      backgorund02: string;
    };
    grey?: {
      backgorund01: string;
      backgorund02: string;
    };
  }

  interface CustomPallete {
    save?: string;
  }

  interface Palette extends CustomPallete {}
  interface PaletteOptions extends CustomPallete {}

  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

// mui의 테마객체를 확장하여 사용하는 방식 (type 유추하기 위해서는 type casting 필요)
type Modify<T, R> = Omit<T, keyof R> & R;
export type MakinaVariable = Modify<
  ThemeOptions,
  {
    test: string;
  }
>;
export type CustomTheme = Modify<ThemeOptions, MakinaVariable>;

export const createTheme = (): CustomTheme => {
  const baseTheme = _createTheme({});

  return {
    ...baseTheme,
    test: 'red',
  };
};

export const ThemeProvider = _ThemeProvider;

export const useTheme = _useTheme;
