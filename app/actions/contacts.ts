"use server";
import { revalidatePath } from "next/cache";
import { deleteContact, createContact, updateContact } from "../api/contacts";
import { getSession } from "../_lib/session";
import { ContactType } from "../_types/ContactType";
import { ActionResultType } from "../_types/ActionResultType";

export const createContactAction = async (
   state: ActionResultType,
   formData: FormData
) => {
   if(!formData) return {error: 'Form data is missing!'};

   const user = await getSession();

   const newContact:ContactType = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      userId: user?.id || undefined,
   };

   try {
      await createContact(newContact);
      revalidatePath('/contact');
      return { success: true };
   } catch (error) {
      console.log('Error to create contact: ', error);
      return { error: 'failed to create contact' };
   }
}

export const updateContactAction = async (
   state: ActionResultType,
   formData: FormData
) => {
   if(!formData) return {error: 'Form data is missing!'};

   const user = await getSession();
   const id = formData.get('id') as string;

   const updatedContact:ContactType = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      userId: user?.id || undefined,
   };

   try {
      await updateContact(id, updatedContact);
      revalidatePath('/contact');
      return { success: true };
   } catch (error) {
      console.log('Error to update contact: ', error);
      return { error: 'failed to update contact' };
   }
}

export const deleteContactAction = async (
   state: ActionResultType,
   formData: FormData
) => {
   const id = formData.get('id') as string;
   try {
      await deleteContact(id);
      revalidatePath('/contact');
      return { success: true };
   } catch (error) {
      console.log('Error to delete contact: ', error);
      return { error: 'failed to delete contact' };
   }
}