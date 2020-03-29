import React, { Component } from "react";  

export class Nav extends Component {  
  render() {
    return (
      <div className="bg-black text-white text-xl flex">
        <div className="mt-8 mb-0 mx-auto transform translate-x-4">
          <a className=" border-solid border-2 rounded py-0 px-2 border-white text-black bg-white
                        transition duration-500 hover:bg-black hover:border-black hover:text-white
                        hover:no-underline" href="/">S</a>
        </div>
        <div className= "mt-8">
        <img src="test.png"/>
           
        </div>
      </div>
    );
  }
}



export default Nav;