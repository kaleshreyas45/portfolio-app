import React from 'react'
import Navigation from '../Header/Navigation/Navigation'
import Header from '../Header/Header'
import About from '../About/About'
import Project from '../Projects/Project'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

const Main = () => {
    return (
        <>
            <Navigation></Navigation>
            <Header></Header>
            <About></About>
            <hr></hr>
            <Project></Project>
            <Skills></Skills>
            <Contact></Contact>
            <Footer></Footer>
        
            
        </>

    )
}

export default Main