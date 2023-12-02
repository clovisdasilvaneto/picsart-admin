import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'

import { Search as SearchIcon } from '@mui/icons-material'
import Select from '../Select'
import Search from '../Search'
import { sortOptions } from '@/containers/Users/constants'
import { InputAdornment } from '@mui/material'

interface ITopbarProps<T> {
  onSortBy: (val: keyof T) => void
  onSearch: (val: string) => void
  searchValue?: string
  sortByValue: string
}

function Topbar<T>({ onSortBy, onSearch, searchValue, sortByValue }: ITopbarProps<T>) {
  return (
    <Grid container spacing={2}>
      <Grid xs={4} sm={2}>
        <Select<T> value={sortByValue} onChange={onSortBy} label="Sort by" id="sort-by" options={sortOptions} />
      </Grid>

      <Grid xs={8} sm={10}>
        <Search
          onChange={onSearch}
          value={searchValue}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          placeholder="Search for an user name"
        />
      </Grid>
    </Grid>
  )
}

export default Topbar
