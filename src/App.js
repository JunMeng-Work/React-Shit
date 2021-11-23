import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import './App.css'
import img1 from "./1.png"
import img2 from "./2.png"
import img3 from "./3.png"
import img4 from "./4.png"
import img5 from "./5.png"
import img6 from "./6.png"
import img7 from "./7.png"

//__________________________________________ SMALL Component
const Header=props=>{
  return(

    <div className="header">

      {/* Header Menu */}
      <div className="hMenu">
        <span className="username">{props.name}</span>
        <LoginBtn
          loggedIn={props.loggedIn}
          loggedInChange={props.loggedInChange}
          name={props.name}
          nameChange={props.nameChange}
          pw={props.pw}
          pwChange={props.pwChange}
        />
      </div>

      {/* Header News */}

      <div className="hNews">
        <ul>
          <li>1. abc</li>
          <li>2. abc</li>
          <li>3. abc</li>
          <li>4. abc</li>
          <li>5. abc</li>
        </ul>
      </div>

  </div>
  )
}

const SideBar=()=>{
  return(
    <div className="sideBar">
      <ul>
        <li>
          <Link to='/mainPage'>Main Page</Link>
        </li>
        <li>
          <Link to='/subPage1'>Sub Page 1</Link>
        </li>
        <li>
          <Link to='/subPage2'>Sub Page 2</Link>
        </li>
      </ul>
    </div>
  )
}

const LoginBtn=props=>{

  const loggedIn = props.loggedIn
  const loggedInChange =()=> props.loggedInChange()
  const nameChange =e=> props.nameChange(e)
  const pwChange =e=> props.pwChange(e)

  const loginStatus = loggedIn?
    <span>登出</span> : 
    <span>登入</span> 
  
  const history = useHistory()
  const handleClick=()=>{
   if(loggedIn){
      loggedInChange(!loggedIn)
      nameChange("")
      pwChange("")
      history.push("/")
    }else if(loggedIn === false){
      history.push("/")
    }
  }
  
  return(
    <>
      <button
        className="btn"
        onClick={handleClick}
      >
        {loginStatus}
      </button>
    </>
  )
}
const LoginBtnPage=props=>{

  const loggedIn = props.loggedIn
  const loggedInChange =()=> props.loggedInChange()
  const name = props.name
  const nameChange =e=> props.nameChange(e)
  const pw = props.pw
  const pwChange =e=> props.pwChange(e)

  const loginStatus = loggedIn?
    <span>登出</span> : 
    <span>登入</span> 
  
  const history = useHistory()
  const handleClick=()=>{
   if(loggedIn){
      loggedInChange(!loggedIn)
      nameChange("")
      pwChange("")
      history.push("/")
    }else if(loggedIn === false){
      loggedInChange(!loggedIn)
      history.push("/mainPage")
      console.log(name,pw,456)
    }
  }
  
  return(
    <>
      <button
        id="loginBtnPage"
        onClick={handleClick}
      >
        {loginStatus}
      </button>
    </>
  )
}
const LoginForm=props=>{
  
  const name = props.name
  const nameChange =e=> props.nameChange(e.target.value)
  const pw = props.pw
  const pwChange =e=> props.pwChange(e.target.value)

  return(
    <div className="loginInputBox">
      <input
        className="inputBox"
        type="text"
        placeholder="用户"
        value={name}
        onChange={(e)=>nameChange(e)}
      />

      <input
        className="inputBox"
        type="password"
        placeholder="密码"
        value={pw}
        onChange={(e)=>{pwChange(e)}}
      />
    </div>
  )
}
//______________________________________________________________________ Content

const MainPageContent=()=>{
  return(
    <div className="container">
      
      <div className="mainFunc">
        <div className="func">
          <a href="#1" target="_self">
            <img src={img1} alt="Apply Leave"/>
            <span className="applyLeave">Apply Leave</span>
          </a>
        </div>
        <div className="func">
          <a href="#2" target="_self">
            <img src={img2} alt="Cancel Leave"/>
            <span className="cancelLeave">Cancel Leave</span>
          </a>
        </div>
        <div className="func">
          <a href="#3" target="_self">
            <img src={img3} alt="My Calendar"/>
            <span className="myCalendar">My Calendar</span>
          </a>
        </div>
      </div>

      <div className="part1">
        <div className="p1content p1c1">
          <div className="circle">
            14.0 Days
          </div>
          <div className="leavesName">
            Total Annual Leaves
          </div>
        </div>
        <div className="p1content p1c2">
          <div className="circle">
            0.0 Days
          </div>
          <div className="leavesName">
            Annual Leaves Taken
          </div>
        </div>
        <div className="p1content p1c3">
          <div className="circle">
            14.0 Days
          </div>
          <div className="leavesName">
            Annual Leaves Balance
          </div>
        </div>
      </div>

      <div className="part2">
        <div className="part2Head">
          <img src={img4} alt="attendance logo" className="img4"/>
          <div className="attendance">MY ATTENDANCE</div>
          <img src={img7} alt="fake button"className="img7"/>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Months</th>
                <th>Week Days</th>
                <th>Week Ends</th>
                <th>Holidays</th>
                <th>Presence</th>
                <th>Absence</th>
                <th>Overtime (In Hrs)</th>
                <th>Permission (In Hrs)</th>
                <th>View</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Jan</td>
                <td>23</td>
                <td>8</td>
                <td>4</td>
                <td>3.5</td>
                <td>0.5</td>
                <td>0</td>
                <td>0</td>
                <td><img src={img5} alt="eyes"/></td>
              </tr>
            </tbody>
            
          </table>
        </div>
      </div>


    </div>
  )
}

//_______________________________________________________________________ Pages
const LoginPage=props=>{
  return(
    <>
      <LoginForm
        name={props.name}
        nameChange={props.nameChange}
        pw={props.pw}
        pwChange={props.pwChange}
      />
      <LoginBtnPage
        loggedIn={props.loggedIn}
        loggedInChange={props.loggedInChange}
        name={props.name}
        nameChange={props.nameChange}
        pw={props.pw}
        pwChange={props.pwChange}
      />
    </>
  )
}

const MainPage=props=>{
  return(
    <>
      <Header
        name={props.name}
        nameChange={props.nameChange}
        pw={props.pw}
        pwChange={props.pwChange}
        loggedIn={props.loggedIn}
        loggedInChange={props.loggedInChange}
      />
      <SideBar/>
      <MainPageContent/>
    </>
  )
}

const SubPage1=props=>{
  return(
    <>
    <Header
        name={props.name}
        nameChange={props.nameChange}
        pw={props.pw}
        pwChange={props.pwChange}
        loggedIn={props.loggedIn}
        loggedInChange={props.loggedInChange}
      />
      <SideBar/>
      <div className="subPage1">PAGE 1</div>
    </>
  )
}

const SubPage2=props=>{
  return(
    <>
    <Header
        name={props.name}
        nameChange={props.nameChange}
        pw={props.pw}
        pwChange={props.pwChange}
        loggedIn={props.loggedIn}
        loggedInChange={props.loggedInChange}
      />
      <SideBar/>
      <div className="subPage2">PAGE 2</div>
    </>
  )
}
//_________________________________________________________________________ App
const App=()=>{

  //Hooks
  const [name,setName] = useState("")
  const [pw,setPw] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)
  
  //Function
  const onNameChange=name=> setName(name)
  const onPwChange=pw=> setPw(pw)
  const onLoggedInChange=()=> setLoggedIn(!loggedIn)

  return(
    <>
      <Router>
        <Switch>
        <Route 
            exact path="/" 
            render={props=> <LoginPage {...props}
              name={name}
              nameChange={onNameChange}
              pw={pw}
              pwChange={onPwChange}
              loggedIn={loggedIn}
              loggedInChange={onLoggedInChange}
            />}
          />
          <Route 
            exact path="/mainPage" 
            render={props=> <MainPage {...props}
              name={name}
              nameChange={onNameChange}
              pw={pw}
              pwChange={onPwChange}
              loggedIn={loggedIn}
              loggedInChange={onLoggedInChange}
            />}
          />
          <Route 
            exact path="/subPage1" 
            render={props=> <SubPage1 {...props}
              name={name}
              nameChange={onNameChange}
              pw={pw}
              pwChange={onPwChange}
              loggedIn={loggedIn}
              loggedInChange={onLoggedInChange}
            />}
           />
           <Route 
            exact path="/subPage2" 
            render={props=> <SubPage2 {...props}
              name={name}
              nameChange={onNameChange}
              pw={pw}
              pwChange={onPwChange}
              loggedIn={loggedIn}
              loggedInChange={onLoggedInChange}
            />}
           />
        </Switch>

      </Router>
    </>
    
  )
}

export default App;