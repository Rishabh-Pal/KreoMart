

const route = {
    Home: '/',
    About: '/about',
    Contact: '/contact',
    Faq: '/faq',
    PrivacyPolicy: '/privacy-policy',
    ShippingAndDelivery:"/shipping-and-delivery",
    Returns: '/return-policy',
    CancellatonsAndRefunds:"/cancellation-and-refunds",
    TermsAndConditions: '/terms-and-conditions',
    NotFound: '/404',
    Login: '/login',
    Register: '/register',
    EmailVerification: '/email-verification',
    CartPage: '/cart',
    ChangePassword:"/account/password",
    Checkout: '/checkout',
    OrderComplete: '/order-complete',
    Products: '/products',
    Product: '/product',
    Shop: '/shop',
    Wishlist: '/wishlist',
    PasswordReset: '/resetpassword',
    PasswordResetDone: '/password-reset-done',
    Profile: '/account/setting',
    OrderHistory: '/orders/history',
    OrderDetails: '/orders/details',

    protectedRoutes () : string[]{
        return [this.Profile,this.OrderHistory,this.Wishlist]
    }
}

export default route