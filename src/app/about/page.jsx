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

        <div className="m-2 mt-2 flex flex-row flex-wrap  justify-center rounded-lg border border-cyan-500 " style={{marginTop:'20px'}}>
          <Image
            src="/sscHome2.jpeg"
            height={500}
            width={500}
            alt="HomePicture"
            className="rounded-lg p-2 "
            style={{ borderRadius: "15px" }}
          />
          <p className="w-80 m-2 leading-10 text-slate-400 italic">
            সান্তিপুর সায়েন্স ক্লাব সান্তিপুরের একটি প্রতিষ্ঠিত সংস্থা, যা ১৯৮০ সাল থেকে বিজ্ঞান শিক্ষার প্রসার ও বিজ্ঞানমনস্কতা গড়ে তোলার লক্ষ্যে কাজ করে আসছে। ক্লাবটি বিজ্ঞান মেলা, কর্মশালা, সেমিনার, পরিবেশ সচেতনতা অভিযান এবং জ্যোতির্বিজ্ঞান পর্যবেক্ষণ সহ বিভিন্ন কার্যক্রমের মাধ্যমে সাধারণ মানুষ, বিশেষ করে ছাত্র-ছাত্রীদের মধ্যে বিজ্ঞান নিয়ে উৎসাহ জাগাতে অগ্রণী ভূমিকা পালন করে। সান্তিপুর সায়েন্স ক্লাবের মূল লক্ষ্য হলো বিজ্ঞানকে সকলের কাছে সহজ ও বোধগম্য করা, এবং একটি প্রগতিশীল সমাজ গড়ে তুলতে বিজ্ঞান চর্চাকে জনপ্রিয় করে তোলা।
          </p>
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
        <div className="flex flex-row flex-wrap gap-2">
          <div className="m-2">
          <p>গুগল ম্যাপে আমাদের প্রতিষ্ঠানের অবস্থান</p>
        <Home />
          </div>
          
        <div className="m-2">
          <p>খবরের কাগজে আমাদের সংগঠন</p>
          <div className="flex m-2 gap-2 flex-col">
            <a href="https://bengali.news18.com/news/south-bengal/world-earth-day-celebrated-by-santipur-science-club-l18-1621156.html" target="_blank"><p className="text-cyan-500 italic">* 2024 বিশ্ব ধরিত্রী দিবসে</p></a>
            
            <a href="https://www.facebook.com/watch/?mibextid=jmPrMh&v=1235681647792002&rdid=brEpAvpp207brCFo" target="_blank"><p className="text-cyan-500 italic">* জাতীয় মহাকাশ দিবস</p></a>
            
          </div>
        </div>
        </div>
      </div>
      <Footer_ />
    </NextUIProvider>
  );
}

export default About;
