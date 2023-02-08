import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import ToDoAddition from "../components/todo/ToDoAddition";
import ToDoItem from "../components/todo/ToDoItem";

const ToDo = () => {
  const { toDoData } = useLoaderData();

  return (
    <Suspense fallback={<div>loading</div>}>
      <Await
        resolve={toDoData}
        errorElement={<div>Error</div>}
        children={(resolvedToDoData) => (
          <>
            <ToDoAddition />
            {resolvedToDoData.map((data, index) => (
              <ToDoItem key={`toDoItem_${data.id}`} {...data} />
            ))}
          </>
        )}
      />
    </Suspense>
  );
};

export default ToDo;
