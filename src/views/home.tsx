import { useState, useEffect } from "react";
import Logo from "../components/logo";
import TerminalLoading from "../components/terminalLoading";

function Home() {
  const [showLogo, setShowLogo] = useState(false);

  // Check for existing cookie on component mount
  useEffect(() => {
    const hasSeenLoading = getCookie("flukejs_loading_complete");
    if (hasSeenLoading === "true") {
      setShowLogo(true);
    }
  }, []);

  const handleRedirect = () => {
    setShowLogo(true);
    // Set cookie to expire in 24 hours
    setCookie("flukejs_loading_complete", "true", 0.5);
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

// Helper functions for cookie management
function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name: string): string | null {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export default Home;