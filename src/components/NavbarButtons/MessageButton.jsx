import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import Image from 'next/image'
function MessageButton() {
  return (
    <div className='px-1'>
        <Link href="messagesForMembers">
            <Button variant='prime'>
                <div className='text-md'>
                    <div className='flex flex-row'>
                    
                        <div className='mx-2 text-bold'>
                            Messages <br /> From Public
                        </div>
                        
                    </div>
                    
                </div>
            </Button>
        </Link>
        
    </div>
  )
}

export default MessageButton