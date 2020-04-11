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
        return (
            <div className=" w-full mt-20 z-10 fade-in-no-delay-fast fixed">
                <div className="ml-auto flex justify-end rounded-md">
                    <div className="flex mt-32">
                        <Query query={MEDIUM_ARTICLES_LINK_QUERY}>
                            {({ data: { articles } }) => {
                                return (<ToggleArticles articles={articles} isArticleListToggledOn={this.state.isArticleListToggledOn} />);
                            }}
                        </Query>
                    </div>
                    <div className=" black_transparent mr-5 w-1/4">
                        <div className="flex">
                            <a href="/" className="hover:no-underline w-1/2">
                                <div className=" mr-1 bg-center bg-cover bg-auto h-32 menu-pulse rounded-md" style={headShotStyle}>
                                    <h1 className='text-white text-center py-10 text-3xl'>Home</h1>
                                </div>
                            </a>
                            <a href="/blog" className="hover:no-underline w-1/2">
                                <div className=" ml-1 bg-center bg-cover h-32 menu-pulse rounded-md" style={blogHeaderStyle}>
                                    <h1 className='text-white text-center py-10 text-3xl'>Blog</h1>
                                </div>
                            </a>
                        </div>
                        <div className="flex mt-1">
                            <button onClick={this.handleClick} className="hover:no-underline w-1/2 focus:outline-none">
                                <div className=" mr-1 bg-center bg-cover bg-auto h-32 menu-pulse rounded-md" style={articleStyle}>
                                    <h1 className='text-white text-center py-10 text-3xl'>Articles</h1>
                                </div>
                            </button>
                            <a href="/contact" className="hover:no-underline w-1/2">
                                <div className="m1-1 bg-center bg-cover h-32 menu-pulse rounded-md" style={contactStyle}>
                                    <h1 className='text-white text-center py-10 text-3xl'>Contact</h1>
                                </div>
                            </a>
                        </div>
                    </div>
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