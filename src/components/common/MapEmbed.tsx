"use client";
import React from "react";

const MapEmbed = () => {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15936.765476891006!2d124.7700002!3d-1.2682005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3287761234567890%3ADesa%20Seretan!5e0!3m2!1sid!2sid!4v1234567890123"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
