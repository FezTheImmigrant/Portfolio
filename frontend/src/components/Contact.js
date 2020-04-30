import React, { Component } from 'react'
import DownArrow from '../resources/svg/arrow-down-icon.svg'

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="w-full mx-auto py-auto text-center text-white lg:text-6xl md:text-5xl sm:text-4xl text-2xl pt-56 rubik-font min-h-screen fade-in-no-delay">
                    sorozc0612@yahoo.com
                    <div className="rubik-font sm:text-2xl text-lg pt-10">
                            Aurora, Colorado
                        <div className="rubik-font">
                            United States
                        </div>
                        <div className="rubik-font mt-10">
                            +1 (719) 502-5692
                        </div>
                    </div>
                </div>
                <div className="flex justify-center sm:visible invisible arrow-pulse absolute inset-x-0 bottom-0">
                    <img className="" src={DownArrow} />
                </div>
            </React.Fragment>
        )
    }
}

export default Contact;
