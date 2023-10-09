import { useEffect, useState } from "react";
import { Navbar } from "./components/layout/navbar/Navbar";
import { HomePage } from "./components/layout/pages/HomePage";
import { LeadMagnet } from "./components/ui/leadMagnet/LeadMagnet";

function App() {
  const [showLeadMagnet, setShowLeadMagnet] = useState(false);

  const handleShowLeadMagnet = () => {
    setShowLeadMagnet(true);
  };
  const handleHideLeadMagnet = () => {
    setShowLeadMagnet(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleShowLeadMagnet();
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="wrapper">
      {showLeadMagnet && (
        <LeadMagnet handleHideLeadMagnet={handleHideLeadMagnet} />
      )}
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
