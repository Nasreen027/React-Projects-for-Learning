import { Account, Client, ID } from "appwrite";
import config from "../config/config";

export class AuthService{
    client = new Client;
    account;
    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    };
    
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                return await this.login({email, password}); 
            }
        } catch (error) {
            console.error('Error in creating account: ', error);
            throw error;
        }
    };

    async login({email, password}){
        try { 
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            console.error("Error occured in login: ", error);
            throw error;
        }
    };

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.error("Error occured while getting user: ", error);
            throw error;
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.error("Error occured while logging out: ", error);
            throw error;
        }
    }
}
const authService = new AuthService();
export default authService;