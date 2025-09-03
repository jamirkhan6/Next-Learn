import { Metadata } from "next";

type Props = {
  params: { productId: string };
};

// Generate metadata dynamically for each product
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.productId;
  return {
    title: `Product ${id}`,
    
  };
}

// Product details page
export default function ProductDetails({ params }: Props) {
  const { productId } = params;

  return (
    <>
      <h2>Product details {productId}</h2>
    </>
  );
}
