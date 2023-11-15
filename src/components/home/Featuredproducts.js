import { useState } from 'react'
import Subcategories from './Subcategories'
import Button from './Button'
import {FaEye} from 'react-icons/fa'
import Overviewprod from './Overviewprod'

export default function Featuredproducts({products}) {
    const [prodModal, setProdModal] = useState(false);
    const [modalContent,setModalContent]=useState([])
    const showOneProd=(item)=>{
        setModalContent(item)
        setProdModal(true)
    }
    
  return (
    <div>
        <ul className='flex justify-center ml-10' >
            <div className='grid grid-cols-5 gap-4'>
            {
                products.map(product=>
                    <li key={product.name}>
                        {
                            product.subcategories.slice(0,2).map(subCategory=>
                                <>
                                    <div className='relative inline-block'>
                                        <Subcategories sub={subCategory}/>
                                        <Button onClick={()=>showOneProd(subCategory)} className={'absolute top-1 translate-y-1/2  p-2 bg-slate-100 rounded-full'}><FaEye/></Button>
                                    </div>
                                    
                                </>
                                )
                        }
                    </li>
                )
            }
            </div>
            </ul>
            <Overviewprod showprod={prodModal} changeprod={setProdModal} showdescription={modalContent}/>
    </div>
  )
}
