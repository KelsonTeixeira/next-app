import { updateContactAction } from "@/app/actions/contacts";
import ContactForm from "@/app/_components/ContactForm";
import { getContactById } from "@/app/api/contacts";
import { getSession } from "@/app/_lib/session";
import { redirect } from "next/navigation";

const EditContactPage = async ({params}: {params: Promise<{ id: string }>;}) => {
  const user = await getSession();
  if(!user) return redirect('/login');

  const { id } = await params;
  const contact = await getContactById(id);
  return (
    <div className="max-w-with mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">
        Edit Contact
      </h1>
      <ContactForm action={updateContactAction} contact={contact} />
    </div>
  );
}

export default EditContactPage;