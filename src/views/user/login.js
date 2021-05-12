
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import "./login.css";
import { ACTION_TYPES } from "../../redux/actions/actionTypes";
export default function Login(props) {
  const data = useSelector(state => state);

  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLogin, setLogin] = useState(false);
  const [statusLogin, setStatusLogin] = useState(false);
  const dispatch = useDispatch();
  const onLogin = (data) => {
    dispatch({ type: ACTION_TYPES.INIT, data })
  }
  return (
    <React.Fragment>
      <div className="login-form">
        <form onSubmit={handleSubmit(onLogin)}>
          <div className="container">
            <label htmlFor="uname">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              {...register("username", { required: true })}
            />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              {...register("password", { required: true })}
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
