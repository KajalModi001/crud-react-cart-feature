import React, {useState} from 'react'
import { MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';

export default function Index() {
    const [allProducts, setAllproducts] = useState(([
        {
            'id':1, 'name':'Cinderella Collection', 'image': './images/cinderella.jpg', 'description': 'Cinderella Collection By Shining Diva Pearl Stud Earring For Women (White)(Rrrrrrr6768Er)', 'price': '202'
        },
        {
            'id':2, 'name':'Shining Diva Fashion', 'image': './images/shining.jpg', 'description': 'Shining Diva Fashion Latest Stylish White Pearl Flower Earrings for Women and Girls (15435er)', 'price': '215'
        },
        {
            'id':3, 'name':'Yellow Chimes', 'image': './images/yellow.jpg', 'description': 'Yellow Chimes Earrings for Women and Girls Fashion White Pearl Dangler Earrings | Gold Plated Long Chain Hanging Pearl Dangler Earrings | Birthday Gift for Girls & Women', 'price': '198'
        },
        {
            'id':4, 'name':'Ear Cuff Crawler', 'image': './images/new.jpg', 'description': 'Fashion Frill Earrings For Women Fashion Butterfly Ear Cuff Crawler AD & Pearl Gold Plated Pearl Chain Drop Stud Earrings For Girls Women Gift For Sister Love Gifts Earring Jewellery ', 'price': '227 '
        },
        

    ]))



    const navigate = useNavigate(); 

    const handleAddToCart = (productId) => {
        const selectedProduct = allProducts.find(product => product.id === productId);
        // console.log(productId)
        navigate(`/product/${productId}`);
    };



  return (
    <>
    <Header/>
    <br/>
    <div>
        <h1 className='headingproduct'>New Launches</h1>
    </div>
    <br/>
    <div className="d-flex align-items-start bg-body-tertiary mb-3" >
        {allProducts.map((item)=>
        <MDBCol key={item.id}>
            <img src={item.image} className='imageofindex' alt='...'  />
            <h3 className='productname-price'>{item.name}</h3>
            <h5 className='productname-price'>₹ {item.price}</h5>
            <MDBBtn className='buttonaddtocart' color='warning' onClick={() => handleAddToCart(item.id)}>Add to Cart</MDBBtn>
            <MDBBtn className='buttonbuy' color='warning'>Buy Now</MDBBtn>
        </MDBCol>
         )}
        
      </div>
      <div>
        
      
      </div>
    </>
  )
}
