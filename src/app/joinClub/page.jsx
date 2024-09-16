// import React from 'react'
"use client";
import Navbar_ from "@/components/Navbar";
import Footer_ from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";

export default function InputForm() {
  const { toast } = useToast();
  const [name, setname] = useState("");
  const [guardian, setguardian] = useState("");
  const [edu, setedu] = useState("");
  const [email, setemail] = useState("");
  const [mob, setmob] = useState("");
  const [bGR, setbGR] = useState("");
  const [interest, setinterest] = useState("");
  const [profession, setprofession] = useState("");
  const [dob, setdob] = useState("");
  const [check, setcheck] = useState(0);
  const [errorMsg, seterrorMsg] = useState("");
  const [buttonClicked, setbuttonClicked] = useState(false);
  const { data: session } = useSession();

  const submitApplication = async () => {
    setbuttonClicked(true);
    if (check === false || check === 0) {
      seterrorMsg("Click the checkbox to continue");
      return;
    }
    if (!name || !edu || !guardian || !mob || !dob) {
      seterrorMsg(
        "Name, Educational Qualification, Guardian's name, Mobile No, Date of Birth are required"
      );
      return;
    }
    try {
      await axios.post("/api/users/applications", {
        name,
        guardian,
        edu,
        email: session?.user?.email,
        mob,
        bGR,
        interest,
        profession,
        dob,
        check,
      });
      toast({
        title: "Application sent",
        description: `${name}, Thanks for choosing to be a part of us... We will review your application and get back to you through your mobile number ${mob}`,
      });
    } catch (error) {
      setbuttonClicked(false);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description:
          "There was a problem and your Application couldn't be sent.",
      });
      console.log(error);
    } finally {
      setbuttonClicked(false);
    }
  };

  return (
    <div>
      <Navbar_ />
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="w-2/3 p-8 shadow-lg rounded-lg">
          <h2 className="text-center m-2 text-2xl font-bold mb-6">Application Form</h2>

          <div className="mb-4 m-2">
            <Label htmlFor="name">Name*</Label>
            <Input
              placeholder="Your Name"
              className="w-full mt-1"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>

          <div className="mb-4 m-2">
            <Checkbox
              id="terms"
              value={check}
              onClick={() => setcheck(!check)}
            />
            <label
              htmlFor="terms"
              className="text-sm pl-2 font-medium leading-none"
            >
              I hereby acknowledge my commitment to actively contribute to the Santipur Science Club and agree to comply with its rules and guidelines.
            </label>
          </div>

          <div className="mb-4 m-2">
            <Label htmlFor="gname">Guardian's Name*</Label>
            <Input
              placeholder="Your guardian's name"
              className="w-full mt-1"
              value={guardian}
              onChange={(e) => setguardian(e.target.value)}
            />
          </div>

          <div className="mb-4 m-2">
            <Label htmlFor="dob">Date of Birth*</Label>
            <Input
              placeholder="DD/MM/YY"
              className="w-full mt-1"
              value={dob}
              onChange={(e) => setdob(e.target.value)}
            />
          </div>

          <div className="mb-4 m-2">
            <Label htmlFor="edu">Educational Qualification*</Label>
            <Input
              placeholder="Your educational qualification"
              className="w-full mt-1"
              value={edu}
              onChange={(e) => setedu(e.target.value)}
            />
          </div>

          <div className="mb-4 m-2">
            <Label htmlFor="profession">Profession</Label>
            <Input
              placeholder="Your profession"
              className="w-full mt-1"
              value={profession}
              onChange={(e) => setprofession(e.target.value)}
            />
          </div>

          <div className="mb-4 m-2">
            <Label htmlFor="bGR">Blood Group*</Label>
            <Input
              placeholder="Example: O-"
              className="w-full mt-1"
              value={bGR}
              onChange={(e) => setbGR(e.target.value)}
            />
          </div>

          <div className="mb-4 m-2">
            <Label htmlFor="interest">Interests</Label>
            <Input
              placeholder="Your Interests"
              className="w-full mt-1"
              value={interest}
              onChange={(e) => setinterest(e.target.value)}
            />
          </div>

          <div className="mb-4 m-2">
            <Label htmlFor="mob">Mobile No.*</Label>
            <Input
              type="tel"
              placeholder="Example: +91-9876543210"
              className="w-full mt-1"
              value={mob}
              onChange={(e) => setmob(e.target.value)}
            />
          </div>

          <div className="text-red-500 m-2 text-center mb-4">{errorMsg}</div>

          <div className="flex justify-center">
            <Button onClick={submitApplication} variant="bluish" size="lg">
              {buttonClicked? ('Submitting Application...'):('Apply for membership')}
            </Button>
          </div>
        </div>
      </div>
      <Footer_ />
    </div>
  );
}
