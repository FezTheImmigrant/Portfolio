import React from "react";  

const Nav = () => {  
  return (
    <div>
     <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <a class="uk-text-bold" href="/">Machine Learning Engineer </a>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li><a class="uk-text-bold" href="article">Articles</a></li>
            <li><a class="uk-text-bold" href="blog">Blog</a></li>
            <li><a class="uk-text-bold" href="about">About</a></li>
          </ul>
        </div>
      </nav> 
    </div>
  );
};

export default Nav;