// import React, { component } from "react";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import SGHeader from "./SetGoal.jsx";
import Signup from "./Signup";
import Wrapper from "./wrapper";
import Information from "./Information";

function Join() {
  return (
    <div>
      <Wrapper>
        <Signup />
        <Information />
      </Wrapper>
    </div>
  );
}

export default Join;
