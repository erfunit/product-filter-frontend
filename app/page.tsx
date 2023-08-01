"use client";
import React, { useEffect } from "react";
import { NextRouter, useRouter } from "next/router";
import { redirect } from "next/navigation";
const HomePage = () => {
  // const { push } = useRouter() as NextRouter;

  useEffect(() => {
    redirect("/admin");
  }, []);

  return <div>HomePage</div>;
};

export default HomePage;
