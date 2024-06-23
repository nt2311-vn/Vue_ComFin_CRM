import { Account, Client } from "appwrite";

export const useAppwriteService = (runtimeConig) => {
	const { AppwriteEndpoint, AppwriteProjectId } = runtimeConig;

	const client = new Client();
	client.setEndpoint(AppwriteEndpoint).setProject(AppwriteProjectId);
};
