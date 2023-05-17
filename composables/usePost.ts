export const usePost = async (id: string) => {
  const { data } = await useAsyncData("post", () =>
    $fetch(
      "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/" + id
    )
  );
  return data;
};
