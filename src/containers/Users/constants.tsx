import { TTableHeader } from '@/components/Table/types'
import { TUser } from './types'
import dayjs from 'dayjs'
import { Link, Typography } from '@mui/material'
import NextLink from 'next/link'

const ageOneDate = new Date()
ageOneDate.setFullYear(1995)

const ageTwoDate = new Date()
ageTwoDate.setFullYear(1990)

const ageThree = new Date()
ageThree.setFullYear(1975)

const ageDate = new Date()
ageDate.setFullYear(1980)

const users = [
  {
    name: 'Clóvis da silva neto',
    id: Date.now().toString(),
    age: ageOneDate.toUTCString(),
  },
  {
    name: 'Nevinha da jr',
    id: Date.now().toString(),
    age: ageTwoDate.toUTCString(),
  },
  {
    name: 'Lucas bronks nine',
    id: Date.now().toString(),
    age: ageThree.toUTCString(),
  },
  {
    name: 'Marley aparecida',
    id: Date.now().toString(),
    age: ageTwoDate.toUTCString(),
  },
  {
    name: 'Nuna Franka',
    id: Date.now().toString(),
    age: ageThree.toUTCString(),
  },
  {
    name: 'Amarildo júnior',
    id: Date.now().toString(),
    age: ageDate.toUTCString(),
  },
  {
    name: 'Noronha mariney',
    id: Date.now().toString(),
    age: ageDate.toUTCString(),
  },
  {
    name: 'Júnior mea',
    id: Date.now().toString(),
    age: ageTwoDate.toUTCString(),
  },
]

export const mockData = Array.from({ length: 100 }).map((_v: unknown, index: number) => users[index % users.length])

export const sortOptions = [
  {
    label: 'Age',
    value: 'age',
  },
  {
    label: 'Name',
    value: 'name',
  },
]

const today = new Date()

export const headers: TTableHeader<TUser>[] = [
  {
    label: 'Age',
    key: 'age',
    scope: 'row',
    sortable: true,
    component: 'th',
    sx: {
      width: '150px',
    },
    render: (item: TUser) => <>{dayjs(today.toUTCString()).diff(item.age, 'year')} anos</>,
  },
  {
    label: 'Name',
    sortable: true,
    key: 'name',
    render: (item: TUser) => <Typography fontWeight={700}>{item.name}</Typography>,
  },
  {
    sx: {
      width: '110px',
    },
    label: 'Actions',
    key: 'actions' as keyof TUser,
    render: (item: TUser) => (
      <Link href={`/users/${item.id}`} fontWeight={700} component={NextLink}>
        View more
      </Link>
    ),
  },
]
