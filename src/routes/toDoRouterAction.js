import { redirect } from "react-router-dom";
import { deleteToDoData, postToDoData, updateToDoData } from "../api/fetchToDo";

const action = async ({ request }) => {
  const formData = await request.formData();
  switch (request.method) {
    case "POST": {
      const todo = formData.get("todo");

      await postToDoData({ todo });
      return redirect("/todo");
    }

    case "PUT": {
      const id = formData.get("id");
      const todo = formData.get("todo");
      const isCompleted = formData.get("isCompleted") === "true" ?? true;

      await updateToDoData({ id, isCompleted, todo });
      return redirect("/todo");
    }

    case "DELETE": {
      const id = formData.get("id");
      await deleteToDoData({ id });

      return redirect("/todo");
    }

    default: {
      return redirect("/todo");
    }
  }
};

export default action;
