
import Product from "./PageObject/product.js"


const link = 'http://selenium1py.pythonanywhere.com/ru/catalogue/the-shellcoders-handbook_209/'


describe('Testing of product page', () => {

    const prod=new Product();

    it('User can add product to the basket', () =>{

        cy.visit(link)

        prod.url_should_be_correct(link)
        
        prod.success_msg_should_not_exist()

        prod.add_product_to_basket()

        prod.should_be_success_message()

        prod.book_name_in_message_should_be_correct()

        prod.book_price_in_basket_should_be_correct()


    })

})