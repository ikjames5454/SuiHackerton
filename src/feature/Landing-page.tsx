import React from 'react'
import Footer from "@/components/footer-section/Footer";
import Header from "@/components/header-section/Header";
import Outlet from "@/components/Outlet/index";

function landingPage() {
  return (
    <>
      <Header/>
      <Outlet/>
     <Footer/>
    </>
  )
}

export default landingPage
