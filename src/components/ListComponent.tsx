import React from "react";

interface ListItem {
  text: string;
}

const listItems: ListItem[] = [
  { text: "A136P1KFA1C_2866415.svg" },
  { text: "A136P1KFA1C_2866415.svg" },
];

const ListComponent: React.FC = () => {
  return (
    <div className="mx-auto flex max-w-xl flex-col rounded-lg bg-white text-center shadow-default dark:bg-boxdark">
      <ul className="mb-3 flex flex-col">
        {listItems.map((item, index) => (
          <li
            key={index}
            className="flex gap-2.5 border-b border-stroke px-5 py-3 last:border-b-0 dark:border-strokedark"
          >
            <span className="text-primary">
              <svg
                className="fill-current"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1890_16515)">
                  <path
                    d="M10.8672 0.949463C5.64844 0.949463 1.42969 5.16821 1.42969 10.387C1.42969 15.6057 5.64844 19.8557 10.8672 19.8557C16.0859 19.8557 20.3359 15.6057 20.3359 10.387C20.3359 5.16821 16.0859 0.949463 10.8672 0.949463ZM10.8672 18.4495C6.42969 18.4495 2.83594 14.8245 2.83594 10.387C2.83594 5.94946 6.42969 2.35571 10.8672 2.35571C15.3047 2.35571 18.9297 5.98071 18.9297 10.4182C18.9297 14.8245 15.3047 18.4495 10.8672 18.4495Z"
                    fill=""
                  />
                  <path
                    d="M13.5549 7.48076L9.83611 11.1058L8.14861 9.44951C7.86736 9.16826 7.42986 9.19951 7.14861 9.44951C6.86736 9.73076 6.89861 10.1683 7.14861 10.4495L9.14861 12.387C9.33611 12.5745 9.58611 12.6683 9.83611 12.6683C10.0861 12.6683 10.3361 12.5745 10.5236 12.387L14.5549 8.51201C14.8361 8.23076 14.8361 7.79326 14.5549 7.51201C14.2736 7.23076 13.8361 7.23076 13.5549 7.48076Z"
                    fill=""
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1890_16515">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0.867188 0.386963)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            {/* <a
              href={item.text}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] text-black underline dark:text-white"
            > */}
            <a
              href={
                "https://pintobrasilsgps.sharepoint.com/sites/AreadeClienteDivmac/Documentos%20Partilhados/Forms/AllItems.aspx?OR=Teams%2DHL&CT=1663580941780&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIyNy8yMjA3MzEwMTAwNSIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D&noAuthRedirect=1&id=%2Fsites%2FAreadeClienteDivmac%2FDocumentos%20Partilhados%2FBosch%20Chassis%20Systems%20India%2F221182%20Posto%20Labeling%20%28PO%2D0087347333%29%2F221182%20Posto%20Labeling%20%28PO%2D0087347333%29%2FPAK50%20STATION%20230738%2D01%20EN%2Epdf&viewid=e4ef741d%2De31b%2D47d6%2Da553%2D7105f160bc7a&parent=%2Fsites%2FAreadeClienteDivmac%2FDocumentos%20Partilhados%2FBosch%20Chassis%20Systems%20India%2F221182%20Posto%20Labeling%20%28PO%2D0087347333%29%2F221182%20Posto%20Labeling%20%28PO%2D0087347333%29"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] text-black underline dark:text-white"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
