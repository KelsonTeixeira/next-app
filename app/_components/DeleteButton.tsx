"use client";

import { useActionState } from "react";
import { ContactType } from "../_types/ContactType";
import { FiTrash2 } from "react-icons/fi";
import { ActionResultType } from "../_types/ActionResultType";

type DeleteButtonProps = {
  action: (state: ActionResultType | null, formData: FormData) => Promise<ActionResultType | null>;
  contact?: ContactType;
};

const DeleteButton = ({ action, contact }: DeleteButtonProps) => {
  const [, formAction] = useActionState(action, null);
  return (
    <form action={formAction} method="post">
      <input type="hidden" name="id" value={contact?.id} />
      <button 
        type="submit" 
        className="border border-red-500 text-red-500 flex items-center py-1 px-2 rounded-md cursor-pointer hover:bg-red-200"
        onClick={e => {
          if(!confirm("Are you sure you want to delete this contact?")) {
            e.preventDefault();
          }
          
        }}  
      >
        <FiTrash2 className="text-red-500 text-lg mr-2" /> Delete
      </button>
    </form>
  );
}

export default DeleteButton;