import { Client, Account, ID, Query, Avatars, Locale } from 'appwrite'
import conf from '../conf/conf.js';
import toast from 'react-hot-toast';

class authService {
    client = new Client();
    account;
    avatars;
    Locale;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async login(email, password) {
        try {
            const result = await this.account.createEmailSession(email, password);
            if (result) {
                toast.success("Login successfully!");
                return await this.getCurrentUser();
            }
        } catch (error) {
            toast.error(`${error.message}`);
        }
    }


    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            toast.error(`${error.message}`);
        }
        return null;
    }

    async logout() {
        try {
            const result = await this.account.deleteSessions();
            if (result) {
                toast.success("Logout successfully!");
                return result;
            }
        } catch (error) {
            toast.error(`${error.message}`);
        }
    }

}

const auth=new authService();
export default auth;