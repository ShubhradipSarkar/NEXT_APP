

import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
function ContactButton() {
    return (
        <div className='px-1 '>
            <Link href="/contact">
            <Button variant='bluish' >
                    <div className='text-md m-2'>
                        যোগাযোগ <br />CONTACT
                    </div>
            </Button>
            </Link>
        </div>
    )
}

export default ContactButton