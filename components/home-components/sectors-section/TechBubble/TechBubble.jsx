import React from "react";

export default function CompanyBubble(props) {

  return (
    <div
      style={{
        backgroundColor: props.backgroundColor + "d0",
      }}
      className={"companyBubble"}
    >
      {true ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            transition: "opacity 0.1s ease",
            opacity: props.bubbleSize > 50 ? 1 : 0,
            pointerEvents: "none",
          }}
        >
          <img
            src={`images/companyLogos/${props.symbol}.svg`}
            alt=""
            style={{
              width: 50,
              borderRadius: `50%`,
              marginBottom: 10,
            }}
          ></img>
          <p
            style={{
              color: props.textColor,
              fontSize: 14,
              marginBottom: 6,
              fontWeight: 1000,
              maxWidth: 150,
              textAlign: "center",
            }}
          >
            {props.name}
          </p>
        </div>
      ) : null}
    </div>
  );
}
