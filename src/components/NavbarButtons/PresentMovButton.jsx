import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
function PresentMovButton() {
    return (
        <div className=''>
            <Link href='/present'>
            <Button variant='bluish' >
                    <div className='text-md m-2'>
                        বর্তমান কর্মসূচি নিয়মিত <br/> CURRENT ACTIVITIES
                    </div>
            </Button>
            </Link>
        </div>
    )
}

export default PresentMovButton