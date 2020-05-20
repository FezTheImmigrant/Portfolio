import React, { Component } from 'react'
import DownArrow from '../resources/svg/arrow-down-icon.svg'

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="w-full mx-auto py-auto text-center text-white lg:text-6xl md:text-5xl sm:text-4xl text-2xl pt-56 min-h-screen fade-in-no-delay">
                    <a href="mailto:sorozco0612@yahoo.com" className="hover:text-white">
                        <h1 className="text-white underline">
                            sorozc0612@yahoo.com
                        </h1>
                    </a>
                    <div className="sm:text-3xl text-lg pt-10">
                        <h2 className="text-white">
                            Aurora, Colorado 
                        </h2>
                        <h2 className="text-white">
                            United States
                        </h2>

                        <a href="tel:7195025692" className="mt-10 hover:text-white bold">
                            <h2 className= "text-white underline">
                                +1 (719) 502-5692
                            </h2>
                        </a>
                    </div>
                </div>
                <div className="flex justify-center sm:visible invisible arrow-pulse absolute inset-x-0 bottom-0">
                    <img className="" src={DownArrow} alt="Scroll Indicator" />
                </div>
            </React.Fragment>
        )
    }
}

export default Contact;
