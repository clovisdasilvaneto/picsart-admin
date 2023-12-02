import { FormControl, InputLabel, MenuItem, Select as MuiSelect, SelectChangeEvent } from '@mui/material'
import React from 'react'

interface ISelectProps<T> {
  label: string
  id: string
  options: {
    label: string
    value: string
  }[]
  value?: string
  onChange: (key: keyof T) => void
}

function Select<T>({ label, value, onChange, id, options }: ISelectProps<T>) {
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    onChange(event.target.value as keyof T)
  }

  return (
    <FormControl fullWidth>
      <InputLabel id={id}>{label}</InputLabel>

      <MuiSelect value={value} onChange={handleSelectChange} labelId={id} id="demo-simple-select" label={label}>
        <MenuItem value={''}>{label}</MenuItem>
        {options.map(({ label, value }) => (
          <MenuItem key={`${label}-${value}`} value={value}>
            {label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  )
}

export default Select
