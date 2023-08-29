import React from "react";
import SideMenu from "./components/SideMenu";
import HeaderPart from "./components/HeaderPart";
import MainPageCards from "./components/MainPageCards";
import { useHooks } from "./hooks/useHooks";

const TestPage = () => {
  const { menu, setMenu, selection, setSelection, colorStep, setColorStep } =
    useHooks();
  return (
    <>
      <section style={{ display: "flex" }}>
        <SideMenu
          menu={menu}
          setMenu={setMenu}
          selection={selection}
          setSelection={setSelection}
        />
        <section className="main-page">
          <HeaderPart />
          <MainPageCards
            selection={selection}
            colorStep={colorStep}
            setColorStep={setColorStep}
          />
        </section>
      </section>
    </>
  );
};

export default TestPage;
