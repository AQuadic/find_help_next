import { withAuth } from "next-auth/middleware"
import createIntlMiddleware from "next-intl/middleware"

const locales = ["en", "ar"]
const publicPages = ["/signIn"]

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale: "en"
})

const authMiddleware = withAuth(
  // Note that this callback is only invoked if
  // the `authorized` callback has returned `true`
  // and not for pages listed in `pages`.
  function onSuccess(req) {
    return intlMiddleware(req)
  },
  {
    
    callbacks: {
      authorized: ({ token }) => token != null
    },
    pages: {
      signIn: "/signIn"
    }
  }
)

export default function middleware(req) {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${publicPages.join("|")})?/?$`,
    "i"
  )
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname)

  if (isPublicPage) {
    return intlMiddleware(req)
  } else {
    return intlMiddleware(req)
  }
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"]
}
