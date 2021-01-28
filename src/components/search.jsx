import React, { memo } from 'react';
import styles from './search.module.css'
 const Search = memo((props) =>  {
    const inputRef = React.createRef();
    const formRef = React.createRef();
    const onSubmit = (event) =>{
        event.preventDefault();
        const searchValue = inputRef.current.value;
        searchValue && props.onSearch(searchValue);
        formRef.current.reset();
   }
   return (
           <form className={styles.searchbar} ref={formRef} onSubmit={onSubmit}>
               <input ref={inputRef} className={styles.search} type="text" placeholder="검색" />
               <button className={styles.searchBtn}><i className="fas fa-search"></i></button>
           </form>
   );
  
})

export default Search;

