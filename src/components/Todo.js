import React, { useState } from 'react';

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";

function Todo() {
  
  const [items, putItems, clearItems] = useStorage()
  
  const [filter, setFilter] = React.useState('ALL')
  
  const handleFilter = (e, status) => {
    setFilter(status)
  }
  
  const handleChange = checked => {
    const newItems = items.map(item => {
      if(item.key === checked.key) {
        item.done = !item.done;
      }
      return item;
    })
    putItems(newItems);
  }
  
  const handleKeyDown = (text) => {
    putItems([...items,{key: getKey(), text: text, done: false}]);
  }
  
  const filterdItems = items.filter(item => {
    if(filter === 'ALL') return true;
    if(filter === 'DONE') return item.done;
    if(filter === 'TODO') return !item.done;
  })
  
  const displayedFilteredItems = filterdItems.map(item => (
      <TodoItem
        key={item.key}
        item={item}
        checkDone={handleChange}
      />
    ))

  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <Input
        handleKeyDown={handleKeyDown}
      />
      <Filter filter={filter} handleFilter={handleFilter}/>
      {displayedFilteredItems}
      <div className="panel-block">
        {items.length} items
      </div>
      <div className="panel-block">
        <button className="button is-fullwidth" onClick={clearItems}>
          全てのToDoを削除
        </button>
      </div>
    </div>
  );
}

export default Todo;