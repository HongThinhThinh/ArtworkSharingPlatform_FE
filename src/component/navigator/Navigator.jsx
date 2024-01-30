import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navigator.scss";
import { navFooterConfig, navHeaderConfig } from "./config";
import { useMediaQuery } from "react-responsive";
import { motion, useCycle } from "framer-motion";
import { MobileNav } from "./MobileNav";
import { MenuToggle } from "./MenuToggle";
import { Button, Drawer } from "antd";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
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
        <motion.nav animate={isOpen ? "open" : "closed"}>
          <Button>
            <MenuToggle
              style={{ zIndex: 10 }}
              toggle={() => setIsOpen(!isOpen)}
            />
          </Button>
          <Drawer
            placement="left"
            closable={false}
            open={isOpen}
            key="left"
            className="rs-nav-header"
          >
            {navList.map((nav) => (
              <Link className="navigator__nav" to={nav.path} key={nav.title}>
                {nav.title}
              </Link>
            ))}
          </Drawer>
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
