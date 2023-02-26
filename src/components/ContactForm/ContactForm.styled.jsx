import styled from 'styled-components';
import { ErrorMessage as YupErrorMessage, Field as FieldFormik } from 'formik';

export const ErrorMessage = styled(YupErrorMessage)`
  font-size: 11px;
  color: red;
`;

export const FormField = styled.label`
  display: block;
  height: 70px;
  font-size: 18px;
  font-weight: 700;
`;

export const Field = styled(FieldFormik)`
  display: block;
`;

export const Button = styled.button`
  margin-top: 8px;
`;
