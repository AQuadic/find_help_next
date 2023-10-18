"use client";
import React from "react";
import Script from "next/script";
import { RecoilRoot } from "recoil";
import Layout2 from "./Layout2";

function Layout({ children, lang }) {
  return (
    <>
      <RecoilRoot>
        <Layout2 lang={lang}>{children}</Layout2>

        <Script async src="/js/jquery-3.6.1.min.js" />
      </RecoilRoot>
    </>
  );
}

export default Layout;
