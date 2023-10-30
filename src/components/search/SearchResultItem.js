import React from "react";

function SearchResultItem({ result }) {
  return (
    <article className="margin-bottom-10" data-testid="search-result">
      <a
        target="_self"
        href={result.link}
        className="itemContainer text--linkReset"
        data-testid={`search-result-item-link-${result.identifier}`}
        aria-label={`Link to ${result.title}`}
      >
        <div className="itemContent">
          <span
            className={`item__icon iconSprite iconSprite--study${
              result.premium ? "Premium" : "Basis"
            }`}
            role="img"
            aria-label="Content type icon"
          ></span>
          <time
            className="item__text"
            data-testid={`search-result-item-date-${result.identifier}`}
          >
            Report | {result.date}
          </time>
          <div
            className="itemContent__text"
            data-testid={`search-result-item-title-${result.identifier}`}
          >
            {result.title}
          </div>
          <p className="itemContent__subline">
            <span
              data-testid={`search-result-item-description-${result.identifier}`}
            >
              {result.description}
            </span>
          </p>
        </div>
      </a>
    </article>
  );
}

export default SearchResultItem;
