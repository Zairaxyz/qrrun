import User from 'src/components/User/User'

export const QUERY = gql`
  query FindUserById($id: String!) {
    user: user(id: $id) {
      id
      gender
      email
      hashedPassword
      salt
      resetToken
      resetTokenExpiresAt
      roles
      dateOfBirth
      firstName
      imageUrl
      lastName
      currentRoad
      currentCheckPoint
      registerTimesTamp
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>User not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ user }) => {
  return <User user={user} />
}
