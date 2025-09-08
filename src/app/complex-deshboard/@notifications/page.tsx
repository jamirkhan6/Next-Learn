import { Card } from "@/components/card"
import Link from "next/link";

export default function Notifications () {
    return (
      <>
        <Card>
          <div>notifications</div>
          <div>
            <Link href="/complex-deshboard/archived">Archive</Link>
          </div>
        </Card>
      </>
    );
}