import { Client, Databases, Storage, Query, ID } from 'appwrite'
import toast from 'react-hot-toast';
import conf from '../conf/conf'

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
    async createEmployee(data, userData) {
        let toastId =toast.loading("Creating Employee...")
        function generateUniqueID() {
            const timestamp = Date.now().toString(36); // Convert timestamp to base36
            const randomString = Math.random().toString(36).substring(2, 8); // Use a shorter random string
            const uniqueID = `${timestamp}${randomString}`;
            return uniqueID;
        }

        try {
            const documentId = generateUniqueID();
            const userDataR = userData;
            const result= await this.databases.createDocument(
                "65b8e701ea15a4553c4f",
                "65b8e71752e37c56ee47",
                documentId, {
                name: data.name,
                id: data.id,
                role: data.role,
                status: true,
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
                "65b8e701ea15a4553c4f",
                "65b8e71752e37c56ee47",
            );
        } catch (error) {
            console.log(error);
        }
    }
}

const services = new Service();
export default services;
