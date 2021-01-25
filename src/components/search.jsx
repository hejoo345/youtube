import React, { memo } from 'react';

 const Search = memo((props) =>  {
    const inputRef = React.createRef();
    const formRef = React.createRef();
    const onSubmit = (event) =>{
        event.preventDefault();
        const searchValue = inputRef.current.value;
    //    console.log(search);
        searchValue && props.onSearch(searchValue);
        formRef.current.reset();
   }
   return (
           <form ref={formRef} onSubmit={onSubmit}>
               <input ref={inputRef} className="search" type="text" placeholder="Search.." />
               <button className="serch-btn"><i className="fas fa-search"></i></button>
           </form>
   );
  
})

export default Search;

