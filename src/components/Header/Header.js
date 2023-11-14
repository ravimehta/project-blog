import React from "react";
import clsx from "clsx";
import { Rss, Sun, Moon } from "react-feather";

import Logo from "@/components/Logo";
import VisuallyHidden from "@/components/VisuallyHidden";

import styles from "./Header.module.css";
import DarkLightToggle from "../DarkLightToggle/DarkLightToggle";

function Header({ theme, className, ...delegated }) {
  return (
    <header className={clsx(styles.wrapper, className)} {...delegated}>
      <Logo />

      <div className={styles.actions}>
        <a className={styles.action} href="/rss.xml" target="_blank">
          <Rss
            size="1.5rem"
            style={{
              // Optical alignment
              transform: "translate(2px, -2px)",
            }}
          />
          <VisuallyHidden>View RSS feed</VisuallyHidden>
        </a>
        {/* <button className={styles.action}>
          <Sun size="1.5rem" />
          <VisuallyHidden>
            Toggle dark / light mode
          </VisuallyHidden>
        </button> */}
        <DarkLightToggle initialTheme={theme} className={styles.action} />
      </div>
    </header>
  );
}

export default Header;
