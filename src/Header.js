import React from "react"
import darkModeIcon from '../src/images/switch.png'
import soundIcon from '../src/images/speaker.png'

class Header extends React.Component {
    render () {
        return (
            <div className="header">
                <div className="dark-mode-icon">
                    <img src={darkModeIcon} alt="dark mode icon"/>
                </div>
                <div className="sound-icon">
                    <img src={soundIcon} alt="sound icon"/>
                </div>
            </div>
        )
    }
}
export default Header