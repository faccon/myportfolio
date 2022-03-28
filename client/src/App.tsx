import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { DUMMY_DB } from "./shared";
import { RecentProjectSec } from "./components/RecentProjectSec";
import { CertificationSec } from "./components/CertificationSec";
import { WpSec } from "./components/WpSec";
import { SkillsSec } from "./components/SkillSec";
import { WtSec } from "./components/WtSec";

// import { Certifications } from "";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <WpSec />
      <RecentProjectSec data={DUMMY_DB.projects} />
      <CertificationSec data={DUMMY_DB.certifications} />
      <SkillsSec data={DUMMY_DB.skills} />
      <WtSec />
    </div>
  );
}

export default App;
