import React from 'react'
import { Button } from '@/components/ui/button'
import Navbar_ from '@/components/Navbar'
import Footer_ from '@/components/Footer'
import Link from 'next/link'
function page() {
    return (
        <div className='min-h-screen'>
            <Navbar_/>
            <div className='flex flex-col items-center justify-center py-5'>
                <Link href="newmembershipapplication"><Button variant="prime">New Membership Applications</Button></Link>
                
                <Button variant="bluish">Members</Button>
                <Button variant="admin">Admins</Button>
            </div>
            <Footer_/>
        </div>

    )
}

export default page