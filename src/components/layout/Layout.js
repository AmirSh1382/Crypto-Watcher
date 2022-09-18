import React, { useState } from "react";

// Components
import Header from "./Header";
import Footer from "./Footer";

// MUI Icons
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Layout = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  window.addEventListener("scroll", () => {
    setScrollY(window.scrollY);
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      <Footer />

      {/* to show scroll to top btn based on scrollY */}
      {scrollY > 600 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed text-white bottom-10 left-8 rounded-full bg-amber-300
            text-zinc-900 p-1 cursor-pointer active:scale-75 transition duration-100"
        >
          <KeyboardArrowUpIcon />
        </button>
      )}
    </div>
  );
};

export default Layout;