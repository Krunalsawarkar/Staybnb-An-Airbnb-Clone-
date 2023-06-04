import { useRouter } from "next/navigation";
import { SafeUser } from "../types";
import useLoginModal from "./useLoginModal";
import { useMemo } from "react";


interface UseFavoriteProps {
    listingId : string;
    currentUser?:SafeUser | null ;
}

const useFavorite = ({
    listingId,
    currentUser
} : UseFavoriteProps) => {
    const router = useRouter();
    const loginModal = useLoginModal();

    const hasFavorited = useMemo(()=>{
        const list = currentUser ?. favoriteIds || [];

        return list.includes(listingId);
    },[currentUser, listingId]);

    

}