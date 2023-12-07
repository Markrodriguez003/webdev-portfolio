/* eslint-disable react/prop-types */
import { CustomButton } from "./SiteButton.design";
export default function SiteButton(props) {
  const { url, title, styling, icon } = props;

  return (
    <>
      {/* //TODO PREVENT DEFAULT */}
      <CustomButton
        styling={styling}
        href={url !== undefined ? url : "#"}
        target="_blank"
        rel="noreferrer noopener"
      >
        <button className={styling}>
          <span style={{ verticalAlign: "bottom" }}>{icon}</span>
          {title}
        </button>
      </CustomButton>
    </>
  );
}
