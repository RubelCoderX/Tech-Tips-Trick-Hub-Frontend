"use client";

import { Suspense } from "react";

import Component from "./_component";

const LoginPage = () => {
  return (
    <Suspense fallback={<h1>loading...</h1>}>
      <Component />
    </Suspense>
  );
};

export default LoginPage;
