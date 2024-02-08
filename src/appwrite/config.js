import { Client, Databases, Storage, Query, ID } from 'appwrite'
import toast from 'react-hot-toast';
import conf from '../conf/conf'

export class Service {
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    // ** Create an Employee
    async createEmployee(data, userData) {
        let toastId = toast.loading("Creating Employee...")
        function generateUniqueID() {
            const timestamp = Date.now().toString(36); // Convert timestamp to base36
            const randomString = Math.random().toString(36).substring(2, 8); // Use a shorter random string
            const uniqueID = `${timestamp}${randomString}`;
            return uniqueID;
        }

        try {
            const documentId = generateUniqueID();
            const userDataR = userData;
            const result = await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId_1,
                documentId, {
                name: data.name,
                id: data.id,
                role: data.role,
                status: data.status,
                gender: data.gender,
                birthdate: data.birthdate,
                department: data.department,
                email: data.email,
                phone: data.phone,
                address: data.address,
                by_id: userDataR.$id
            }
            );
            if (result) {
                toast.dismiss(toastId);
                toast.success("Employee Created Successfully");
            }
        } catch (error) {
            toast.error(error);
        }
    }

    // ** Update an Employee
    async updateEmployee(data,id, userData) {
        try {
            const userDataR = userData;
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId_1,
                id, {
                name: data.name,
                id: data.id,
                role: data.role,
                status: data.status,
                gender: data.gender,
                birthdate: data.birthdate,
                department: data.department,
                email: data.email,
                phone: data.phone,
                address: data.address,
                by_id: userDataR.$id
            }
            )
                .then(() => {
                    toast.success("Employee Updated Successfully");
                })
        }
        catch (error) {
            toast.error(error.message);
        }
    }





    // ** Delete an Employee
    async deleteEmployee(id) {
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
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
                conf.appwriteDatabaseId,
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
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId_1,
            );
        } catch (error) {
            console.log(error);
        }
    }
}

const services = new Service();
export default services;
