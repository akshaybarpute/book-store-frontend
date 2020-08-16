
import ProductSpan from '../Home/ProductSpan';
import {Grid, Segment} from 'semantic-ui-react';


// const CategoryProductList = (props)=>{

//   return (<div className='product-list-hr'>
//     <Grid columns={4} textAlign={'center'}>
//     {
//         props.list.map(ele=>{
//           return (<Grid.Column>
//             <Segment piled>
//             {ProductSpan(ele)}
//             </Segment></Grid.Column>)
//         })
      
//     }
//   </Grid></div>)
// };


const CategoryProductList = (props)=>{

  return (<Grid.Row><div className='product-list-hr'>
    {
        props.list.map(ele=>{ 
            return ProductSpan(ele)
        })
      
    }
  </div></Grid.Row>)
};


export default CategoryProductList;