'use client'

import React from 'react'
// import AddNote from '../components/AddNote'
import Notes from '../components/Notes/Notes'
import { Box, Skeleton, Typography } from '@mui/material'
import { notesQueryKeys } from '@/services/notes'
import { useQuery } from '@tanstack/react-query'
import { TNote } from '../components/AddNote/types'

const NotesLoading = () => (
  <>
    {Array.from({ length: 7 }).map((_v, index) => (
      <Box display="flex" flexDirection="column" marginTop={4} key={index}>
        <Box display="flex" flex={1} gap={4}>
          <Skeleton width="150px" />
          <Skeleton width="30%" />
          <Skeleton width="100%" />
        </Box>

        <Box display="flex" flex={1} gap={4}>
          <Skeleton width="150px" />
          <Skeleton width="30%" />
          <Skeleton width="100%" />
        </Box>

        <Box display="flex" flex={1} gap={4}>
          <Skeleton width="150px" />
          <Skeleton width="30%" />
          <Skeleton width="100%" />
        </Box>
      </Box>
    ))}
  </>
)

function Dashboard() {
  const { data, isLoading } = useQuery(notesQueryKeys.list.key, notesQueryKeys.list.fetcher<TNote>)

  return (
    <div>
      {/* <AddNote /> */}
      <Typography paragraph variant="h6" fontWeight={700}>
        My last notes (JSONPlaceholder)
      </Typography>
      {isLoading ? <NotesLoading /> : <Notes notes={data || []} />}
    </div>
  )
}

export default Dashboard
