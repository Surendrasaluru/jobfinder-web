import React, { useState } from "react";
import { AUTH_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        AUTH_URL + "login",
        { email, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      navigate("/jobfeed");
      console.log(res);
      console.log("login success");
    } catch (err) {
      setError(err.message);
      //console.log(err.message);
    }
  };
  return (
    <div className="flex gap-64 ">
      <div className="card w-[400px] ml-8 mt-20 h-[490px] bg-white flex align-middle items-center shadow-xl  ">
        <img
          src="https://static.naukimg.com/s/7/104/assets/images/white-boy.a0d2814a.png"
          alt="Shoes"
          className="rounded-lg w-48 align-middle"
        />
        <div className="py-8 my-2 px-4">
          <h2 className="font-bold text-base m-auto my-4">
            On registering, You can
          </h2>
          <p className="font-semibold text-start text-lg my-3">
            ✅ Search jobs based on your skill set.
          </p>
          <p className="font-semibold text-start text-lg my-3">
            ✅ Post jobs Based On Your Requirement.
          </p>
          <p className="font-semibold text-start text-lg">
            ✅ Make Your Job search easy in this competetive world.
          </p>
        </div>
      </div>

      <div className="w-[700px] ml-8 mt-20 flex flex-col h-[590px]  align-left items-center shadow-xl ">
        <h1 className="font-extrabold font-serif text-3xl">Login Here !</h1>
        <label className="form-control w-full max-w-xs my-2">
          <div className="label shadow-2xl font-bold  mx-auto">
            <span className="label-text items-start text-black">EMAIL ID</span>
          </div>
          <input
            type="text"
            value={email}
            className="input input-bordered w-full max-w-80"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label className="form-control w-full max-w-xs my-2">
          <div className="label shadow-2xl font-bold mx-auto">
            <span className="label-text">PASSWORD</span>
          </div>
          <input
            type="text"
            value={password}
            className="input input-bordered w-full max-w-80"
            onChange={(e) => {
              setPassword(e.target.value);
              //console.log(password);
            }}
          />
        </label>
        <button className="btn btn-success" onClick={handleLogin}>
          LOGIN
        </button>
        <p className="text-red-600 text-md"> * {error}</p>
      </div>
    </div>
  );
};

export default LoginPage;
