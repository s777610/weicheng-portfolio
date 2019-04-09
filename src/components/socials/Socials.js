import React from "react";
import SOCIAL_PROFILES from "../../data/socialProfiles";
import Social from "./Social";

const Socials = () => {
  return (
    <div>
      {SOCIAL_PROFILES.map(social => {
        return <Social key={social.id} social={social} />;
      })}
    </div>
  );
};

export default Socials;
