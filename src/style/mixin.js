import { css } from "styled-components";

export const flexCenter = (
  flex = "flex",
  justify = "center",
  align = "center"
) => css`
  display: ${flex};
  justify-content: ${justify};
  align-items: ${align};
`;

export const flexAlign = (flex = "flex", align = "center") => css`
  display: ${flex};
  align-items: ${align};
`;

export const heightAndWidth = (height = "100%", width = "100%") => css`
  height: ${height};
  width: ${width};
`;
