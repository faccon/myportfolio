import "./App.css";
import { Header } from "./Views/Header";
import { Footer } from "./Views/Footer";
import { RecentProjectSec } from "./Views/RecentProjectSec";
import { CertificationSec } from "./Views/CertificationSec";
import { WpSec } from "./Views/WpSec";
import { SkillsSec } from "./Views/SkillSec";
import { WtSec } from "./Views/WtSec";
import { LandingSec } from "./Views/LandingSec";
import { useEffect, useRef, useState } from "react";
import { gsap, Power1 } from "gsap";
import { Container } from "react-bootstrap";
import { ModalCom } from "./Views/ModalCom";
import { dataProps, ProjectItemProps } from "../types";

function App() {
  const loadingRef = useRef(null);
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ProjectItemProps | undefined>();
  const [data, setdata] = useState<dataProps>();

  useEffect(() => {
    fetch("https://0c6e7a2b.eu-gb.apigw.appdomain.cloud/api/data/") // Personal API
      .then((res) => res.json())
      .then((res) => {
        setdata(res.data);
      });
  }, []);

  useEffect(() => {
    const t1 = gsap.timeline({ defaults: { ease: Power1.easeOut } });

    if (data) {
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
    }
  }, [data]);


  function modaltoggler(itemObject: ProjectItemProps | undefined) {
    setModalShow(!modalShow);
    setModalData(itemObject);
  }

  return (
    <>
      <LandingSec innerRef={loadingRef} />
      <Header />
      <Container>
        <WpSec />
        <RecentProjectSec
          Dialog={(itemObject) => modaltoggler(itemObject)}
          data={data?.projects}
        />
        <CertificationSec data={data?.certifications} />
        <SkillsSec data={data?.skills} />
        <WtSec />
        <ModalCom
          data={modalData}
          show={modalShow}
          toggle={() => modaltoggler(undefined)}
        />
      </Container>
      <Footer />
    </>
  );
}

export default App;
