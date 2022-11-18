import React from "react";

const Links = ({ data }) => {
  return (
    <div className="links">
      {data.map(
        (item, i) =>
          !!item.title && (
            <a key={i} href={!!item.pdf ? item.pdf : `./assets/pdf/Том${i + 1}.pdf`}>
              {item.title}
            </a>
          )
      )}
    </div>
  );
};

export default Links;
