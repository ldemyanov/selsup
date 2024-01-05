import styled from '@emotion/styled';

const InputList = styled.ul`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & li {
    list-style-type: none;
  }
  & label {
    display: inline-block;
    margin: 0 10px 0 0;
    width: 100px;
  }
  & input {
    width: 250px;
  }
`;

export default InputList;