import React from "react";
import SideMenu from "./components/SideMenu";
import HeaderPart from "./components/HeaderPart";
import MainPageCards from "./components/MainPageCards";

const TestPage = () => {
  return (
    <>
      <section style={{ display: "flex" }}>
        <SideMenu />
        <section className="main-page">
          <HeaderPart />
          <MainPageCards />
        </section>
      </section>
    </>
  );
};

export default TestPage;
