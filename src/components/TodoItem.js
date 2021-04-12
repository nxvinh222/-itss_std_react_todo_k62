/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem( {item, checkDone} ) {
  const handleChange = () => {
    checkDone(item);
  }
  return (
    <label className="panel-block">
      <input type="checkbox" checked={item.done} onChange={handleChange}/>
        <div className={item.done ? "has-text-grey-light" : ""}>
          {item.text}
        </div>
    </label>
  );
}

export default TodoItem;