export class CartPage{
    btn_sauceLabsCart = '#shopping_cart_container'
    btn_cartCheckout = '#checkout'
    txt_firstName = '#first-name'
    txt_lastName = '#last-name'
    txt_postalCode = '#postal-code'
    btn_continue = '#continue'
    btn_finish = '#finish'
    btn_removeFleeceJacket = '#remove-sauce-labs-fleece-jacket'
    btn_removeBikeLight = '#remove-sauce-labs-bike-light'

    clickCart(){
        cy.get(this.btn_sauceLabsCart).click()
        cy.contains('Your Cart').should('contain','Your Cart')
    }
    clickCartCheckout(){
        cy.get(this.btn_cartCheckout).click()
        cy.contains('Checkout: Your Information').should('contain','Checkout: Your Information')
    }
    inputFirstName(){
        cy.get(this.txt_firstName).type('widya')
    }
    inputLastName(){
        cy.get(this.txt_lastName).type('ariyani')
    }
    inputPostalCode(){
        cy.get(this.txt_postalCode).type('12120')
    }
    clickCartContinue(){
        cy.get(this.btn_continue).click()
        cy.contains('Checkout: Overview').should('contain','Checkout: Overview')
    }
    clickCartContinueWithoutAssert(){
        cy.get(this.btn_continue).click()
    }
    clickCartFinish(){
        cy.get(this.btn_finish).click()
        cy.contains('THANK YOU FOR YOUR ORDER').should('contain','THANK YOU FOR YOUR ORDER')
    }
    assertFleeceJacketAndBikeLight(){
        cy.contains('Sauce Labs Fleece Jacket').should('be.visible') 
        cy.contains('Sauce Labs Bike Light').should('be.visible') 
    }
    checkoutProduct(){
        this.clickCart()
        this.clickCartCheckout()
        this.inputFirstName()
        this.inputLastName()
        this.inputPostalCode()
        this.clickCartContinue()
        this.clickCartFinish()
    }
    checkoutProductEmptyInformation(){
        this.clickCart()
        this.clickCartCheckout()
        this.clickCartContinueWithoutAssert()
    }
    assertFailCheckoutEmptyInformation(){
        cy.get('[data-test="error"]').should('be.visible')
        cy.contains('Error: First Name is required').should('contain','Error: First Name is required')
    }
    removeFleeceJacket(){
        cy.get(this.btn_removeFleeceJacket).click()
        cy.contains('Sauce Labs Fleece Jacket').should('not.exist');
    }
    removeBikeLight(){
        cy.get(this.btn_removeBikeLight).click()
        cy.contains('Sauce Labs Bike Light').should('not.exist');
    }
    removeFleeceJacketnBikeLight(){
        this.removeFleeceJacket()
        this.removeBikeLight()
    }

}