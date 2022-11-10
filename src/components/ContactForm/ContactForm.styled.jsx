import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 350px;
  height: 30px;
  margin-bottom: 20px;
  border-radius: 10px;
  margin-top: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 22px;
  margin-bottom: 5px;
`;

export const FormButton = styled.button`
  width: 160px;
  height: 40px;
  border-radius: 10px;
  max-height: 65px;
  text-transform: uppercase;

  font-size: 16px;

  background-color: rgb(243, 161, 242, 0.5);
`;
