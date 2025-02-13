import { forwardRef, type ComponentPropsWithoutRef } from "react";

type InputPropsType = {
  element: "input";
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

type TextareaPropsType = {
  element: "textarea";
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"textarea">;

type InputProps = InputPropsType | TextareaPropsType;

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  ({ label, id, element, ...props }, ref) => {
    const className = `focus:outline-none focus:border-amber-500 border border-stone-500 bg-stone-50 rounded-md p-2`;
    const textareaClass = className + " h-32";

    return (
      <div className="flex flex-col gap-3">
        <label htmlFor={id} className="font-semibold text-xl capitalize">
          {label}
        </label>
        {element === "input" ? (
          <input
            {...(props as ComponentPropsWithoutRef<"input">)}
            ref={ref as React.Ref<HTMLInputElement>}
            id={id}
            className={className}
          />
        ) : (
          <textarea
            {...(props as ComponentPropsWithoutRef<"textarea">)}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            id={id}
            className={textareaClass}
          />
        )}
      </div>
    );
  }
);

export default Input;
