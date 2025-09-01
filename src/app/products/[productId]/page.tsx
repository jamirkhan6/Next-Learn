export default async function ProductDetails({params,} : {
    params : Promise<{productId: string}>;
}) {
    const productID = (await params).productId;
  return (
    <>
      <h2>Product details {productID}</h2>
    </>
  );
}
