import { BellIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"



type CardProps = React.ComponentProps<typeof Card>

export default function Card_msg({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>{props.name}</CardTitle>
        
      </CardHeader>
      <CardContent className="grid gap-4">
        <p> Contact number: {props.mobile}</p>
        <p className="text-blue-300"> Subject: {props.subject}</p>
        <p className="text-gray-400">{props.message}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <CheckIcon className="mr-2 h-4 w-4" /> Delete
        </Button>
      </CardFooter>
    </Card>
  )
}
