import selectionApi from "./selectionApi";

export const getToDoData = async () => {
  try {
    const { data } = await selectionApi.get("/todos");
    return data;
  } catch (e) {
    console.log(e.toJSON());
  }
};

export const postToDoData = async ({ todo }) => {
  try {
    await selectionApi.post("/todos", { todo });
  } catch (e) {
    console.log(e.toJSON());
  }
};

export const updateToDoData = async ({ id, todo, isCompleted }) => {
  try {
    await selectionApi.put(`/todos/${id}`, { todo, isCompleted });
  } catch (e) {
    console.log(e);
  }
};

export const deleteToDoData = async ({ id }) => {
  try {
    await selectionApi.delete(`/todos/${id}`);
  } catch (e) {
    console.log(e.toJSON());
  }
};
