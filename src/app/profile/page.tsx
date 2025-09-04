import Link from "next/link";

export default function Profile() {
  return (
    <>
      <div>Profile Page</div>
      <Link href="/articles/breking-news-123?lang=en">Read in english</Link>
      <Link href="/articles/breking-news-123?lang=bn">Read in bangla</Link>
    </>
  );
}