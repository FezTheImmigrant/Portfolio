import React, { Component } from 'react';
import Python from '../resources/python.png';
import Scikit from '../resources/scikit.png';
import Tensorflow from '../resources/tensorflow.png';
import Medium from '../resources/medium.png';
import LinkedIn from '../resources/linkedin.png';
import Github from '../resources/github.png';

export default class Footer extends Component {
    render() {
        return (
            <div className="h-1/4 custom-black min-h-full mt-20">
                <div className="flex justify-center w-full">
                    <img className="w-10 h-10 my-5 mx-5" src={Medium} />
                    <img className="w-15 h-10 my-5 mx-5" src={Github} />
                    <img className="w-10 h-10 my-5 mx-5" src={LinkedIn} />
                </div>
                <div className="flex justify-center w-full">
                    <img className="logo-size my-5 mx-5 opacity-75" src={Python} />
                    <img className="scikit-logo-size my-5 mx-5 opacity-75" src={Scikit} />
                    <img className="logo-size my-5 mx-5 opacity-75" src={Tensorflow} />
                </div>
                <div className="width-full flex justify-center text-white text-l mt-5">
                    {' \u00a9 Sergio Orozco'}
                </div>
                
            </div>
        )
    }
}
