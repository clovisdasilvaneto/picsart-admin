import React from 'react'
import { MenuItem, MenuWrapper } from './styled'
import { Typography } from '@mui/material'
import Link from 'next/link'
import { Layers, Person } from '@mui/icons-material'
import { usePathname } from 'next/navigation'
import MenuLinkItem from './MenuLink'

export const links = [
  {
    label: 'Dashboard',
    url: '/dashboard',
    Icon: Layers,
  },
  {
    label: 'Users',
    url: '/users',
    Icon: Person,
  },
]

function Menu() {
  const pathname = usePathname()

  return (
    <MenuWrapper>
      <MenuItem as="li">
        <Typography variant="h6" fontWeight={600} component="h3">
          Picsart Admin
        </Typography>
      </MenuItem>

      {links.map(({ url, label, Icon }, index) => (
        <MenuItem
          $active={url === pathname || (url === '/control-panel' && pathname === '/')}
          as="li"
          key={`${url}-${index}`}
        >
          <Link href={url}>
            <MenuLinkItem label={label} Icon={Icon} />
          </Link>
        </MenuItem>
      ))}
    </MenuWrapper>
  )
}

export default Menu
