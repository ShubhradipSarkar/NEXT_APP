
"use client";
import Image from "next/image";
import React from "react";
import Navbar_ from "@/components/Navbar";
import Footer_ from "@/components/Footer";
import Card_ from "@/components/Card";
import { useEffect, useState } from "react";

import { NextUIProvider } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";
import PaginationControls from "@/components/PaginationControls";

function About({ searchParams }) {
  const [Data, setData] = useState([]);
  const [isloading, SetIsloading] = useState(true);
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "10";

  // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
  const end = start + Number(per_page); // 5, 10, 15 ...

  useEffect(() => {
    fetch("/api/users/members")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.member);
        SetIsloading(false);
      });
  }, []);

  const entries = Data.slice(start, end);

  return (
    <NextUIProvider>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Navbar_ />
        
        <div className="text-4xl m-2 text-white italic">Our Team</div>
        {/* <div className="m-2 rounded-lg border-2 border-cyan-500">
            <Image src='/sscHome.jpg' height={700} width={700} alt="HomePicture" className="rounded-lg"/>
        </div> */}
        <div className="min-h-screen">
          {isloading ? (
            <center>
              <div className="p-8 m-8">
                <Spinner
                  label="Loading..."
                  color="success"
                  size="lg"
                  className="m-8 p-8"
                />
              </div>
            </center>
          ) : (
            <div className="items-center justify-center flex flex-row flex-wrap  m-3">
              {entries.map((data) => (
                <Card_
                  userId={data._id}
                  username={data.username}
                  email={data.email}
                  admin={data.isAdmin}
                  key={data.email}
                  public_id={data.profile_picture}
                  className="m-3 w-auto"
                />
              ))}
            </div>
          )}
        </div>
        <center>
          <PaginationControls
            urlfor="about"
            hasNextPage={end < Data.length}
            hasPrevPage={start > 0}
          />
        </center>
        
      </div>
      <Footer_ />
    </NextUIProvider>
  );
}

export default About;
