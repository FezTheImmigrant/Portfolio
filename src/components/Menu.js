import React, { Component } from 'react'
import HeadShot from '../resources/headshot-teeth.jpg'
import BlogHeader from '../resources/blog.gif'
import Article from '../resources/article.gif'
import Articles from '../components/Articles'
import Contact from '../resources/contact.gif';
import Query from "../components/Query";
import MEDIUM_ARTICLES_LINK_QUERY from "../queries/MediumArticleLinkQuery";

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

        var menuOpenClassName = this.props.open ? " opacity-fade-in" : " opacity-fade-out pointer-events-none"
        var articleOpenClassName = this.state.isArticleListToggledOn ? " opacity-fade-in" : " opacity-fade-out pointer-events-none"

        return (
            <div className={"w-full mt-20 z-10 fixed" + menuOpenClassName}>
                <div className="ml-auto flex justify-end rounded-md">
                    <div className="rounded-md mr-5 lg:w-1/4 md:w-1/3 sm:w-1/2 w-full">
                        <a href="/" className="hover:no-underline h-1/5">
                            <div className=" mr-1 bg-center bg-cover bg-auto menu-pulse rounded-md " style={headShotStyle}>
                                <p className='text-white text-center py-10 text-3xl'>Home</p>
                            </div>
                        </a>
                        <a href="/blog" className="hover:no-underline h-1/5">
                            <div className=" ml-1 bg-center bg-cover menu-pulse rounded-md" style={blogHeaderStyle}>
                                <p className='text-white text-center py-10 text-3xl'>Blog</p>
                            </div>
                        </a>
                        <button onClick={this.handleClick} className="hover:no-underline w-full focus:outline-none h-1/5">
                            <div className=" mr-1 bg-center bg-cover bg-auto menu-pulse rounded-md" style={articleStyle}>
                                <p className='text-white text-center py-10 text-3xl'>Articles</p>
                            </div>
                        </button>
                        <a href="/contact" className="hover:no-underline h-1/5">
                            <div className="m1-1 bg-center bg-cover menu-pulse rounded-md" style={contactStyle}>
                                <p className='text-white text-center py-10 text-3xl'>Contact</p>
                            </div>
                        </a>
                        <div className={"flex justify-end h-1/5" + articleOpenClassName}>
                            <Query query={MEDIUM_ARTICLES_LINK_QUERY}>
                                {({ data: { articles } }) => {
                                    return (<Articles articles={articles}/>);
                                }}
                            </Query>
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