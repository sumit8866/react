import React from "react";

export const Image = () => {
    return (
      <img
        className="size-96 object-cover object-bottom"
        src="https://images.unsplash.com/photo-1739433438331-e50bb5467531?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    );
  };
  
  export const Profile = () => {
    return (
      <div>
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
      </div>
    );
  };