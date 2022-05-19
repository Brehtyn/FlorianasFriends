
export default function ({app, route, redirect}){
  if (route.path !== '/auth/signin' && route.path !== '/auth/signup' && route.path !== '/auth/landing' 
  && route.path !== '/auth/tips' && route.path !== '/auth/mission' && route.path !== '/auth/donate') {
    //we are on a protected route
    if(!app.$fire.auth.currentUser) {
      //take them to sign in page
      return redirect('/auth/landing')
    }
  }
  if (route.path === '/auth/signin' || route.path === '/auth/landing' || route.path === '/auth/signup' 
  || route.path === '/auth/tips' || route.path === '/auth/mission' || route.path === '/auth/donate') {
    if(!app.$fire.auth.currentUser) {
      //leave them on page
    } else {
      return redirect('/')
    }
  }
}
