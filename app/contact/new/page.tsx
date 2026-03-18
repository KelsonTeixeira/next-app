import ContactForm from "@/app/_components/ContactForm";
import { createContactAction } from "../../actions/contacts";
import { getSession } from "@/app/_lib/session";
import { redirect } from "next/navigation";

const NewContactPage = async () => {
  const user = await getSession();
  if(!user) return redirect('/login');
  return (
    <div className="max-w-with mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">
        Create New Contact
      </h1>
      <ContactForm action={createContactAction} />
    </div>
  );
}

export default NewContactPage;