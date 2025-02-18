import React from "react";

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <p className="text-center text-base text-body-color dark:text-white">
      &copy; {currentYear} SafariDesk. All rights reserved.
    </p>
  );
};

export default Copyright;
