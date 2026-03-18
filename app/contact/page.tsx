import { redirect } from "next/navigation";
import { getSession } from "../_lib/session";
import { getContacts } from "../api/contacts";
import Link from "next/link";
import ContactList from "../_components/ContactList";

const ContactPage = async () => {
  const user = await getSession();
  if (!user) redirect('/login');

  const contacts = await getContacts(user.id);

  if (!contacts || contacts.length === 0) {
    return (
      <div className="text-center mt-10">
        <p>Please, add some contact.</p>
        <Link href="/contact/new" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Contact
        </Link>
      </div>
    );
  } else {
    return (
      <div className="text-center">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl">Your Contacts</h1>
          <Link href="/contact/new" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add Contact
          </Link>
        </div>
        <ContactList contacts={contacts} />
      </div>
    );
  }
};

export default ContactPage;