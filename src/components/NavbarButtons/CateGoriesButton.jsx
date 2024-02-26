import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
function CateGories() {
    return (
        <div className='px-1 '>
            <Link href='/category'>
            <Button variant='bluish' >
                <div className='text-md m-2'>
                আন্দোলনের ধারাসমূহ <br/> CATEGORIES OF MOVEMENT
                </div>
            </Button>
            </Link>
        </div>
    )
}

export default CateGories