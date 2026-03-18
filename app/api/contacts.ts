import axios from "axios";
import { ContactType } from "../_types/ContactType";

const API_URL = "http://localhost:3001";

export const getContacts = async (userId: string) => {
  const getUrl = `${API_URL}/contacts?userId=${userId}`;
  const response = await axios.get(getUrl);
  return response.data;
}

export const getContactById = async (id: string) => {
  const getUrl = `${API_URL}/contacts?id=${id}`;
  const response = await axios.get(getUrl);
  return response.data[0];
}

export const createContact = async (contact: ContactType) => {
  const createUrl = `${API_URL}/contacts`;
  const response = await axios.post(createUrl , contact);
  return response.data;
}

export const updateContact = async (id: string, contact: ContactType) => {
  const updateUrl = `${API_URL}/contacts/${id}`;
  const response = await axios.put(updateUrl, contact);
  return response.data;
}

export const deleteContact = async (id: string) => {
  const updateUrl = `${API_URL}/contacts/${id}`;
  const response = await axios.delete(updateUrl);
  return response.data;
}