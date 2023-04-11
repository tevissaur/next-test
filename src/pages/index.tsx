import { type NextPage } from "next";
import { useSession, signOut, signIn } from "next-auth/react";
import Head from "next/head";
import { Component } from "react";
import Header from "~/components/header";
import Layout from "~/components/layout";
import { api } from "~/utils/api";
import AboutMe from "./about-me";

const Home: NextPage = (props) => {
  return (
    <AboutMe />
  );
};

export default Home;