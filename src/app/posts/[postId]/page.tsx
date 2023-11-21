const SinglePost = ({
  params,
}: {
  params: {
    postId: string;
  };
}) => {
  return (
    <>
      <h1>Single Post {params.postId} </h1>
    </>
  );
};

export default SinglePost;
