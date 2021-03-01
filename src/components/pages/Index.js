import React, {useState} from 'react'
import Sidebar from '../Sidebar/index.js'
import Navbar from '../Navbar/index.js'
import HeroSection from '../HeroSection/index.js'
import InfoSection from '../InfoSection/index.js'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection />
        </>
    )
}

export default Home





