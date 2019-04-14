import React from "react";
import "./Header.scss";
const Header = ({ about }) => {
  return (
    <header>
      <div className="headImg" />
      <div className="textbox">
        <h3>
          {" "}
          <span className="font-italic">Execute</span> is a unique talent
          representation agency
        </h3>
        <h3>
          <span className="font-italic">
            Deeply rooted in the creative community
          </span>{" "}
          , we hold our values dearly.
        </h3>
        <h6 className="font-italic small-text">
          Inclusiveness, diversity, purpose and authenticity are beliefs that
          drive us to go beyond mere appearances. Based in California, Execute
          represents inspiring people.
        </h6>
      </div>
    </header>
  );
};

export default Header;
