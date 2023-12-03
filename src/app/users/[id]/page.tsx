import UserDetails from '@/containers/Users/UserDetails'
import { mockUserData } from '@/containers/Users/constants'
import { redirect } from 'next/navigation'

interface IUserDetailsPageProps {
  params: {
    id: number
  }
}

function UserDetailsPage({ params: { id } }: IUserDetailsPageProps) {
  const user = mockUserData[id]

  if (!user) return redirect('/users')

  return (
    <div>
      <UserDetails user={user} />
    </div>
  )
}

export default UserDetailsPage
