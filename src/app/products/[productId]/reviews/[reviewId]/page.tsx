import { notFound, redirect} from "next/navigation";

function mathRandom (count : number) {
    return Math.floor(Math.random() * count)
}

export default async function Review({params,} : 
    {params : Promise<{productId : string, reviewId : string}>
}) {
    const random = mathRandom(2);
    if(random === 1) {
        throw new Error ("error page reviews")
    }

    const {productId, reviewId} = await params;

    if  (parseInt(reviewId) > 1000) {
        // notFound();
        redirect("/products")
    }
    return <>
        <h2>Review : {reviewId} and Product : {productId}</h2>
    </>
}