import route from "./routes"

export { default, withAuth } from "next-auth/middleware"


export const config = { 
    matcher: ["/account", "/orders", "/wishlist", "/cart"],
}


