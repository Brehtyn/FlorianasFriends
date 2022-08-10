
export default function ({app, route, redirect}){
  if (route.path !== '/auth/signin' && route.path !== '/auth/signup' && route.path !== '/auth/resetpass' && route.path !== '/auth/landing' 
  && route.path !== '/auth/tips' && route.path !== '/auth/mission' && route.path !== '/auth/donate' && route.path !== '/auth/profile') {
    //we are on a protected route
    if(!app.$fire.auth.currentUser) {
      //take them to sign in page
      return redirect('/auth/landing')
    }
  }
  if (route.path === '/auth/landing') {
    if(!app.$fire.auth.currentUser) {
      //leave them on page
    } else {
      return redirect('/')
    }
  }
}
