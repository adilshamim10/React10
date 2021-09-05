import React from 'react';

const Book = ({img, Title, author}) => {

  return (
    <article className='book'>
      <img src={img} alt=''/>
      <h1>{Title}</h1>
      <h4>{author}</h4>

    </article>
  );
};


export default Book;