import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import styled from "styled-components";
import ErrorMark from "../components/common/ErrorMark";
import Loading from "../components/common/Loading";
import ToDoAddition from "../components/todo/ToDoAddition";
import ToDoFooter from "../components/todo/ToDoFooter";
import ToDoItem from "../components/todo/ToDoItem";
import ToDoAddMark from "../components/todo/ToDoAddMark";
import { Box, DividerLine } from "../styles/globaStyles";

const ToDoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const TodoBox = styled(Box)`
  padding: 16px 24px;
`;

const ToDo = () => {
  const { toDoData } = useLoaderData();

  return (
    <ToDoContainer>
      <TodoBox>
        <ToDoAddition />
        <DividerLine />
        <Suspense fallback={<Loading />}>
          <Await
            resolve={toDoData}
            errorElement={<ErrorMark />}
            children={(resolvedToDoData) =>
              resolvedToDoData.length === 0 ? (
                <ToDoAddMark />
              ) : (
                resolvedToDoData.map((data, index) => (
                  <ToDoItem key={`toDoItem_${data.id}`} {...data} />
                ))
              )
            }
          />
        </Suspense>
      </TodoBox>
      <ToDoFooter />
    </ToDoContainer>
  );
};

export default ToDo;
