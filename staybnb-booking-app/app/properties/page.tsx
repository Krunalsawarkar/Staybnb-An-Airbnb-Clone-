import getCurrentUser from "../actions/getCurrentUser"
import getLisitings from "../actions/getListings";
import EmptyState from "../components/EmptyState";
import PropertiesClient from "./PropertiesClient";


const PropertiesPage = async () =>{
    const currentUser = await getCurrentUser();

    if(!currentUser){
        return(
            <EmptyState 
                title="Unauthorized"
                subtitle="Please Login"
            />
        )
    }

    const listings = await getLisitings({
        userId : currentUser.id
    });

    if(listings.length===0){
        return (
            <EmptyState 
                title="No properties found"
                subtitle="Looks like you havent hosted any properties."
            />
        )
    }

    return (
        <PropertiesClient
            listings = {listings}
            currentUser = {currentUser}
        />
    )
}

export default PropertiesPage;