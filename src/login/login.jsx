// import React from 'react'
import './Login.css'

const Login = () => {
  return (
<div className="card">

  {/* <!-- LEFT --> */}
  <div className="left">
    <svg className="stars" viewBox="0 0 420 480" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      {/* <!-- tiny dots as stars --> */}
      <circle cx="30"  cy="30"  r="1.2" fill="#fff" opacity=".7"/>
      <circle cx="80"  cy="18"  r=".9"  fill="#fff" opacity=".5"/>
      <circle cx="140" cy="40"  r="1.4" fill="#fff" opacity=".8"/>
      <circle cx="200" cy="15"  r="1"   fill="#fff" opacity=".6"/>
      <circle cx="260" cy="50"  r=".8"  fill="#fff" opacity=".55"/>
      <circle cx="320" cy="22"  r="1.3" fill="#fff" opacity=".75"/>
      <circle cx="380" cy="38"  r=".9"  fill="#fff" opacity=".5"/>
      <circle cx="50"  cy="75"  r="1.1" fill="#fff" opacity=".45"/>
      <circle cx="110" cy="90"  r=".8"  fill="#fff" opacity=".6"/>
      <circle cx="170" cy="70"  r="1.2" fill="#fff" opacity=".7"/>
      <circle cx="240" cy="80"  r=".9"  fill="#fff" opacity=".5"/>
      <circle cx="300" cy="65"  r="1"   fill="#fff" opacity=".65"/>
      <circle cx="360" cy="88"  r=".8"  fill="#fff" opacity=".4"/>
      <circle cx="400" cy="60"  r="1.1" fill="#fff" opacity=".6"/>
      <circle cx="20"  cy="120" r=".8"  fill="#fff" opacity=".35"/>
      <circle cx="90"  cy="105" r="1"   fill="#fff" opacity=".5"/>
      <circle cx="160" cy="130" r=".7"  fill="#fff" opacity=".4"/>

      {/* Invertendo os valores de "values" as estrelas sbem ou descem */}
      {/* <!-- shooting star 1 --> */}
      <line x1="60" y1="55" x2="100" y2="35" stroke="#fff" stroke-width="1.5" stroke-linecap="round" opacity=".8">
        <animate attributeName="opacity" values="0;1;0" dur="3.5s" begin="0s" repeatCount="indefinite"/>
        <animate attributeName="x1" values="100;60" dur="3.5s" begin="0s" repeatCount="indefinite"/>
        <animate attributeName="y1" values="35;55" dur="3.5s" begin="0s" repeatCount="indefinite"/>
        <animate attributeName="x2" values="140;100" dur="3.5s" begin="0s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="15;35" dur="3.5s" begin="0s" repeatCount="indefinite"/>
      </line>

      {/* <!-- shooting star 2 --> */}
      <line x1="250" y1="30" x2="295" y2="12" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity=".7">
        <animate attributeName="opacity" values="0;1;0" dur="4.2s" begin="1.5s" repeatCount="indefinite"/>
        <animate attributeName="x1" values="290;250" dur="4.2s" begin="1.5s" repeatCount="indefinite"/>
        <animate attributeName="y1" values="12;30" dur="4.2s" begin="1.5s" repeatCount="indefinite"/>
        <animate attributeName="x2" values="335;295" dur="4.2s" begin="1.5s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="-6;12" dur="4.2s" begin="1.5s" repeatCount="indefinite"/>
      </line>

      {/* <!-- shooting star 3 --> */}
        <line x1="410" y1="15" x2="370" y2="35" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity=".7">
            <animate attributeName="opacity" values="0;1;0" dur="4.5s" begin="1.2s" repeatCount="indefinite"/>
            <animate attributeName="x1" values="410;370" dur="4.5s" begin="1.2s" repeatCount="indefinite"/>
            <animate attributeName="y1" values="15;35" dur="4.5s" begin="1.2s" repeatCount="indefinite"/>
            <animate attributeName="x2" values="370;330" dur="4.5s" begin="1.2s" repeatCount="indefinite"/>
            <animate attributeName="y2" values="35;55" dur="4.5s" begin="1.2s" repeatCount="indefinite"/>
        </line>

        {/* <!-- shooting star 4 --> */}
        <line x1="390" y1="60" x2="350" y2="80" stroke="#fff" stroke-width="1.4" stroke-linecap="round" opacity=".6">
            <animate attributeName="opacity" values="0;1;0" dur="3.2s" begin="3.7s" repeatCount="indefinite"/>
            <animate attributeName="x1" values="390;350" dur="3.2s" begin="3.7s" repeatCount="indefinite"/>
            <animate attributeName="y1" values="60;80" dur="3.2s" begin="3.7s" repeatCount="indefinite"/>
            <animate attributeName="x2" values="350;310" dur="3.2s" begin="3.7s" repeatCount="indefinite"/>
            <animate attributeName="y2" values="80;100" dur="3.2s" begin="3.7s" repeatCount="indefinite"/>
        </line>
     
    </svg>

    {/* <!-- Cloud layers --> */}
    <div className="clouds">
      <div className="cloud-layer cl4"></div>
      <div className="cloud-layer cl3"></div>
      <div className="cloud-layer cl2"></div>
      <div className="cloud-layer cl1"></div>
    </div>

    <div className="left-title">
      <h1>Welcome Page</h1>
      <p>Sign In To Your Account</p>
    </div>
    <div className="left-url">www.yoursite.com</div>
  </div>

  {/* <!-- RIGHT --> */}
  <div className="right">
    <div className="greeting-sub">Hello !</div>
    <div className="greeting-main">Good Morning</div>
    <div className="form-title"><span>Login</span> Your Account</div>

    <div className="field">
      <label>Email Address</label>
      <input type="email" placeholder="you@example.com"/>
    </div>

    <div className="field">
      <label>Password</label>
      <input type="password" placeholder="••••••••"/>
    </div>

    <div className="row-opt">
      <label className="remember">
        <input type="checkbox"/> Remember
      </label>
      <span className="forgot">Forgot Password ?</span>
    </div>

    <button className="btn-submit">Submit</button>
    <div className="create">Create Account</div>
  </div>

</div>

  )
}

export default Login