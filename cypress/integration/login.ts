import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
const URL = 'https://www.saucedemo.com/'


it('Test LOGIN', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
})

it('Test Sauce Demo Invalid Password', () => {
    loginPage.login(URL,'standard_user','invalidPass')
    loginPage.assertLoginFail()
})

it('Test Sauce Demo Sauce labs product backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
})


// Then I Create 4 new flows of automation :

// 1. add to cart - sauce labs fleece jacket and sauce labs bike light - in addtocart.ts
// 2. remove from cart - sauce labs fleece jacket and sauce labs bike light - in addtocart.ts
// 3. failed checkout products in cart  because empty information - in checkout.ts
// 4. success checkout products in cart - in checkout.ts
