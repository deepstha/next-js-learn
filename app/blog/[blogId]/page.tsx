
const BlogDetails = async ({params}: {params: {blogId: string}}) => {
  const {blogId} =  await params;
  return (
    <h2>
      Blog Detail {blogId}
    </h2>
  )
}

export default BlogDetails
