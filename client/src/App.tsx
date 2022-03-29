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
import { useEffect, useRef, useState } from "react";
import { gsap, Power1 } from "gsap";
import { Container } from "react-bootstrap";
import { ModalCom } from "./components/ModalCom";
import { ProjectItemProps } from "../types";

function App() {
  const loadingRef = useRef(null);
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [data, setdata] = useState<ProjectItemProps | undefined>();

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

  function modaltoggler(itemObject: ProjectItemProps | undefined) {
    setModalShow(!modalShow);
    setdata(itemObject);
  }

  return (
    <>
      <LandingSec innerRef={loadingRef} />
      <Header />
      <Container>
        <WpSec />
        <RecentProjectSec
          Dialog={(itemObject) => modaltoggler(itemObject)}
          data={DUMMY_DB.projects}
        />
        <CertificationSec data={DUMMY_DB.certifications} />
        <SkillsSec data={DUMMY_DB.skills} />
        <WtSec />
        <ModalCom data={data} show={modalShow} toggle={() => modaltoggler(undefined)} />
      </Container>
      <Footer />
    </>
  );
}

export default App;
