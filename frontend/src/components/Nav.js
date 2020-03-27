import React, { Component } from "react";  

export class Nav extends Component {  
  render() {
    return (
      <React.Fragment>
        <ul >
          <li>
            <a href="/">Machine Learning Engineer </a>
          </li>
        </ul>
        <ul>
          <li><a href="article">Articles</a></li>
          <li><a href="blog">Blog</a></li>
          <li><a href="about">About</a></li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Nav;