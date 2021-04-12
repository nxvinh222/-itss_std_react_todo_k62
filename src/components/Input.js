import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input( {handleKeyDown} ) {
  
  const [text, setText] = React.useState();
  
  const handleChange = (event) => {
    setText(event.target.value);
  }
  
  const handleEnter = (event) => {
    if(event.keyCode === 13) {
      handleKeyDown(text);
      setText('');
    }
  }

  return (
    <div className="panel-block">
      <input 
        className='input' 
        type='text' 
        placeholder='Todoを入力してください'
        value={text}
        onChange={handleChange}
        onKeyDown={handleEnter}/>
    </div>
  );
}

export default Input;
