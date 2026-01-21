import React, { useRef } from 'react';
function InputFocus() {
const inputRef =useRef();
const focusInput = () => {
inputRef.current.focus();
};
return (
  <>
<input ref={inputRef} />
<button onClick={focusInput}>Focus Input</button>
</>
);
}
export default InputFocus;
