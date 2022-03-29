import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { DUMMY_DB } from "./shared";
import { RecentProjectSec } from "./components/RecentProjectSec";
import { CertificationSec } from "./components/CertificationSec";
import { WpSec } from "./components/WpSec";
import { SkillsSec } from "./components/SkillSec";
import { WtSec } from "./components/WtSec";
import { LandingSec } from "./components/LandingSec";
import { useEffect, useRef } from "react";
import { gsap, Power1 } from "gsap";
import { Container } from "react-bootstrap";

function App() {
  const loadingRef = useRef(null);

  useEffect(() => {
    const t1 = gsap.timeline({ defaults: { ease: Power1.easeOut } });

    t1.to(document.body, {
      overflow: "hidden",
    }).to(loadingRef.current, {
      y: "-100%",
      duration: 0.4,
      delay: 2,
    });

    t1.to(document.body, {
      overflow: "scroll",
    });
  }, []);

  return (
    <>
      <LandingSec innerRef={loadingRef} />
      <Header />
      <Container>
        <WpSec />
        <RecentProjectSec data={DUMMY_DB.projects} />
        <CertificationSec data={DUMMY_DB.certifications} />
        <SkillsSec data={DUMMY_DB.skills} />
        <WtSec />
      </Container>
      <Footer />
    </>
  );
}

export default App;
