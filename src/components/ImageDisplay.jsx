import * as React from "react"
// import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CldImage } from "next-cloudinary"

export default function ImageDisplay({images}) {
  
  const images_=images;

  return (
        <div>
        {
            
            images_.map((imgs)=>(
                <center>
                <div className="items-center p-3 m-3">
                    <CldImage
                        src={imgs}
                        alt='/noimigo...'
                        width={220}
                        height={220}
                        loading="lazy"
                    />
                </div>
                </center>
            ))
        }
      </div>
  )
}
