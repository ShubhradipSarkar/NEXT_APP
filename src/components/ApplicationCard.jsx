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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { BellIcon, CheckIcon } from "@radix-ui/react-icons"
import axios from "axios"

export default function CardWithForm({name, email, mob, edu, bGR, guardian, profession, interest, dob}) {
    
    const makeMember = async() => {
        try {
            const updateMember = await axios.put("/api/users/members",{
                email: email,
                name: name,
                mob:mob,
                profession:profession,
                dob:dob,
                guardian:guardian,
                interest:interest,
                bGR : bGR,
                edu:edu,
            })

            const deleteApplication = await axios.put("/api/users/applications",{
                email: email,
            })
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <Card className="w-full m-8 bg-sky-500">
        <CardHeader>
            <CardTitle>Name</CardTitle>
            <CardDescription>{name}</CardDescription>
        </CardHeader>

        <CardHeader>
            <CardTitle>Email</CardTitle>
            <CardDescription>{email}</CardDescription>
        </CardHeader>
        <CardHeader>
            <CardTitle>Mobile Number</CardTitle>
            <CardDescription>{mob}</CardDescription>
        </CardHeader>
        <CardHeader>
            <CardTitle>Educational Qualification</CardTitle>
            <CardDescription>{edu}</CardDescription>
        </CardHeader>
        <CardHeader>
            <CardTitle>Guardian's name</CardTitle>
            <CardDescription>{guardian}</CardDescription>
        </CardHeader>
        <CardHeader>
            <CardTitle>Blood Group</CardTitle>
            <CardDescription>{bGR}</CardDescription>
        </CardHeader>
        <CardHeader>
            <CardTitle>Date of Birth</CardTitle>
            <CardDescription>{dob}</CardDescription>
        </CardHeader>
        <CardHeader>
            <CardTitle>Profession</CardTitle>
            <CardDescription>{profession}</CardDescription>
        </CardHeader>
        <CardHeader>
            <CardTitle>Interests</CardTitle>
            <CardDescription>{interest}</CardDescription>
        </CardHeader>
        
        <CardFooter className="flex justify-between">
            {/* <Button variant="outline">Delete</Button> */}
            <Button onClick={makeMember}>Approve <CheckIcon className="mr-2 h-4 w-4" /> </Button>
        </CardFooter>
        </Card>
    )
}
