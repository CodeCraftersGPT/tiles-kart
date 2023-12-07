import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import styles.css from components/styles/styles.css
// import './components/styles/styles.css';
import reportWebVitals from './reportWebVitals';
import { Login } from './components/styles/login';
//import the registration component
import Registration from './components/styles/registration';
// import the theme component

//  import ThemeComponent from './components/PropertyDrilling/ThemeComponent';
// import the ThemeContext
 import ThemeContext from './components/useContext/ThemeContext';
 // import the themedcomponent
  import ThemedComponent from './components/useContext/ThemedComponent';
import TestComponent from './components/useContext/TestComponent';
import MemoCounter from './components/MemoCounter';
import ParentComonent from './components/useCallBackDemo/ComponentCommunicationChildToParent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParentComonent/>
    {/* <ComponentCommunicationWithCallBack/> */}
    {/* <MemoCounter/> */}

    {/* <ThemeContext.Provider value={{theme: 'light',loggedInuser:'sushma'}}>
      <ThemedComponent  />
      <TestComponent/>

      </ThemeContext.Provider> */}


    {/* <ThemeComponent theme={{theme: 'dark'}}  loggedInUser='sushma' /> */}

    {/* <Registration/> */}
    
    {/* <Login/> */}
{/* 
    <NameCounter/> */}

    {/* <PostsAxios/> */}

    {/* <Posts/> */}


    {/* <SimpleUseEffect/> */}
    
    {/* <Name college="SJMIT"/> */}

    {/* <CounterClass/>  */}

{/* <Books/>   */}
{/* <Login/>   */}

  {/* <Counter/>   */}

    {/* <Order/> */}
    {/* <Greet firstName="Karthik" lastName="ReactJS"/>
    <Greet firstName="Pooja" lastName="Javascript"/>
    <Greet firstName ="Mohammed" lastName="Angular"/>
    <Greet firstName="Chaitanya" lastName="Nodejs"/>
    <Welcome firstName="Kumar" lastName="ClassComponent "/> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
