import React from "react";

function LoadingSpinner() {
  return (
    <div
      className="searchLoading__overlay"
      data-testid="loading-spinner"
      role="dialog"
      aria-modal={true}
    >
      <div className="searchLoading__wrapper fadeIn z-index-1" tabIndex="-1">
        <div className="cssPreloader" aria-label="Loading, please wait">
          <div className="cssPreloader__inner"></div>
        </div>
        <div className="h5 subline margin-bottom-0">please wait</div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
