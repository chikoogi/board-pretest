import styled from "./style.ts";
import { ReactNode, TextareaHTMLAttributes } from "react";

interface StyledTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  helperText?: ReactNode;
}

const TextAreaStyledA = ({ value, helperText, ...props }: StyledTextAreaProps) => {
  return (
    <div css={styled.wrapper}>
      <textarea css={styled.textarea} rows={20} value={value} {...props} />
      {helperText && <div css={styled.helper}>{helperText}</div>}
    </div>
  );
};

export default TextAreaStyledA;
