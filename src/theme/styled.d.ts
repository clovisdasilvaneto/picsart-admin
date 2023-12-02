import "styled-components";
import { Theme as MuiTheme } from "@mui/system";

type ExtendedMuiTypography = {
  fontFamily: string;
  h1: {
    fontWeight: number;
  };
  h2: {
    fontWeight: number;
  };
  h3: {
    fontWeight: number;
  };
  h4: {
    fontWeight: number;
  };
  h5: {
    fontWeight: number;
  };
  h6: {
    fontWeight: number;
  };
};

export interface AppTheme extends MuiTheme {
  typography: ExtendedMuiTypography;
}

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}
