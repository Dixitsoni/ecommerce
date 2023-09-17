import React from 'react'

async function Productcomponent({ content }) {
    return (
        <div>
            <h1>{content.title}</h1>
            <div style={{ display: 'flex' }}>
                <div><img src={content.product_first?.filename} alt='product_first' /></div>
                <div><img src={content.product_second?.filename} alt='product_second' /></div>
                <div><img src={content.product_third?.filename} alt='product_third' /></div>
            </div>
        </div>
    )
}

export default Productcomponent