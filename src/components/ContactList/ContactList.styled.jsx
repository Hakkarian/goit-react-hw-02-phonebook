import styled from "@emotion/styled";


export const ContactUlCss = styled.ul`
    display: inline-flex;
    gap: 30px;
    flex-wrap: wrap;
`

export const ContactItemCss = styled.li`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  
  min-width: calc((100% - 4 * 15px) / 4);
  height: 60px;
  padding: 10px;

  background-color: #e5e5e5;

  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px #303030;

  transition: background-color 250ms linear, box-shadow 250ms linear;

  &:hover,
  &:focus {
    background-color: #949494;
    box-shadow: 3px 3px 3px 3px #303030;
  }
`;