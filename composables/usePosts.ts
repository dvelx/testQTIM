export const usePosts = async () => {
  const { data } = await useAsyncData("blogs", () =>
    $fetch("https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/")
  );
  return data;
};
