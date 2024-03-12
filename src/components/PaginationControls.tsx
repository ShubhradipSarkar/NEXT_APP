'use client'

import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from './ui/button'
interface PaginationControlsProps {
  urlfor: string
  hasNextPage: boolean
  hasPrevPage: boolean
}

const PaginationControls: FC<PaginationControlsProps> = (
  {
    urlfor,
    hasNextPage,
    hasPrevPage,
  }
) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '5'

  return (
    <div className='flex gap-2 w-full justify-center'>
      <Button
        className='bg-blue-500 text-white p-1 m-2'
        size="sm"
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/${urlfor}?page=${Number(page) - 1}&per_page=${per_page}`)
        }}>
        Prev
      </Button>

      <div className='m-2'>
        {page} / {Math.ceil(10 / Number(per_page))}
      </div>

      <Button
        className='bg-blue-500 text-white p-1 m-2'
        disabled={!hasNextPage}
        size="sm"
        onClick={() => {
          router.push(`/${urlfor}?page=${Number(page) + 1}&per_page=${per_page}`)
        }}>
        Next
      </Button>
    </div>
  )
}

export default PaginationControls