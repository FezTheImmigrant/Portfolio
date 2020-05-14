import React, { Component } from 'react'
import DownArrow from '../resources/svg/arrow-down-icon.svg'

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="w-full mx-auto py-auto text-center text-white lg:text-6xl md:text-5xl sm:text-4xl text-2xl pt-56 rubik-font min-h-screen fade-in-no-delay">
                    <a href="mailto:sorozco0612@yahoo.com" className="rubik-font hover:text-white">sorozc0612@yahoo.com</a>
                    <div className="rubik-font sm:text-2xl text-lg pt-10">
                            Aurora, Colorado
                        <div className="rubik-font">
                            United States
                        </div>
                        <a href="tel:7195025692" className="rubik-font mt-10 hover:text-white">+1 (719) 502-5692</a>
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
