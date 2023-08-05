import UserProfile from './components/UserProfile'

import './App.css'

const userDetails = [
  {
    no: 1,
    url: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'venky',
    role: 'student',
  },
  {
    no: 2,
    url: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'venky',
    role: 'student',
  },
  {
    no: 3,
    url: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'venky',
    role: 'student',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">users list</h1>
    <ul>
      {userDetails.map(each => (
        <UserProfile user={each} key={each.no} />
      ))}
    </ul>
  </div>
) // how it is possible

export default App
