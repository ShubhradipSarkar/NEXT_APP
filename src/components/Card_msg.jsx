import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Card_msg(props) {
  return (
    <Card className="w-auto p-5 m-5">
      <CardHeader>
        <CardTitle>{props.name}</CardTitle>
        <CardDescription>Contact: {props.mobile}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-blue-400">Subject: {props.subject}</p>
        <p className="text-gray-400">{props.message}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        
        <Button className="w-auto">Delete</Button>
      </CardFooter>
    </Card>
  )
}
