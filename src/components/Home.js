import React, { Component } from "react";
import HeadShot from "../resources/headshot-teeth.jpg"
import DownArrow from '../resources/svg/arrow-down-icon.svg'
import Blog from "../components/Blog";
import Query from "../components/Query";
import BLOG_QUERY from "../queries/BlogQuery"; 
import MEDIUM_ARTICLES_LINK_QUERY from "../queries/MediumArticleLinkQuery";

export class Home extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="md:pt-40 pt-5 md:flex md:min-h-screen">
                    <div className="md:ml-20 md:mr-0 mt-20 fade-in-no-delay z-10">
                        <div className="xl:text-5xl lg:text-4xl md:text-xl text-l md:mx-0 mx-20 md:text-left text-center">
                            <h1 className="text-white">
                                Hey I'm Sergio,
                                <div> a Machine Learning Engineer. </div>
                            </h1>
                        </div>
                        <h2 className="mt-6 text-white xl:text-2xl md:text-sm  text-xs mb-5 md:mx-0 mx-20 md:text-left text-center">I'm a full time Software Engineer at Sierra Nevada Coorporation,
                        but I'm a dedicated practicioner of Machine Learning outside of
                            the workplace. This website is home to my studies and achievements.</h2>
                    </div>
                    <img className="headshot fade-in-short-delay transform xl:-translate-x-20 lg:-translate-x-10 md:-translate-y-48 mx-auto z-0" alt="Headshot" src={HeadShot} />

                </div>
                <div className="flex justify-center arrow-pulse md:visible invisible absolute inset-x-0 bottom-0">
                    <img className="" src={DownArrow} alt="Scroll Indicator" />
                </div>

                <h3 className="sm:text-3xl text-l text-white md:ml-20 md:text-left text-center"> Most Recent Articles </h3>
                    <Query query={MEDIUM_ARTICLES_LINK_QUERY}>
                        {({ data: { articles } }) => {
                            return <Blog posts={articles.slice(0,2)} dataType="article" />;
                        }}
                    </Query>
                <h3 className="sm:text-3xl text-l text-white md:ml-20 md:text-left text-center mt-20"> Most Recent Blog Posts </h3>
                <div className="mx-auto">
                    <Query query={BLOG_QUERY}>
                        {({ data: { posts } }) => {
                            return <Blog posts={posts.slice(0,2)} dataType="blog" />;
                        }}
                    </Query>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;