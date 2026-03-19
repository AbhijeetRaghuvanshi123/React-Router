import { Link } from "react-router"

function App() {
  return (
    <>
      <h1>Hello from main page</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile Page</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default App
