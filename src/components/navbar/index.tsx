import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="text-center mt-2 mb-5 md:mx-auto md:w-[30rem]">
      <ul className="flex flex-row justify-around">
        <li className="hover:underline hover:font-bold">
          <Link to={'/'}>Home</Link>
        </li>
        <li className="hover:underline hover:font-bold">
          <Link to={'/projects'}>Projects</Link>
        </li>
        <li className="hover:underline hover:font-bold">
          <Link to={'/profile'}>Profile</Link>
        </li>
      </ul>
    </nav>
  )
}