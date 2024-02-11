import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
function JoinClubButton() {
    return (
        <div className='px-3 '>
                <Link href="joinClub">
                    <Button variant='prime'>
                        <div className='text-md m-2'>
                            ক্লাবে যোগ দিন <br /> Join Club
                        </div>
                    </Button>
                </Link>
                
            </div>
    )
}

export default JoinClubButton