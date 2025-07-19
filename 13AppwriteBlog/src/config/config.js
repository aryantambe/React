//we do this for type saftey, as the .env file variables might sometimes load the string values as integers so to avoid this we type cast it here and then export these variables.
const config={
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID), 
    appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID), 
    appwriteCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID), 
    appwriteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID), 

}