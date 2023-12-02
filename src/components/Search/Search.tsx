'use client'

import { TextField } from '@mui/material'
import React from 'react'

interface ISearchProps {
  startAdornment: React.ReactNode
  placeholder: string
  error?: boolean
  helperText?: string
  className?: string
  value?: string
  onChange: (val: string) => void
}

function Search({ value, onChange, startAdornment, className, placeholder, error, helperText }: ISearchProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <TextField
      className={className}
      InputProps={{
        startAdornment,
      }}
      value={value}
      onChange={handleChange}
      hiddenLabel
      fullWidth
      placeholder={placeholder}
      variant="outlined"
      error={error}
      helperText={helperText}
    />
  )
}

export default Search
