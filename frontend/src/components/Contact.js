import React, { Component } from 'react'
import DownArrow from '../resources/svg/arrow-down-icon.svg'

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="w-1/2 mx-auto py-auto text-center text-white text-6xl pt-56 rubik-font min-h-screen fade-in-no-delay">
                    sorozc0612@yahoo.com
                    <div className="rubik-font text-2xl pt-10">
                            Aurora, Colorado
                        <div className="rubik-font">
                            United States
                        </div>
                        <div className="rubik-font mt-10">
                            +1 (719) 502-5692
                        </div>
                    </div>
                </div>
                <div className="flex justify-center arrow-pulse transform -translate-y-32">
                    <img className="" src={DownArrow} />
                </div>
            </React.Fragment>
        )
    }
}

export default Contact;
