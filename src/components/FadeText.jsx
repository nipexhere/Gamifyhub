import { useState, useEffect } from "react";

const FadeText = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    return () => setVisible(false); // Fade out when unmounting
  }, []);

  return (
    <h1
      className={`text-blue-800 text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      FAVORITE ONLINE <br />
      <span className="bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text">
        VIRTUAL GAMING PLATFORM
      </span>
    </h1>
  );
};

export default FadeText;
