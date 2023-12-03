'use client'

import { Button, TextField } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import { useForm } from 'react-hook-form'
import { TNoteForm } from './types'
import { addNoteMutation } from '@/services/notes'
import { useMutation } from '@tanstack/react-query'

function AddNote() {
  const { handleSubmit, register, formState, reset } = useForm<TNoteForm>()
  const { mutate, isLoading } = useMutation(addNoteMutation, {
    onSuccess: () => reset(),
  })

  const onSubmit = (data: TNoteForm) => {
    mutate(data)
  }

  const errors = formState.errors

  return (
    <Grid onSubmit={handleSubmit(onSubmit)} component="form" container spacing={2}>
      <Grid xs={8} sm={10}>
        <TextField
          fullWidth
          placeholder="Add a new note here"
          error={Boolean(errors.note?.message)}
          helperText={errors.note?.message}
          {...register('note', { required: 'This field is required' })}
        />
      </Grid>

      <Grid xs={3} sm={2}>
        <Button disabled={isLoading} type="submit" fullWidth size="large" variant="contained">
          {isLoading ? 'Enviando...' : 'Add'}
        </Button>
      </Grid>
    </Grid>
  )
}

export default AddNote
