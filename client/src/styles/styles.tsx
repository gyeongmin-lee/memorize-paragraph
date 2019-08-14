import { css } from "styled-components";

const fontPrimary = css`
  font-family: "Montserrat";
`;

const fontSecondary = css`
  font-family: "Open Sans";
`;

const wordTextStyle = css`
  ${fontPrimary};
  font-size: ${props => props.theme.fontSize.default};
  line-height: ${props => props.theme.lineHeight.default};
`;

export { fontPrimary, fontSecondary, wordTextStyle };
