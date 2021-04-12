/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
import { useState } from 'react'

function Filter( {filter, handleFilter} ) {
  
  return (
    <div className="panel-tabs">
      <a href='#' className={filter === 'ALL' ? 'is-active' : ''} onClick={(e,status) => handleFilter(e,'ALL')}>全て</a>
      <a href='#' className={filter === 'TODO' ? 'is-active' : ''} onClick={(e,status) => handleFilter(e,'TODO')}>未完了</a>
      <a href='#' className={filter === 'DONE' ? 'is-active' : ''} onClick={(e,status) => handleFilter(e,'DONE')}>完了済み</a>
    </div>
  );
}

export default Filter