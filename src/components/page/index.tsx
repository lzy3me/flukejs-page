import { Outlet } from "react-router-dom";
import Navbar from "../navbar";

export default function Page() {
  return (
    <div>
      <Navbar />
      
      <Outlet />
    </div>
  )
}