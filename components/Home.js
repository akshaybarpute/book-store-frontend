
import {Grid, Segment} from 'semantic-ui-react';
import CategoryProductList from './Home/CategoryProductList';

const list = {
  education:[
    {
      "id": 22,
      "title": "C programming",
      "writer": "me",
      "language": "english",
      "category": "education",
      "price": 0.0,
      "createdAt": 1596342530000,
      "updatedAt": 1596342589000,
      "deleted": false

  },
{
  "id": 23,
  "title": "C programming",
  "writer": "me",
  "language": "english",
  "category": "education",
  "price": 0.0,
  "createdAt": 1596342530000,
  "updatedAt": 1596342589000,
  "deleted": false

},

{
  "id": 22,
  "title": "C programming",
  "writer": "me",
  "language": "english",
  "category": "education",
  "price": 0.0,
  "createdAt": 1596342530000,
  "updatedAt": 1596342589000,
  "deleted": false

}
],
novel:[
  {
    "id": 22,
    "title": "C programming",
    "writer": "me",
    "language": "english",
    "category": "education",
    "price": 0.0,
    "createdAt": 1596342530000,
    "updatedAt": 1596342589000,
    "deleted": false

},
{
  "id": 22,
  "title": "C programming",
  "writer": "me",
  "language": "english",
  "category": "education",
  "price": 0.0,
  "createdAt": 1596342530000,
  "updatedAt": 1596342589000,
  "deleted": false

},

{
  "id": 22,
  "title": "C programming",
  "writer": "me",
  "language": "english",
  "category": "education",
  "price": 0.0,
  "createdAt": 1596342530000,
  "updatedAt": 1596342589000,
  "deleted": false

},
{
"id": 22,
"title": "C programming",
"writer": "me",
"language": "english",
"category": "education",
"price": 0.0,
"createdAt": 1596342530000,
"updatedAt": 1596342589000,
"deleted": false

}
]
};


// const Home = ()=>{
//   return (<div className="container-div">
//     <div className='trending-home'><b>Trending Currently</b>
//     <div>dsahsgdgsdjfdidfyuififwgfkfgffwufiwffwjwfjwfgfrg</div>
//     <div className='product-list-category'><b>Novels</b></div>
//     <CategoryProductList list={list}/></div>
//   </div>)
// }

const Home = ()=>{

  const keys = Object.keys(list);

  return(<Grid container>
    <Grid.Row></Grid.Row>
    {keys.map(ele=>{

      return <Grid.Row>
        <Segment>
        <div className='category-name-home'><b>{ele}</b></div>
      <CategoryProductList list={list[ele]}/>
      </Segment>
      </Grid.Row>
    })}
  </Grid>

  );

  // return(<Grid container>
  //   <Grid.Row>
  //   <CategoryProductList list={list}/>
  //   </Grid.Row>
  //   </Grid>)
}

export default Home;