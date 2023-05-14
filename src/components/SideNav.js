import React from 'react';

const SideNav = ({SideNav}) => {
  return (
    <div className={SideNav?"sidebar sidebar--open":"sidebar"}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default SideNav;