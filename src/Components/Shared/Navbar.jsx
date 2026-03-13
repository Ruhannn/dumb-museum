import { Menu } from "lucide-react";
import { Link } from "react-router";

const Links = (
  <>
    <Link to={"/"}>Home</Link>
    <Link to={"/"}>User Collection</Link>
    <Link to={"/"}>Submit Invention</Link>
  </>
);

export default function Navbar() {
  return (
    <div className="navbar shadow-sm px-6">
      <h1 className="md:text-2xl text-xl font-bold navbar-start font-newsreader">
        Dumb <span className="italic text-primary ml-1"> Museum</span>
      </h1>

      <ul className="text-lg navbar-center space-x-2.5 cursor-pointer [&_li]:hover:underline hidden lg:flex">
        {Links}
      </ul>

      <div className="navbar-end">
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
              <a className="justify-between">
                My Votes
                <span className="badge">New</span>
              </a>
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
