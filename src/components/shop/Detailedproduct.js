import OverviewBody from "../home/OverviewBody";
import Button from "../home/Button";
import { useParams } from "react-router-dom";
import FetchData from '../products/productssave.json'
import { connect } from "react-redux";
import { addCartProduct } from "../../action/actions";

 function Detailedproduct(props) {
  const{handleAddCart}=props
  const saleProducts=FetchData.furniture
  const params=useParams()
  const filtercat=saleProducts.find(catego=>{return catego.category===params.cateId})
  const filterArray=filtercat.subcategories.find(itemid=>{return itemid.id===parseInt(params.productId)})
  return (
    <div>
            <OverviewBody showdescription={filterArray} imageWidth={'w-[33rem] h-80'} contentWidth={'flex justify-center p-8 w-[90%]'} setScroll={'ml-6'}/>
            <Button className='bg-black text-white p-3 m-8 rounded-sm hover:bg-[#c19a83] font-semibold text-lg' onClick={()=>handleAddCart(filterArray)}>Add to cart</Button>
    </div>
  );
}
  const dispatchStore=da=>({
    handleAddCart:(data)=>da(addCartProduct(data))
  })
export default connect(null,dispatchStore)(Detailedproduct)