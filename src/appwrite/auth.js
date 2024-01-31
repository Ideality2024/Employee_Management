import { Client, Account, ID, Query, Avatars, Locale } from 'appwrite'
import conf from '../conf/conf';


class authService {
    client = new Client();
    account;
    avatars;
    Locale;

    constructor() {
        this.client
            .setEndpoint("https://cloud.appwrite.io/v1")
            .setProject("65b8e56846ffd244f228")
        this.account = new Account(this.client)
    }

    async login(email, password) {
        try {
            const result = await this.account.createEmailSession(email, password);
            if (result) {
                alert("Login successfully!");
                return await this.getCurrentUser();
            }
        } catch (error) {
            alert(`${error.message}`);
            throw error;
        }
    }


    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("\n\nUser Not Registered yet please Signup \n\n\n", error);
        }
        return null;
    }

    async logout() {
        try {
            const result = await this.account.deleteSessions();
            if (result) {
                alert("Logout successfully!");
                return result;
            }
        } catch (error) {
            alert(`${error.message}`);
            throw error;
        }
    }

}

const auth=new authService();
export default auth;