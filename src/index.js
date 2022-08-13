import React from "react"
import ReactDOM from 'react-dom/client';

// import TodoContainer from "./classBased/components/TodoContainer";
// import "./classBased/App.css";

import TodoContainer from "./functionBased/components/TodoContainer"
import "./functionBased/App.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
  <TodoContainer />
  </React.StrictMode>, 
)


