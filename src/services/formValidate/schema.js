import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
export const schema = yupResolver(
  yup
    .object({
      name: yup.string().required(),
      text: yup.string().required(),
      element: yup
        .string()
        .required()
        .oneOf(['fire', 'water', 'wind', 'earth']),
    })
    .required()
);
