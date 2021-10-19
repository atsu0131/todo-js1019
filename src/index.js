import "./styles.css";

const onClickAdd = () => {
  //初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div
  const div = document.createElement("div");
  div.className = "list-row";

  // li
  const li = document.createElement("li");
  li.innerText = inputText;

  //完了
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  const deleteButton = document.createElement("button");

  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //削除
    const deleteTarget = deleteButton.parentNode;
    console.log(deleteTarget);
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
