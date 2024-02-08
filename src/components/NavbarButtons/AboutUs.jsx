import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from "next/navigation";
import Link from 'next/link'

function AboutUsButton() {
    const router = useRouter();
    return (
        <div className='px-3 '>
            <Link href="about">
                <Button variant='bluish'>
                    <div className='text-md m-2'>
                        সংক্ষিপ্ত পরিচয় <br /> ABOUT US
                    </div>
                </Button>
            </Link>
            
        </div>
    )
}

export default AboutUsButton