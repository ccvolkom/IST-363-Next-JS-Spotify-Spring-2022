import classNames from 'classnames/bind'

import styles from './buttonui.module.scss'
import Image from 'next/image'

let cx = classNames.bind(styles)

const ButtonUI = ({ icon, color, clickHandler }) => {
    let btnClasses = cx({
        btnui: true,
        [`${icon}`] : icon,
    });
    return <button 
        className={btnClasses}
        onClick={() => {
            clickHandler(true)
        }}
    >
        <img 
        src={`/images/icon-${icon}-${color}.svg`}
        alt={`${icon} icon`}
        width="36"
        height="36"
        />
    </button>
}
export default ButtonUI;