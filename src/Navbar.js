import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/chat">Chat</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    // <li className={isActive ? "active" : ""}>
    <li>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}