import { Outlet } from "react-router";
import NavBar from "./NavBar";
import { useState } from "react";

export default function Layout() {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <NavBar />
      <main>
        <Outlet context={[cart, setCart]} />
      </main>
    </div>
  );
}
