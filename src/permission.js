import router from "./router";
import store from "./store";

router.beforeEach((to,from,next) => {
  const loginStatus = store.state.home.loginStatus
  if(!loginStatus){
    if(to.path === '/'){
      router.push({ path: 'login' })
      store.dispatch('home/setLoginStatus',true)
    }
  } 
  next()
})