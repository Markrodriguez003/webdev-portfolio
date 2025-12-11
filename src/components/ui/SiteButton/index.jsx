/* eslint-disable react/prop-types */
import { CustomAnchorBtn, CustomBtn } from "./SiteButton.design";
export default function SiteButton(props) {
  const { url, title, styling, icon, type, onClick } = props;

  return (
    <>
      {props.type && props.type.toLowerCase() === "anchor" ? (
        <CustomAnchorBtn
          styling={styling}
          href={url !== undefined ? url : ""}
          target="_blank"
          className={styling}
        >
          <span style={{ verticalAlign: "center" }}>{icon}</span>
          {title}
        </CustomAnchorBtn>
      ) : (
        <CustomBtn styling={styling} onClick={onClick}>
          <span style={{ verticalAlign: "center" }}>{icon}</span>
          {title}
        </CustomBtn>
      )}
    </>
  );
}

/*

   
      <CustomAnchorBtn
      styling={styling}
      href={url !== undefined ? url : ""}
      target="_blank"
      rel="noreferrer noopener"
    >
      <button className={styling}>
        <span style={{ verticalAlign: "bottom" }}>{icon}</span>
        {title}
      </button>
    </CustomAnchorBtn>

*/
