import { NextResponse } from "next/server";
import prisma from '@/app/libs/prismadb';
import getCurrentUser from "@/app/actions/getCurrentUser";

interface IParams {
    listingId?: string;
}

export async function POST (
    request : Request,
    { params } : {params: IParams}
){
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        
    }


}