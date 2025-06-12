import React from "react";

export default function LogoDivmacDark() {
  return (
    <svg
      width="200"
      height="60"
      viewBox="0 0 400 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="400" height="120" fill="rgb(36, 48, 63)" rx="8"></rect>
      <text
        x="200"
        y="50"
        fontFamily="Arial, sans-serif"
        fontSize="28"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
        letterSpacing="2px"
      >
        IMPROVING TOGETHER
      </text>
      <defs>
        <linearGradient id="darkDivider" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#dc2626" }}></stop>
          <stop offset="50%" style={{ stopColor: "white" }}></stop>
          <stop offset="100%" style={{ stopColor: "#dc2626" }}></stop>
        </linearGradient>
      </defs>
      <rect
        x="50"
        y="65"
        width="280"
        height="3"
        fill="url(#darkDivider)"
        rx="1.5"
      ></rect>
      <text
        x="195"
        y="95"
        fontFamily="Arial, sans-serif"
        fontSize="18"
        fill="#e5e7eb"
        textAnchor="middle"
        letterSpacing="1px"
      >
        www.divmac.pt
      </text>
    </svg>
  );
}
