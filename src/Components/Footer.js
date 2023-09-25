import React from "react";
function Footer() {
  return (
    <footer className="container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        Designed and Coded by{" "}
        <a
          className="font-medium"
          href="https://react-portfolio-a6pcki9a5-waykosabhi.vercel.app/"
          target="_blank"
          rel=""
        >
          Abhishek Waykos
        </a>{" "}
      </p>
    </footer>
  );
}
export default Footer;
