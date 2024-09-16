"use client";
import Image from "next/image";
import React from "react";
import Navbar_ from "@/components/Navbar";
import Footer_ from "@/components/Footer";
import Home from './mapcomponents/main'
import Link from "next/link";
import { NextUIProvider } from "@nextui-org/react";

function About() {
  return (
    <NextUIProvider>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Navbar_ />

        <div className="m-2 rounded-lg border border-cyan-500 ">
          <Image
            src="/sscHome2.jpeg"
            height={500}
            width={500}
            alt="HomePicture"
            className="rounded-lg p-2 "
            style={{ borderRadius: "15px" }}
          />
        </div>

        <div className="flex flex-row flex-wrap justify-center items-center w-full m-2 p-2 gap-2">
          {/* Meet our team */}
          <div
            className="flex hover:scale-125 cursor-pointer flex-col bg-slate-500 rounded-lg hover:scale-110 transition delay-150 duration-300 ease-in-out items-center justify-center"
            style={{ height: "350px", width: "350px" }}
          >
            <Link href='/'>
            <Image
              src="/sscTeam.jpeg"
              height={350}
              width={350}
              alt="team"
              style={{ borderRadius: "15px" }}
            />
            <div>Meet our wonderful team</div>
            </Link>
          </div>

          {/* World Environment Day Ralley */}
          <div
            className="flex hover:scale-125 cursor-pointer flex-col bg-slate-500 rounded-lg hover:scale-110 transition delay-150 duration-300 ease-in-out items-center justify-center"
            style={{ height: "350px", width: "350px" }}
          >
            <Image
              src="/Ralley.jpeg"
              height={350}
              width={350}
              alt="ralley"
              style={{ borderRadius: "15px" }}
            />
            <div>World Environment Day Ralley</div>
          </div>

          {/* Introduction to Universe Program */}
          <div
            className="flex hover:scale-125 cursor-pointer flex-col bg-slate-500 rounded-lg hover:scale-110 transition delay-150 duration-300 ease-in-out items-center justify-center"
            style={{ height: "350px", width: "350px" }}
          >
            <Image
              src="/Universe.jpeg"
              height={350}
              width={350}
              alt="universe"
              style={{ borderRadius: "15px" }}
            />
            <div>Introduction to Universe Program</div>
          </div>

          <div
            className="flex hover:scale-125 cursor-pointer flex-col bg-slate-500 rounded-lg hover:scale-110 transition delay-150 duration-300 ease-in-out items-center justify-center"
            style={{ height: "350px", width: "350px" }}
          >
            <Image
              src="/School.jpeg"
              height={350}
              width={350}
              alt="school programs"
              style={{ borderRadius: "15px" }}
            />
            <div>Programs in Schools</div>
          </div>

          <div
            className="flex hover:scale-125 cursor-pointer flex-col bg-slate-500 rounded-lg hover:scale-110 transition delay-150 duration-300 ease-in-out items-center justify-center"
            style={{ height: "350px", width: "350px" }}
          >
            <Image
              src="/sikshac.jpg"
              height={350}
              width={350}
              alt="educational convention"
              style={{ borderRadius: "15px" }}
            />
            <div>Educational Convention 2022</div>
          </div>
        </div>
        <div>
        <Home />
        </div>
      </div>
      <Footer_ />
    </NextUIProvider>
  );
}

export default About;
