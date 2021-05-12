import { call } from "@redux-saga/core/effects";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ACTION_TYPES } from "../../redux/actions/actionTypes";
import { ROUTER_NAME } from "../../routers/typeRouter";
import { useForm } from "react-hook-form";

import "./login.css";
export default function Login(props) {
  const { userName } = props;

  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const [isLogin, setLogin] = useState(false);
  const [statusLogin, setStatusLogin] = useState(false);

  console.log("isLogin ::", isLogin);

  // componentDidmount
  useEffect(() => {
    // callApi()
    setLogin(true);
    console.log("isLogin hnnhnhnhnnh", isLogin);
  }, []);

  //componentDidUpdate
  // useEffect(() => {
  //   setStatusLogin(true);
  //   console.log('isLogin Change ::');
  // }, [isLogin]);

  const onLogin = (data) => {
    // setLogin(false)
  };

  return (
    <React.Fragment>
      <div className="login-form">
        <form onSubmit={handleSubmit(onLogin)}>
          <div className="imgcontainer">
            <img src="img_avatar2.png" alt="Avatar" className="avatar" />
          </div>

          <div className="container">
            <label htmlFor="uname">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />

            <button type="submit">Login</button>
            <label>
              <input
                type="checkbox"
                readOnly
                checked="checked"
                name="remember"
              />
              Remember me
            </label>
          </div>

          <div className="container">
            <button type="button" className="cancelbtn">
              Cancel
            </button>
            <span className="psw">
              Forgot <a href="#">password?</a>
            </span>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
