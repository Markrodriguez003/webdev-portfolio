/* eslint-disable react/prop-types */
import { PaginationText } from "./PaginationTag.design";

function PaginationTag({ children }) {
  return (
    <>
      <PaginationText>
        <p>{children}</p>
      </PaginationText>
    </>
  );
}

export default PaginationTag;
