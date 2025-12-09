"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <span>Alexandre MIONE</span>
          </div>

          <div className={styles.desktopLinks}>
            <Link href="#about" className={styles.navLink}>
              A propos
            </Link>
            <Link href="#skills" className={styles.navLink}>
              Compétences
            </Link>
            <Link href="#projects" className={styles.navLink}>
              Projets
            </Link>
            <Link href="#contact" className={styles.navLink}>
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={styles.menuButton}
            aria-label="Menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
          <div className={styles.mobileLinks}>
            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className={styles.mobileLink}
            >
              A propos
            </Link>
            <Link
              href="#skills"
              onClick={() => setIsOpen(false)}
              className={styles.mobileLink}
            >
              Compétences
            </Link>
            <Link
              href="#projects"
              onClick={() => setIsOpen(false)}
              className={styles.mobileLink}
            >
              Projets
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className={styles.mobileLink}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
