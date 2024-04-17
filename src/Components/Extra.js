import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import { useCart } from './CartContext';
import Header from './Header';

export default function Extra() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [counter, setCounter] = useState(0);
    const [msg, setMsg] = useState('');
    const [mainImage, setMainImage] = useState('');
    const [originalMainImage, setOriginalMainImage] = useState('');
    const [detailImages, setDetailImages] = useState([]);

    const navigate = useNavigate(); 


    useEffect(() => {
        const allProducts = [
            {
                'id': 1,
                'name': 'Cinderella Collection',
                'description': 'Cinderella Collection By Shining Diva Pearl Stud Earring For Women (White)(Rrrrrrr6768Er)',
                'price': '202',
                'mainImage': '../images/cinderella.jpg',
                'detailImages': [
                    {'image': '../images/cinderella1.jpg'},
                    {'image': '../images/cinderella2.jpg'},
                    {'image': '../images/cinderella3.jpg'}
                ]
            },
            {
                'id': 2,
                'name': 'Shining Diva Fashion',
                'description': 'Shining Diva Fashion Latest Stylish White Pearl Flower Earrings for Women and Girls (15435er) ',
                'price': '215',
                'mainImage': '../images/shining.jpg',
                'detailImages': [
                    {'image': '../images/shining1.jpg'},
                    {'image': '../images/shining2.jpg'},
                    {'image': '../images/shining3.jpg'}
                ]
            },
            {
                'id': 3,
                'name': 'Yellow Chimes',
                'description': 'Yellow Chimes Earrings for Women and Girls Fashion White Pearl Dangler Earrings | Gold Plated Long Chain Hanging Pearl Dangler Earrings | Birthday Gift for Girls & Women',
                'price': '198',
                'mainImage': '../images/yellow.jpg',
                'detailImages': [
                    {'image': '../images/yellow1.jpg'},
                    {'image': '../images/yellow2.jpg'},
                    {'image': '../images/yellow3.jpg'}
                ]
            },
            {
                'id': 4,
                'name': 'Ear Cuff Crawler',
                'description': ' Fashion Frill Earrings For Women Fashion Butterfly Ear Cuff Crawler AD & Pearl Gold Plated Pearl Chain Drop Stud Earrings For Girls Women Gift For Sister Love Gifts Earring Jewellery',
                'price': '227',
                'mainImage': '../images/new.jpg',
                'detailImages': [
                    {'image': '../images/earcuff1.jpg'},
                    {'image': '../images/earcuff2.jpg'},
                    {'image': '../images/earcuff3.jpg'}
                ]
            }
           
        ];

        const selectedProduct = allProducts.find(product => product.id === parseInt(id));

        setProduct(selectedProduct);
        setMainImage(selectedProduct?.mainImage);
        setOriginalMainImage(selectedProduct?.mainImage);
        setDetailImages(selectedProduct?.detailImages);
    }, [id]);


   

    const increase = () => {
        if (counter < 10)
            setCounter(counter + 1);
        else
            setMsg('Not allowed more than 10 quantity');
    };

    const decrease = () => {
        setMsg('');
        if (counter > 1)
            setCounter(counter - 1);
        else
            setMsg('Please select at least 1 quantity');
    };

    const calculateTotalPrice = () => {
        return counter * parseInt(product?.price);
    };


    const addToCartHandler = () => {
        const productToAdd = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: counter
        };
        addToCart(productToAdd);
        navigate('../cart');
    };


    const handleClick = (image) => {
        if (image === mainImage)
            setMainImage(originalMainImage);
        else
            setMainImage(image);
    };

    const handleMainImageClick = () => {
        setOriginalMainImage(mainImage);
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <Header/>
        <br/>
        <div className="divcontainer">
            <div className="partcontainer">
                <div className="titlediv">
                    <h1>{product.name}</h1>
                    <Image variant="top" src={mainImage} className='mainimage' onClick={handleMainImageClick} />
                </div>
                <div className="detailimagediv">
                    {detailImages.map((item, index) => (
                        <Image key={index} variant="top" src={item.image} className='detailimage' onClick={() => handleClick(item.image)} />
                    ))}
                </div>
            </div>
            <div className="secondcontainer">
                <div className="description">
                    <p className="descriptiontitle">Description</p>
                    <p className="descriptiondetail">{product.description}</p>
                    <p className="amount">Price: ₹{product.price}</p>
                    <Button variant="outline-dark" className='buttonsize' size="sm" onClick={increase}>+</Button>&nbsp;
                    {counter}&nbsp;&nbsp;
                    <Button variant="outline-dark" className='buttonsize' size='sm' onClick={decrease}>-</Button>&nbsp;&nbsp;
                    <label>Total amount: ₹{calculateTotalPrice()}</label>
          
                    <div>
                        <br/>
                        <label className='msgoflimit'>{msg}</label>
                    </div>
                </div>
            </div>
        </div>
                    <div className="addtocart">
                        <Button className='buttonaddtocart' onClick={addToCartHandler}>Add to cart</Button>
                    </div>

                   
        </>
    );
}
