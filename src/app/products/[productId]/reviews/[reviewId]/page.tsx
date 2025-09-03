import { notFound } from "next/navigation";

export default async function Review({params,} : 
    {params : Promise<{productId : string, reviewId : string}>
}) {
    const {productId, reviewId} = await params;

    if  (parseInt(reviewId) > 1000) {
        notFound();
    }
    return <>
        <h2>Review : {reviewId} and Product : {productId}</h2>
    </>
}