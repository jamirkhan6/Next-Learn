import { Metadata } from "next";

type Props = {
  params: { productId: string };
};

// Generate metadata dynamically for each product
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${id}`)
    }, 100);
  })
  return {
    title: `Product ${title}`,
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
