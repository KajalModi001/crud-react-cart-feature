// ParentComponent.js
import React, { useState } from 'react';
import Extra from './Extra';



function Parentcomponent() {
    // Initialize allproducts state
    const [allProducts, setAllProducts] = useState([
        {
            'id':1, 'name':'Earings Aamori', 'image': './images/aamori.jpg', 'description': 'Aamori Black & Gold Dokra Beads Earrings ', 'price': '500'
        },
        {
            'id':2, 'name':'Shining Diva Fashion', 'image': './images/shining.jpg', 'description': 'Shining Diva Fashion Latest Stylish White Pearl Flower Earrings for Women and Girls (15435er) ', 'price': '215'
        },
        {
            'id':3, 'name':'Yellow Chimes', 'image': './images/yellow.jpg', 'description': 'Yellow Chimes Earrings for Women and Girls Fashion White Pearl Dangler Earrings | Gold Plated Long Chain Hanging Pearl Dangler Earrings | Birthday Gift for Girls & Women', 'price': '198'
        },
        {
            'id':4, 'name':'Ear Cuff Crawler', 'image': './images/new.jpg', 'description': 'Fashion Frill Earrings For Women Fashion Butterfly Ear Cuff Crawler AD & Pearl Gold Plated Pearl Chain Drop Stud Earrings For Girls Women Gift For Sister Love Gifts Earring Jewellery ', 'price': '227 '
        }
    ]);

    console.log("allProducts in ParentComponent:", allProducts);

    return (
        <div>
            {/* Pass allproducts as a prop to the Extra component */}
            <Extra allproducts={allProducts} />
        </div>
    );
}

export default Parentcomponent;
