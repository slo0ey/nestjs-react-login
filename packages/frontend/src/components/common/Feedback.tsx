import styled from "styled-components";

import ic_error from "@icons/error.svg";

type FeedbackProps = {
  status: "complete" | "pending" | "error";
  children: string | null;
};

const StyledWrapper = styled.div<{ hide: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  visibility: ${({ hide }) => (hide === "true" ? "hidden" : "visible")};
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

const Message = styled.span`
  color: red;
  font-size: 0.875rem;
`;

function Feedback({ status, children }: FeedbackProps) {
  return (
    <StyledWrapper hide={(status !== "error").toString()}>
      <Icon src={ic_error} />
      {status == "error" && <Message>{children}</Message>}
    </StyledWrapper>
  );
}

export default Feedback;
