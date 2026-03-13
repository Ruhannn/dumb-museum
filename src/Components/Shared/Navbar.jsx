import { Menu, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Links = (
  <>
    <Link to={"/"}>Home</Link>
    <Link to={"/"}>Collection</Link>
    <Link to={"/"}>Submit</Link>
  </>
);

export default function Navbar() {
  const [theme, setTheme] = useState("caramellatte");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "caramellatte";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dracula" ? "caramellatte" : "dracula";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <div className="navbar shadow-sm px-6">
      <h1 className="md:text-2xl text-xl font-bold navbar-start font-newsreader">
        Dumb <span className="italic text-primary ml-1"> Museum</span>
      </h1>

      <ul className="text-lg navbar-center space-x-2.5 cursor-pointer [&_li]:hover:underline hidden lg:flex uppercase font-bold">
        {Links}
      </ul>

      <div className="navbar-end">
        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-circle mr-2"
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          {theme === "dracula" ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} className="avatar cursor-pointer">
            <div className="w-10 rounded-md">
              <img
                className="object-top"
                alt="User"
                src="https://ucarecdn.com/22571163-5ede-4931-92dd-723a34404fc2/download.png"
              />
            </div>
          </div>
          <ul
            tabIndex={-1}
            className="menu dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/dashboard"} className="justify-between">
                Dashboard
                <span className="badge">New</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="dropdown dropdown-end block lg:hidden ml-1">
          <Menu tabIndex={0} className="btn btn-ghost btn-square size-6" />
          <ul
            tabIndex={-1}
            className="menu dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
      </div>
    </div>
  );
}
