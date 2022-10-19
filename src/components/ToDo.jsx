import React, { useEffect, useState } from "react";
import { MdCheck, MdDelete } from "react-icons/md";

import { Container, Card, List, NameTask, ListItem } from "./Styles";

function ToDo() {
  const [add, SetAdd] = useState("");
  const [grid, SetGrid] = useState(false);
  const [data, SetData] = useState(
    JSON.parse(localStorage.getItem("User")) ?? []
  );
  useEffect(() => {
    const UserGrid = JSON.parse(localStorage.getItem("User")) ?? [];
    SetData(UserGrid);
  }, [grid]);

  function handleSave(event) {
    event.preventDefault();
    const user = {
      name: add,
      checked: false,
    };
    const userArray = [...data, user];
    SetData(userArray);

    localStorage.setItem("User", JSON.stringify(userArray));
    event.target.reset();
  }
  function handleAdd(index) {
    const userAdd = data;
    userAdd.splice(index, 1);
    SetData(userAdd);
    localStorage.setItem("User", JSON.stringify(userAdd));
    SetGrid(!grid);
  }
  function handleSper(index) {
    const userFace = data;
    userFace[index].checked = !userFace[index].checked;
    SetData(userFace);
    localStorage.setItem("User", JSON.stringify(userFace));
    SetGrid(!grid);
  }

  return (
    <Container>
      <header>
        <h1>To Do List</h1>
      </header>
      <Card>
        <form onSubmit={handleSave}>
          <input
            type="text"
            placeholder="Введите текст"
            onChange={(e) => SetAdd(e.target.value)}
          />
          <button type="submit">Добавить</button>
        </form>
      </Card>
      <List>
        {data.map((date, index) => {
          return (
            <ListItem key={index}>
              <NameTask checked={date.checked ? true : false}>
                {date.name}
              </NameTask>
              <div>
                <MdCheck
                  size={24}
                  color="#00ff1f"
                  onClick={() => handleSper(index)}
                />
                <MdDelete
                  size={24}
                  color="#ff0000"
                  onClick={() => handleAdd(index)}
                />
              </div>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
}

// `

export default ToDo;
