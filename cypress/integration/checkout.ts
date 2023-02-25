import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import {CartPage} from "./pages/cart_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let cartPage = new CartPage()

const URL = 'https://www.saucedemo.com/'


// failed checkout products in cart because empty information
it('Test Sauce Demo Failed Checkout because Empty Information', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsFleeceJacket() 
    dashboardPage.clickBackToProducts()
    dashboardPage.sauceLabsBikeLight()
    cartPage.checkoutProductEmptyInformation()
    cartPage.assertFailCheckoutEmptyInformation()
})

// success checkout products in cart (sauce labs fleece jacket & sauce labs bike light)
it('Test Sauce Demo Success Checkout Sauce Labs Fleece Jacket and Bike Light in Cart', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsFleeceJacket() 
    dashboardPage.clickBackToProducts()
    dashboardPage.sauceLabsBikeLight()
    cartPage.checkoutProduct()
})
