import React, { useState } from "react";
import "./style.less";
import api from "../../../api/index";
import validatorInput from "../../../utils/validator";

export default function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function changeHandle(e) {
    if (e.target.name === "username") {
      // console.log(111)
      setUsername(e.target.value);
    }
    if (e.target.name === "password") {
      // console.log(222)
      setPassword(e.target.value);
    }
  }
  function onSubmitHandle(e) {
    e.preventDefault();
    // console.log(password,username);
    const { isValid, errors } = validatorInput({ username, password });
    if (isValid) {
      api.login({ username, password }).then((res) => {
        if (res.data.status === 200) {
          props.onLoginEvent(res.data);
        } else {
          console.log("login error");
        }
      });
    }else{
      console.log(errors);
    }
  }
  return (
    <form action="" onSubmit={onSubmitHandle}>
      <div id="login-container">
        <div className="input-container phone-container">
          <i className="icon-tablet"></i>
          <input
            type="text"
            name="username"
            placeholder="用户名/手机号"
            onChange={changeHandle}
            value={username}
          />
        </div>
        <div className="input-container password-container">
          <i className="icon-key"></i>
          <button>发送验证码</button>
          <input
            type="password"
            name="password"
            placeholder="输入验证码"
            onChange={changeHandle}
            value={password}
          />
        </div>
        <button className="btn-login">登录</button>
      </div>
    </form>
  );
}
