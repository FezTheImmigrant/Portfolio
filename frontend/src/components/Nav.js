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
        <div className="bg-blk text-white text-xl flex fade-in-no-delay">
          <div className="mt-8 mb-0 mx-auto transform translate-x-4">
            <a className=" border-solid border-2 rounded py-0 px-2 border-white text-black bg-white
                        transition duration-500 hover:bg-black hover:border-black hover:text-white
                        hover:no-underline" href="/">S</a>
          </div>
          <button className="mt-8 mr-8 focus:outline-none" onClick={this.handleButtonClick}>
            <img src={Hamburger} />
          </button>

        </div>
        {this.state.open && (
          <Menu className="fade-in-no-delay-fast" />
        )}

      </React.Fragment>
    );
  }
}



export default Nav;