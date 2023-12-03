import styled from 'styled-components'

const UserDetailsContainer = styled.article`
  h3 {
    margin-bottom: 0.3rem;
  }
`

export const UserDetailsImage = styled.img`
  border-radius: 16px;
  object-fit: cover;
`

export const UserDetailsDivider = styled.div`
  &:first-of-type {
    margin-top: 1rem;
  }

  margin-top: 2rem;
`

export default UserDetailsContainer
