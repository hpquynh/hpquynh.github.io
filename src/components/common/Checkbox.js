// @flow
import React from 'react';
import styled from 'styled-components';
import {
  Field,
} from 'formik';
const CheckboxInput = styled.input`
  margin-right: 5px;
`;
const CustomCheckbox = styled.label`
  margin-right: 10px;
`;
export const Checkbox = props => (
  <Field name={props.name}>
    {({ field, form }) => (
      <CustomCheckbox>
        <CheckboxInput
          type="checkbox"
          {...props}
          checked={field.value.includes(props.value)}
          onChange={() => {
            if (field.value.includes(props.value)) {
              const nextValue = field.value.filter(
                value => value !== props.value,
              );
              form.setFieldValue(props.name, nextValue);
            } else {
              const nextValue = field.value.concat(props.value);
              form.setFieldValue(props.name, nextValue);
            }
          }}
        />
        {props.value}
      </CustomCheckbox>
    )}
  </Field>
);
