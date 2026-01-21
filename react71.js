
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

function MyForm() {
  async function submit() {
    await new Promise((res) => setTimeout(res, 2000));
  }

  return (
    <form action={submit}>
      <SubmitButton />
    </form>
  );
}

export default MyForm;
