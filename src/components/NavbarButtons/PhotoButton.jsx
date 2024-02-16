import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

function PhotoButton() {
    return (
        <div className='pr-1.5'>
            <Link href="/Gallery">
            <Button variant='bluish' >
                    <div className='text-md m-2'>
                        ফটো গ্যালারি <br /> PHOTO GALLERY
                    </div>
            </Button>
            </Link>
        </div>
    )
}

export default PhotoButton