import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'

function AdminOnlyButton() {
    return (
        <div className='mx-5'>
            <Link href="adminOnly">
                <Button variant='admin'>
                    <div className='text-md m-2 flex flex-row'>
                        <div>Admin Only</div>
                        <Image
                        src="/lock.png"
                        alt='Lock'
                        width={20}
                        height={20}
                        className='mx-2'
                        />
                    </div>
                </Button>
            </Link>
        </div>
    )
}

export default AdminOnlyButton