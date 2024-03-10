/* eslint-disable react/prop-types */
import { CustomAnchorBtn, CustomBtn } from "./SiteButton.design";
export default function SiteButton(props) {
  const { url, title, styling, icon, type } = props;

  // function buttonInfo(event) {
  //   console.log(`button clicked::: `, event);
  //   event.preventDefault();
  //   event.stopPropagation();
  //   return 0;
  // }

  return (
    <>
      {props.type.toLowerCase() === "anchor" ? (
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
      ) : (
        // <CustomBtn styling={styling} onClick={(event) => buttonInfo(event)}>
        <CustomBtn styling={styling}>
          <span style={{ verticalAlign: "bottom" }}>{icon}</span>
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
