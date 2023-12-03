'use client'
import { ArrowBack } from '@mui/icons-material'
import { Link } from '@mui/material'
import { useParams } from 'next/navigation'
import React from 'react'
import NextLink from 'next/link'

function Template({ children }: { children: React.ReactNode }) {
  const params = useParams()

  return (
    <div>
      {params.id && (
        <Link component={NextLink} href="/users" display="flex" variant="body2" paragraph fontWeight={500}>
          <ArrowBack fontSize="small" /> Go back
        </Link>
      )}
      {children}
    </div>
  )
}

export default Template
