import React from "react";
import { Link } from "react-router-dom";
import "./Navigator.scss";
import { navFooterConfig, navHeaderConfig } from "./config";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

function Navigator({ status }) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 920 });
  const navList = status == "footer" ? navFooterConfig : navHeaderConfig;
  const isFooter = status == "footer";
  return (
    <div id={`${isFooter ? "footer" : "header"}`} className="navigator">
      {isFooter ? (
        navList.map((nav) => (
          <Link className="navigator__nav" to={nav.path} key={nav.title}>
            {nav.title}
          </Link>
        ))
      ) : isMobile ? (
        <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
          {/* <Toggle onClick={() => setIsOpen((isOpen) => !isOpen)} /> */}
          {/* <Items /> */}
        </motion.nav>
      ) : ( 
          navList.map((nav) => (
          <Link className="navigator__nav" to={nav.path} key={nav.title}>
            {nav.title}
          </Link>
        ))
      )}
    </div>
  );
}

export default Navigator;