import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import './ScrollTop.css'

const ScrollTop = () => {
    const [isTrue, setIsTrue] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setIsTrue(true)
            } else {
                setIsTrue(false)
            }
        })
    }, [isTrue])
    const scrollUP = () => {
        window['scrollTo']({top: 0, behavior: 'smooth'})
    }
    return (
        <div>
            {
                isTrue && <button onClick={scrollUP}className="scrollBtn"><FontAwesomeIcon icon={faAngleUp}/></button>
            }
        </div>
    );
};

export default ScrollTop;