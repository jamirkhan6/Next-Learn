import Link from "next/link";

export default async function NewsArticle ({params, searchParams} : {
    params : Promise<{articleId : string}>;
    searchParams : Promise<{lang? : "en" | "bn "}>
}) {
    const { articleId } = await params;
    const {lang = "en"} = await searchParams;
  return (
    <>
      <div>
        <h1>news articles {articleId}</h1>
        <p>reading in news {lang}</p>

        <Link href={`/articles/${articleId}?lang=en`}>english</Link>
        <Link href={`/articles/${articleId}?lang=bn`}>bangla</Link>
        
      </div>
    </>
  );
}
