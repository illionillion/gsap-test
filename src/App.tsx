import React, { ReactElement, useEffect, useRef } from "react";
import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const App = (): ReactElement => {

  const pText = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    setAnimation();

    gsap.to(pText.current, {
      color: '#fff',
      backgroundImage: "linear-gradient(to left, #30CFD0, #330867)",
      duration: 5
    });
    
  }, [pText]);

  const setAnimation = () => {
    gsap.fromTo(
      "#wrapper-a p",
      { opacity: 0, y: 10 }, //fromの設定
      {
        //toの設定
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: "#wrapper-a",
          start: "top center", //要素のトップが、画面の中央まできたら開始
          end: "bottom center", //要素のボトムが、画面の中央まできたら終了
          onEnter: () => {
            console.log("scroll In");
          },
          onEnterBack: () => {
            console.log("scroll Back");
          },
        },
      }
    );
  };
  return (
    <div className="App">
      <div className="wrapper" id="wrapper-a">
        <p ref={pText}>TEST ANIMATION</p>
      </div>
    </div>
  );
};

export default App;
