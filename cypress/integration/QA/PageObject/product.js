class Product
{
    add_button = ".btn-add-to-basket";
    product_price = ".col-sm-6.product_main .price_color";
    product_name = ".col-sm-6.product_main h1";
    msg_product_added = "#messages .alert:nth-child(1) strong";
    msg_basket_total = "#messages .alert:nth-child(3) strong";
    success_msg = "#messages .alert-success:nth-child(1)";

        
    url_should_be_correct(link)
    {
        cy.url().should('contain', link);
    }

    success_msg_should_not_exist()
    {
        cy.get(this.msg_product_added).should('not.exist');
    }

    add_product_to_basket()
    {
        cy.get(this.add_button).click();
    }

    should_be_success_message()
    {
        cy.get(this.success_msg).should('be.visible')
    }

    book_name_in_message_should_be_correct()
    {
        cy.get(this.product_name).then( (x) =>{
            let product_name_text = x.text()
            cy.get(this.msg_product_added).should('have.text', product_name_text)
        })
    }

    book_price_in_basket_should_be_correct()
    {
        cy.get(this.product_price).then( (y) =>{
            let product_price_text = y.text()
            cy.get(this.msg_basket_total).should('have.text', product_price_text)
        
        })
    }

}

export default Product;

