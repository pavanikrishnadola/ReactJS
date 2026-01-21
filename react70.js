
import React,{ useActionState }from "react";
async function saveData (prevState, formData) {
const name =formData.get("name");
await new Promise(res => setTimeout (res, 1000)); // simulate API
return `Saved: ${name}`;
}
function FormExample() {
const [state, action, isPending] = useActionState (saveData, "");
return (
<form action={action}>
<input name="name" />
<button disabled={isPending}>Submit</button>
<p>{state}</p>
</form>
);
}
export default FormExample;
