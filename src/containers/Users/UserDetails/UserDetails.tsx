'use client'

import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import dayjs from 'dayjs'

import { TUser } from '../types'
import UserDetailsContainer, { UserDetailsDivider, UserDetailsImage } from './styled'

interface IUserDetailsProps {
  user: TUser
}

const today = new Date()

function UserDetails({ user }: IUserDetailsProps) {
  return (
    <>
      <Box display="flex" alignItems="center" gap={2} marginBottom={2}>
        <UserDetailsImage src={`https://i.pravatar.cc/150?u=${user.id}`} width={58} height={58} alt={user.name} />{' '}
        <Typography fontWeight={600} component="h1" variant="h5">
          {user.name}
        </Typography>
      </Box>

      <Divider />

      <UserDetailsContainer>
        <UserDetailsDivider>
          <Typography component="h3" color="gray" fontWeight={700}>
            Name
          </Typography>
          <Typography variant="body2">{user.name}</Typography>
        </UserDetailsDivider>

        <UserDetailsDivider>
          <Typography component="h3" color="gray" fontWeight={700}>
            Age
          </Typography>
          <Typography variant="body2">{dayjs(today).diff(user.age, 'year')} anos</Typography>
        </UserDetailsDivider>

        <UserDetailsDivider>
          <Typography component="h3" color="gray" fontWeight={700}>
            Address
          </Typography>
          <Typography variant="body2">{user.address}</Typography>
        </UserDetailsDivider>
      </UserDetailsContainer>
    </>
  )
}

export default UserDetails
