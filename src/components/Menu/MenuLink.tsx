import { Typography } from '@mui/material'

interface IMenuLinkProps {
  Icon: React.FC
  label: string
}

function MenuLink({ Icon, label }: IMenuLinkProps) {
  return (
    <>
      <Icon />
      <Typography component="span">{label}</Typography>
    </>
  )
}

export default MenuLink
