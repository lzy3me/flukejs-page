import { useState } from "react";
import Logo from "../components/logo";
import TerminalLoading from "../components/terminalLoading";

function Home() {
  const [showLogo, setShowLogo] = useState(false);

  const handleRedirect = () => {
    setShowLogo(true);
  };

  return (
    <main>
      {!showLogo ? (
        <TerminalLoading onRedirect={handleRedirect} />
      ) : (
        <Logo />
      )}
    </main>
  );
}

export default Home;