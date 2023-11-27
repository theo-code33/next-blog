const UpdatePost = ({
  params,
}: {
  params: {
    postId: string;
  };
}) => {
  return (
    <>
      <h1>Update Post {params.postId}</h1>
    </>
  );
};

export default UpdatePost;
