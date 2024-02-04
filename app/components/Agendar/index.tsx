"use client"

import React, { useEffect } from "react";


const Agendar = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-title font-bold text-primary">
            Agenda una llamada con nosotros
        </h1>
        <CalendlyEmbed url="https://calendly.com/grupocintec/30min?back=1&month=2024-02" />
        </div>
    );
}

const CalendlyEmbed = ({ url }:{url:string}) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head?.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={url}
      style={{ minHeight: "650px", width: "100%" }}
    ></div>
  );
};

export default Agendar;