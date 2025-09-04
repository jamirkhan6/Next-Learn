export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentinally delay")
    }, 2000)
  })
  return <div>Blog Page</div>;
}
