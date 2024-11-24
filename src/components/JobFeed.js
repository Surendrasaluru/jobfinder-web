import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AUTH_URL, JOB_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";
import { addFeed } from "../utils/feedSlice";
import JobBox from "./JobBox";

const JobFeed = () => {
  const user = useSelector((store) => store.user);
  const first = user.firstName;
  const last = user.lastName;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const url =
    "https://eu.ui-avatars.com/api/?name=" + first + "+" + last + "&size=350";
  //console.log(url);
  const handleLogout = async () => {
    try {
      await axios.post(AUTH_URL + "/logout", {}, { withCredentials: true });
      await dispatch(removeUser());
      navigate("/login");
      return;
    } catch (err) {
      console.log(err.message);
    }
  };
  const feed = useSelector((store) => store.feed);

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(JOB_URL + "/alljobs", {
        withCredentials: true,
      });
      console.log(res.data);
      await dispatch(addFeed(res.data));
    } catch (err) {
      console.log(err.messge);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed) return;
  if (feed.length === 0) return <h1>NO JOBS FOUND</h1>;

  return (
    <div>
      <div>
        {user && (
          <div className="navbar bg-blue-100">
            <div className="flex-1 justify-between">
              <Link className="btn btn-ghost text-xl">daisyUI</Link>
              <h1 className="uppercase font-mono text-xl">
                welcome {user && user.firstName + "  "}
                {user && user.lastName} 😊
              </h1>
              <button className="btn btn-error" onClick={handleLogout}>
                LOG OUT
              </button>
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
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      {feed &&
        feed.map((eachjob) => <JobBox data={eachjob} key={eachjob._id} />)}
    </div>
  );
};

export default JobFeed;
