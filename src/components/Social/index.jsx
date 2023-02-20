import React, { createElement } from "react";
import { Link } from "react-router-dom";

// icon
import * as Icons from "react-icons/fa";

// api
import { Social_Media } from "../../api/Social";

export const SocialMedia = () => {
  return (
    <>
      {Social_Media.map((isd) => {
        const newIco = createElement(Icons[isd.toIcon], {
          style: { fontSize: "25px" },
        });
        return (
          <Link key={isd.id} target="_blank" to={isd.toUrl}>
            {newIco}
          </Link>
        );
      })}
    </>
  );
};
