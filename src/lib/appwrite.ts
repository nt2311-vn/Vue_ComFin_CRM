import { Client, Account } from "appwrite";
const appwriteId = import.meta.env.VITE_APPWRITE_PROJECT_ID;

export const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject(appwriteId);

export const account = new Account(client);
export { ID } from "appwrite";
