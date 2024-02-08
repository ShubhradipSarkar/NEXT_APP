import React from 'react'
import Navbar_ from '@/components/Navbar'
import Footer_ from '@/components/Footer'
import Card_ from '@/components/Card'
function About() {
    return (
        <div>
            <Navbar_/>
                <div className="flex flex-row flex-wrap">
                    <Card_/>
                    <Card_/>
                    <Card_/>
                    <Card_/>
                    <Card_/>
                </div>
            <Footer_/>
        </div>
    )
}

export default About