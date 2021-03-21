import React from 'react';

const Menu = ({items}) => {
  return (
  	<>
 {items.map((item)=> {

 	const { id,price,img,category,desc,title } = item;
 	return <article key={id} className="item">
      		 <img src={img} alt={title} className='photo' />
      		<header className="item-info">{title}</header>
      		<h4 className="item-info">{category}</h4>
      		<p className="price">{price}</p>
      		<p className="item-text">{desc}</p>
      	</article>
 })}
</>
  	);
};

export default Menu;