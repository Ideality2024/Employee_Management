import { Client, ID, Databases, Storage, Query } from 'appwrite'
import conf from '../conf/conf.js';

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint("https://cloud.appwrite.io/v1")
            .setProject("65b8e56846ffd244f228")
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    // ** Create an Employee
    async createEmplyoee(data) {
        try {
            return await this.databases.createDocument(
                conf.appwriteCollectionId_1,
                data,
                ["*"],
                ["*"]
            );
        } catch (error) {
            console.log(error);
        }
    }

    // ** Delete an Employee
    async deleteEmployee(id) {
        try {
            return await this.databases.deleteDocument(
                conf.appwriteCollectionId_1,
                id
            );
        } catch (error) {
            console.log(error);
        }
    }

    // ** get an particular Employee
    async getEmployee(id) {
        try {
            return await this.databases.getDocument(
                conf.appwriteCollectionId_1,
                id
            );
        } catch (error) {
            console.log(error);
        }
    }

    // ** Get maxt 100 Employees
    async getEmployees() {
        try {
            return await this.databases.listDocuments(
                conf.appwriteCollectionId_1,
                ["*"],
                100,
                0,
                "DESC"
            );
        } catch (error) {
            console.log(error);
        }
    }
}