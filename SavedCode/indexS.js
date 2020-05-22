// import React from 'react';
// import './App.css';
// import Header from './components/Header'
// import Form from './components/Form'
// import Sales from './components/Sales'
// import axios from 'axios'

// class App extends React.Component {
//   state =
//     {
//       salees: []
//     }

//   loadContent = async () => {

//     console.log(localStorage.getItem('auth-token'));
    
//     // const API_call = await fetch('http://localhost:5000/salee', {
//     //   method: 'GET',
//     //   Headers: { "auth-token": `bearer ${localStorage.getItem('auth-token')}` }
//     // })

//     const API_call = await axios({
//       method: 'get', //you can set what request you want to be
//       url: 'http://localhost:5000/salee',
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('auth-token')}`
//       }
//     })

//     console.log(API_call);
    
//     // const {status} = API_call  
//     // if (status === 401) {
//     //   this.props.history.push('/sign-in')}
//     // const saleesObject = await API_call.json();


//     // this.setState({ salees: saleesObject });
//   }

//   componentWillMount() {
//     this.loadContent();
//   }

//   OnRefresh = () => this.loadContent();

//   render() {
//     return (
//       <div>
//         <Header />
//         <Form refresh={this.OnRefresh} />
//         <Sales salees={this.state.salees} />
//       </div>
//     );
//   }
// }

// export default App;




// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../components/ComponentStyle/Router.css';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import SaleeRoute from './PrivateRoute/SaleeRoute'

// import App from '../App'
// import Login from "../components/Login-Register/Login";
// import SignUp from "../components/Login-Register/Register";

// class Router1 extends React.Component {

//   state = { userName: '' }

//   userAuth = (data) => {
//       this.setState({ userName: data.username})
//   }

//   render() {


//     return (<Router>
//       <div>
//         <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//           <div className="container">
//             <Link className="nav-link" to={"/"}>Home</Link>
//             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//               <ul className="navbar-nav ml-auto">
//                 <li className="nav-item">
//                   <p className="user-name">{this.state.userName}</p>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={"/sign-in"}>Login</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>

//         <div className="auth-wrapper">
//           <div>
//             <Switch>
//               <Route exact path="/" component={App} />
//               <Route exact path="/sign-in" componet={Login}/>
//               <Route exact path="/sign-up" component={SignUp} />
//             </Switch>
//           </div>
//         </div>
//       </div></Router>
//     );
//   }
// }

// export default Router1;