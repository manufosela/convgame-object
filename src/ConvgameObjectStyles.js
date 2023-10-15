import { css } from 'lit';

export const ConvgameObjectStyles = css`
  :host {
    display: block;
    --default-main-color: #000000;
    --default-main-bgcolor: #ffffff;
    --main-color: var(--default-main-color);
    --main-bgcolor: var(--default-main-bgcolor);
    --main-border: 1px solid var(--main-color);
    --main-border-radius: 5px;
    --main-padding: 5px;
    --main-margin: 5px;
    --main-bgimage: none;
  }

  div {
    color: var(--main-color);
    background-color: var(--main-bgcolor);
    border: var(--main-border);
    border-radius: var(--main-border-radius);
    padding: var(--main-padding);
    margin: var(--main-margin);
    background-image: var(--main-bgimage);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
