import { Card } from "@/components/card";
import Link from "next/link";

export default function Archive() {
  return (
    <>
      <Card>
        <div>Archived</div>
        <div>
          <Link href="/complex-deshboard">default</Link>
        </div>
      </Card>
    </>
  );
}
