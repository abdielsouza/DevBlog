import React from 'react'
import { Control, Controller } from 'react-hook-form'

import MarkDownInput, { MarkDownInputProps } from '../../atoms/markdown_input'

export interface FormMarkDownInputProps extends MarkDownInputProps {
  control?: Control<any>
  name: string
  defaultValue?: string
  error?: any
  controllerProps?: any
}


const FormMarkDownInput = ({
  controllerProps,
  control,
  name,
  defaultValue,
  error,
  ...rest
}: FormMarkDownInputProps) => {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, value } }) => (
        <MarkDownInput
          {...rest}
          value={value}
          onChanged={onChange}
          isError={!!error}
          errorMessage={error?.message}
        />
      )}
      name={name}
      defaultValue={defaultValue}
      {...controllerProps}
    />
  )
}

export default FormMarkDownInput;