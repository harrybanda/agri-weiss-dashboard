import React from "react";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import logo from "./logo.png";

const Header = () => {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src={logo} width="112" height="28" />
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <AmplifySignOut />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
