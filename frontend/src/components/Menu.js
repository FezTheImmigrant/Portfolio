import React, { Component } from 'react'
import HeadShot from '../resources/headshot.png'
import BlogHeader from '../resources/blog.gif'
import Article from '../resources/article.gif'
import Articles from '../components/Articles'
import Contact from '../resources/contact.gif';
import Query from "../components/Query";
import MEDIUM_ARTICLES_LINK_QUERY from "../queries/MediumArticleLinkQuery";

function ToggleArticles(props) {
    var articles = props.articles;
    var isToggledOn = props.isArticleListToggledOn;

    if (isToggledOn) {
        return (<Articles articles={articles}/>);
    }

    return <React.Fragment/>
    
}

export class Menu extends Component {

    state = {
        isArticleListToggledOn: false,
    };

    handleClick = () => {
        this.setState( state => ({
            isArticleListToggledOn: !state.isArticleListToggledOn
        }));
    }
    render() {

        var menuOpenClassName = this.props.open ? " opacity-fade-in" : " opacity-fade-out"
        console.log(menuOpenClassName)

        return (
            <div className={"w-full mt-20 z-10 fixed" + menuOpenClassName}>
                <div className="ml-auto flex justify-end rounded-md">
                    <div className=" black_transparent mr-5 lg:w-1/4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="sm:flex">
                            <a href="/" className="hover:no-underline sm:w-1/2 w-full">
                                <div className=" mr-1 bg-center bg-cover bg-auto h-32 menu-pulse rounded-md " style={headShotStyle}>
                                    <h1 className='text-white text-center py-10 text-3xl'>Home</h1>
                                </div>
                            </a>
                            <a href="/blog" className="hover:no-underline sm:w-1/2 w-full">
                                <div className=" ml-1 bg-center bg-cover h-32 menu-pulse rounded-md" style={blogHeaderStyle}>
                                    <h1 className='text-white text-center py-10 text-3xl'>Blog</h1>
                                </div>
                            </a>
                        </div>
                        <div className="sm:flex mt-1">
                            <button onClick={this.handleClick} className="hover:no-underline sm:w-1/2 w-full focus:outline-none">
                                <div className=" mr-1 bg-center bg-cover bg-auto h-32 menu-pulse rounded-md" style={articleStyle}>
                                    <h1 className='text-white text-center py-10 text-3xl'>Articles</h1>
                                </div>
                            </button>
                            <a href="/contact" className="hover:no-underline sm:w-1/2 w-full">
                                <div className="m1-1 bg-center bg-cover h-32 menu-pulse rounded-md" style={contactStyle}>
                                    <h1 className='text-white text-center py-10 text-3xl'>Contact</h1>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mr-5">
                    <Query query={MEDIUM_ARTICLES_LINK_QUERY}>
                        {({ data: { articles } }) => {
                            return (<ToggleArticles articles={articles} isArticleListToggledOn={this.state.isArticleListToggledOn} />);
                        }}
                    </Query>
                </div>
            </div>
        )
    }
}

const headShotStyle = {
    backgroundImage: `url(${HeadShot})`,
}
const blogHeaderStyle = {
    backgroundImage: `url(${BlogHeader})`,
}
const articleStyle = {
    backgroundImage: `url(${Article})`,
}
const contactStyle = {
    backgroundImage: `url(${Contact})`,
}
export default Menu