import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const JobFeed = () => {
  const user = useSelector((store) => store.user);
  const first = user.firstName;
  const last = user.lastName;
  const url =
    "https://eu.ui-avatars.com/api/?name=" + first + "+" + last + "&size=350";
  //console.log(url);

  return (
    <div>
      <div className="navbar bg-blue-100">
        <div className="flex-1 justify-between">
          <Link className="btn btn-ghost text-xl">daisyUI</Link>
          <h1 className="uppercase font-mono text-xl">
            welcome {user.firstName + "  "}
            {user.lastName}
          </h1>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            ></div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            ></div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-16 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={url}

                  //src=`https://eu.ui-avatars.com/api/?name=${first}+${last}&size=350`
                  //src=`https://eu.ui-avatars.com/api/?name=" + {user.firstName}"+"{user.lastName} +"&size=350
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link className="justify-between">Profile</Link>
              </li>

              <li>
                <Link>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFeed;
