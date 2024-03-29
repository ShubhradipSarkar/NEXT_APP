import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
function JoinClubButton() {
    return (
        <div className='px-1 '>
                <Link href="joinClub">
                    <Button variant='prime'>
                        <div className='text-md'>
                            ক্লাবে যোগ দিন <br /> Join Club
                        </div>
                    </Button>
                </Link>
                
            </div>
    )
}

export default JoinClubButton