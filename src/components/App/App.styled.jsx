const { default: styled } = require("@emotion/styled");


export const Container = styled.div`
    padding: 0 20px;
    margin: 0 auto;
`;
export const ContactFlexCss = styled.div`
    display: flex;
    row-gap: 20px;
    flex-direction: column;
`;

export const ButtonCss = styled.button`
  display: inline-block;
  max-width: 150px;
  padding: 10px;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

    font-size: 14px;
    font-weight: 600;
    line-height: 1;

  background-color: #303030;
  color: yellow;

  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px #171717;

  transition: color 250ms linear, background-color 250ms linear,
    box-shadow 250ms linear;

  &:hover,
  &:focus {
    background-color: yellow;
    color: #303030;
    box-shadow: 2px 2px 1px 1px #171717;
  }
`;