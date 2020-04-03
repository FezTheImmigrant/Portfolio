import React, { Component } from 'react'
import HeadShot from '../resources/headshot.jpg'
import BlogHeader from '../resources/blog.gif'
import Article from '../resources/article.gif'
import Contact from '../resources/contact.gif';
import Query from "../components/Query";
import MEDIUM_ARTICLES_LINK_QUERY from "../queries/MediumArticleLinkQuery";

export class Menu extends Component {
    render() {
        return (
            <div className="right-100 w-full z-10 fade-in-no-delay-fast absolute flex">
                <div className=" w-1/3 ml-auto flex justify-end rounded-md">
                    
                    <Query query={MEDIUM_ARTICLES_LINK_QUERY}>
                        {({ data: { articles } }) => {
                            
                            return <p>{articles[0].title}</p >;
                        }}
                    </Query>
                    <div className="bg-black rounded-md mr-5 w-full">
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
                            <a href="/" className="hover:no-underline w-1/2">
                                <div className=" mr-1 bg-center bg-cover bg-auto h-32 menu-pulse rounded-md" style={articleStyle}>
                                    <h1 className='text-white text-center py-10 text-3xl'>Articles</h1>
                                </div>
                            </a>
                            <a href="/" className="hover:no-underline w-1/2">
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