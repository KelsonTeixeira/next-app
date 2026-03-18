"use client";
import { useActionState, useEffect } from "react";
import { ContactType } from "../_types/ContactType";
import { useRouter } from "next/navigation";
import { ActionResultType } from "../_types/ActionResultType";

type CreateFormProps = {
  action: (state: ActionResultType | null, formData: FormData) => Promise<ActionResultType | null>;
  contact?: ContactType;
};

const ContactForm = ({ action, contact }: CreateFormProps) => {
  const router = useRouter();
  const [state, formAction] = useActionState(action, null);

  useEffect(() => {
    if (state?.success) {
      router.push("/contact");
    }
  }, [state, router]);

  console.log(contact)

  return (
    <form action={formAction} className="space-x-4">
      <input type="hidden" name="id" value={contact?.id || ''} />
      <div>
        <label className="block text-sm font-medium text-gray-700" htmlFor="email">
          Name
        </label>
        <input
          type="name"
          name="name"
          id="name"
          defaultValue={contact?.name || ''}
          placeholder="Enter contact name"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
      </div>
      <div className="mt-3">
        <label className="block text-sm font-medium text-gray-700" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          defaultValue={contact?.email || ''}
          placeholder="Enter contact email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
      </div>
      <div className="mt-3">
        <label className="block text-sm font-medium text-gray-700" htmlFor="email">
          Phone
        </label>
        <input
          type="phone"
          name="phone"
          id="phone"
          defaultValue={contact?.phone || ''}
          placeholder="Enter Contact phone"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
      </div>
      {state?.error && (
        <div className="text-red-500 text-sm">{state.error}</div>
      )}
      <button type="submit" className="w-full mt-3 flex justify-center border border-transparent bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Save Contact
      </button>
    </form>
  )
};

export default ContactForm;