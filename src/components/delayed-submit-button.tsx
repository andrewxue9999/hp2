"use client";

import { useFormStatus } from "react-dom";

type DelayedSubmitButtonProps = {
  className: string;
  idleLabel: string;
  pendingLabel: string;
};

export default function DelayedSubmitButton({
  className,
  idleLabel,
  pendingLabel,
}: DelayedSubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      className={className}
      disabled={pending}
      type="submit"
    >
      {pending ? pendingLabel : idleLabel}
    </button>
  );
}
