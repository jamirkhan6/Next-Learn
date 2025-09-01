export default async function Review({params,} : 
    {params : Promise<{productId : string, reviewId : string}>
}) {
    const {productId, reviewId} = await params;
    return <>
        <h2>Review : {reviewId} and Product : {productId}</h2>
    </>
}