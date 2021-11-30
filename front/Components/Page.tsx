import { GlobalStyles } from "@/styles/ThemeConfig";
import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Index from "./Index";
import Head from "next/head";
import styled from "styled-components";

const Page: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>BlueCIT | Cybersecurity & Software Development</title>
        <meta name='google' content='nositelinkssearchbox' key='sitelinks' />
        <meta name='google' content='notranslate' key='notranslate' />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Page;
