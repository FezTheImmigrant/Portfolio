import React, { Component } from "react";  
import Hamburger from "../resources/ham.svg";
import Menu from "./Menu";

export class Nav extends Component {  

  state = {
    open: false,
  };

  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="text-white text-xl flex justify-between w-full fade-in-no-delay fixed z-40">
          <div className="mt-8 mb-0">
            <a className="ml-5 border-solid border-2 rounded py-0 px-2 border-white text-black bg-white
                        transition duration-500 hover:bg-black hover:border-black hover:text-white
                        hover:no-underline" href="/">S</a>
          </div>
          <button className="bound:mr-5 mr-10 mt-8 focus:outline-none" onClick={this.handleButtonClick}>
            <img src={Hamburger} alt="" />
          </button>

        </div>
        <Menu open={this.state.open} />
      </React.Fragment>
    );
  }
}



export default Nav;