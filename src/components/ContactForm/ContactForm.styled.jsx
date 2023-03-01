import styled from 'styled-components';
import {
  ErrorMessage as YupErrorMessage,
  Field as FieldFormik,
  Form as FormFormik,
} from 'formik';

export const Form = styled(FormFormik)`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled(YupErrorMessage)`
  font-size: 11px;
  color: red;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  height: 60px;
  font-size: 14px;
  font-weight: 600;
`;

export const Field = styled(FieldFormik)`
  display: block;
`;

export const Button = styled.button`
  /* margin-top: 8px; */
`;
