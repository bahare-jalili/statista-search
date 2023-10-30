import React from "react";

function Alert({ message, type }) {
  const setColor = (type) => {
    switch (type) {
      case "success":
        return "green";
      case "error":
        return "red";
      case "warning":
        return "orange";
      default:
        return "black";
    }
  };
  return (
    <section className="searchApp__alerts">
      <div
        className="panelCard padding-all-20"
        data-testid="no-results-alert"
        role="alert"
      >
        <div style={{ color: setColor(type), fontWeight: "bold" }}>
          {message}
        </div>
      </div>
    </section>
  );
}

export default Alert;
