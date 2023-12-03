import React, { useState } from 'react'
import { MenuItem, MenuThemeBox, MenuWrapper, MobileMenuIcon } from './styled'
import { Typography, IconButton } from '@mui/material'
import Link from 'next/link'
import { Layers, Person } from '@mui/icons-material'
import { usePathname } from 'next/navigation'
import MenuLinkItem from './MenuLink'

import { Brightness4, Brightness7 } from '@mui/icons-material'
import { useTheme } from 'styled-components'
import { EThemeVariants } from '@/theme'
import { themeModeContext } from '@/providers/Theme/provider'
import MenuIcon from '@mui/icons-material/Menu'

export const links = [
  {
    label: 'Dashboard',
    url: '/',
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
  const theme = useTheme()
  const themeMode = React.useContext(themeModeContext)
  const [isOppened, setOppened] = useState(false)

  const toggleMobileMenu = () => {
    setOppened((prev) => !prev)
  }

  return (
    <>
      <MobileMenuIcon onClick={toggleMobileMenu}>
        <MenuIcon fontSize="large" />
      </MobileMenuIcon>

      <MenuWrapper isOppened={isOppened}>
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

        <MenuThemeBox onClick={themeMode.toggleThemeMode}>
          {theme.palette.mode} mode
          <IconButton color="inherit">
            {theme.palette.mode === EThemeVariants.DARK ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </MenuThemeBox>
      </MenuWrapper>
    </>
  )
}

export default Menu
