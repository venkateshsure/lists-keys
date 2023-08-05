import './index.css'

const UserProfile = props => {
  const {user, key} = props
  console.log(key, user)
  const {url, name, role} = user

  return (
    <li className="user-card-container">
      <img src={url} alt="loading" className="avatar" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
    </li>
  )
}

export default UserProfile
