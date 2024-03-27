import React from "react";
import "./index.css";
import contactList from "./Components/Contacts";
import nav from "./Components/NavBar";
import postList from "./Components/Posts";
import userProfile from "./Components/UserProfile";

function App() {
  return (
    <div>
      {nav}
      {userProfile}
      {postList}
      {contactList}
    </div>
  )
}

export default App;
