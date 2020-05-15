import React, { Component } from 'react';
import Python from '../resources/python.png';
import Scikit from '../resources/scikit.png';
import Tensorflow from '../resources/tensorflow.png';
import Medium from '../resources/medium.png';
import LinkedIn from '../resources/linkedin.png';
import Github from '../resources/github.png';
import File from '../resources/svg/file-icon.svg';
import Mail from '../resources/svg/mail-icon.svg'
import pdf from '../resources/Resume.pdf';
import LazyLoad from 'react-lazy-load';
import ImageLoader from './ImageLoader'

export default class Footer extends Component {
    render() {
        return (
            <div className="custom-black min-h-full mt-20 fade-in-no-delay">
                <div className="flex justify-center w-full">
                    <div className="bound:mx-0 mt-5 flex">
                        <LazyLoad
                            debounce={false}
                            throttle={250}>
                            <a href="https://medium.com/@sorozco0612" target="_blank" rel="noopener noreferrer"  >
                                <ImageLoader src={Medium} alt="Medium" className="w-10 h-10 bound:mx-5 mx-2" />
                            </a>
                        </LazyLoad>
                        <LazyLoad
                            debounce={false}
                            throttle={250}>
                            <a href="https://github.com/FezTheImmigrant" target="_blank" rel="noopener noreferrer"  >
                                <ImageLoader src={Github} alt="Github" className="w-16 h-10 bound:mx-5 mx-2 transform -translate-y-2" />
                            </a>

                        </LazyLoad>
                        <LazyLoad
                            debounce={false}
                            throttle={250}>
                            <a href="https://www.linkedin.com/in/sergio-orozco-51b057159/" target="_blank" rel="noopener noreferrer"  >
                                <ImageLoader src={LinkedIn} alt="LinkedIn" className="w-10 h-10 bound:mx-5 mx-2" />
                            </a>

                        </LazyLoad>
                        <LazyLoad
                            debounce={false}
                            throttle={250}>
                            <a target="_blank" rel="noopener noreferrer" href={pdf}>
                                <img className="bound:mx-5 mx-2 w-10 h-8" src={File} alt="Resume" />
                            </a>
                        </LazyLoad>
                        <LazyLoad
                            debounce={false}
                            throttle={250}>
                            <a href="/contact" >
                                <img className="bound:mx-5 mx-2 w-10 h-8 mt-1" src={Mail} alt="Contact" />
                            </a>
                        </LazyLoad>
                    </div>
                </div>
                <div className="flex justify-center w-full">
                    <div className="flex mt-5">
                        <LazyLoad
                            debounce={false}
                            throttle={250}>
                            <a href="https://www.python.org" target="_blank" rel="noopener noreferrer" >
                                <img src={Python} alt="Python" className="logo-size mx-5 opacity-75" />
                            </a>
                        </LazyLoad>
                        <LazyLoad
                            debounce={false}
                            throttle={250}>
                            <a href="https://scikit-learn.org/stable/" target="_blank" rel="noopener noreferrer" >
                                <img src={Scikit} alt="Scikit-Learn" className="scikit-logo-size mx-5 opacity-75" />
                            </a>
                        </LazyLoad>
                        <LazyLoad
                            debounce={false}
                            throttle={250}>
                            <a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer" >
                                <img src={Tensorflow} alt="Tensorflow" className="logo-size mx-5 opacity-75" />
                            </a>
                        </LazyLoad>
                    </div>
                </div>
                <div className="width-full flex justify-center text-white text-l mt-5 sm:pb-3">
                    {' \u00a9 2020 Sergio Orozco'}
                </div>
            </div>
        )
    }
}
