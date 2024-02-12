import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
export default function HistoryMovButton() {
    return (
        <div className='px-1 '>
            <Link href="History">
            <Button variant='bluish' >
                    <div className='text-md m-2'>
                        আন্দোলনের ইতিহাস <br/> HISTORY OF MOVEMENTS
                    </div>
            </Button>
            </Link>
        </div>
    )
}
