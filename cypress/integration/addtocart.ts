import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import {CartPage} from "./pages/cart_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let cartPage = new CartPage()

const URL = 'https://www.saucedemo.com/'


// add to cart - sauce labs fleece jacket & sauce labs bike light
it('Test Sauce Demo Sauce labs product fleece jacket & bike light - Add To Cart', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsFleeceJacket() 
    dashboardPage.clickBackToProducts()
    dashboardPage.sauceLabsBikeLight()
    cartPage.clickCart()
    cartPage.assertFleeceJacketAndBikeLight()
})


// remove from cart - sauce labs fleece jacket & sauce labs bike light
it('Test Sauce Demo Sauce labs product fleece jacket & bike light - Remove From Cart', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    dashboardPage.sauceLabsFleeceJacket() 
    dashboardPage.clickBackToProducts()
    dashboardPage.sauceLabsBikeLight()
    cartPage.clickCart()
    cartPage.assertFleeceJacketAndBikeLight()
    cartPage.removeFleeceJacketnBikeLight()
})
