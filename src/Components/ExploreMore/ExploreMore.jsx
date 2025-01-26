import './ExploreMore.css'
import collections from '../Assets/new_collections'
import Item from '../Item/Item'

const ExploreMore = () => {


  return (
    <div className='exploremore'>
      <h1>EXPLORE PRODUCTS</h1> 
      <div className="explore-item">
        {collections.map((item,i) => {
          return <Item key={i}  id={item.id}  name={item.name}  image={item.image}  new_price={item.new_price}  old_price={item.old_price}/>
           })}
      </div>
    </div>
  )
}

export default ExploreMore;
