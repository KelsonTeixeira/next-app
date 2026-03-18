"use server";
import axios from "axios";
import { redirect } from "next/navigation";
import { setSession, deleteSession } from "../_lib/session";

import { UserType } from "../_types/UserType";

const API_URL = "http://localhost:3001";

const _adptUser = (user: UserType) => ({
  id: user.id,
  name: user.name,
  email: user.email
});

export const loginAction = async (formData: FormData ) => {
  let allowRedirect = false;
  try {
    const getUrl = `${API_URL}/users?email=${formData.get('email')}&password=${formData.get('password')}`;
    const response = await axios.get(getUrl);
    const user: UserType = response.data[0];
    if(!user) throw new Error("Invalid credentials");
    await setSession(_adptUser(user));
    allowRedirect = true;
  } catch (error) {
    console.error("Login error:", error);
  }
  if(allowRedirect) redirect('/contact');
}

export const logoutAction = async () => {
  await deleteSession();
  redirect('/login');
};