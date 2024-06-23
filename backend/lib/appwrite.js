import { Client, Account } from "appwrite";

export const client = new Client();

client
	.setEndpoint("https://cloud.appwrite.io/v1")
	.setProject("66763de50013d9eedf52");

export const account = new Account(client);
export { ID } from "appwrite";
