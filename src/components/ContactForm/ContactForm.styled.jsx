import styled from "@emotion/styled";

export const ContactFormCss = styled.form`
  display: flex;
  row-gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 250px;
  padding: 20px;

  font-size: 14px;
  font-weight: 600;
  line-height: 1;

  border-radius: 5px;

  box-shadow: 1px 1px 1px 1px black;

  transition: box-shadow 250ms linear;

  &:hover,
  &:focus {
    box-shadow: 2px 2px 2px 2px black;
  }
`;

export const ContactLabelCss = styled.label`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    max-width: 300px;
`