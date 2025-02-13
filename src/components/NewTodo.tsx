import { useRef, type FormEvent } from "react";
import Button from "./Button";
import Input from "./Input";

import { type Todo } from "../App";

interface NewTodoProps {
  onAddTodo: (todo: Todo) => void;
  onCancelTodo: () => void;
}

export default function NewTodo({ onAddTodo, onCancelTodo }: NewTodoProps) {
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);
  const duedate = useRef<HTMLInputElement>(null);

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !title.current!.value ||
      !description.current!.value ||
      !duedate.current!.value
    )
      return;

    const newTodo = {
      id: String(Math.random()),
      title: title.current!.value,
      description: description.current!.value,
      dueDate: duedate.current!.value,
    };

    onAddTodo(newTodo);
  };

  return (
    <form onSubmit={handleSave} className="bg-amber-50 w-full py-10 px-14">
      <div className="flex flex-col gap-6">
        <Input
          type="text"
          element="input"
          label="title"
          id="title"
          placeholder="Write your goal here..."
          ref={title}
        />
        <Input
          element="textarea"
          label="description"
          id="description"
          ref={description}
        />
        <Input
          type="date"
          element="input"
          label="due date"
          id="duedate"
          ref={duedate}
        />
        <div className="flex gap-2 justify-end">
          <Button variant="primary" type="submit" addStyle="w-32">
            Save
          </Button>
          <Button
            variant="secondary"
            type="button"
            addStyle="w-32"
            onClick={onCancelTodo}
          >
            Cancel
          </Button>
        </div>
      </div>
    </form>
  );
}
