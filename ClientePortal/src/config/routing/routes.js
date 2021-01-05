import containers from "../../containers/index"
import*as paths from "./paths";

  
export const CON_HOME={
    component:containers.CON_HOME,
    path:paths.CON_HOME,
    exact:true
}
export const CON_LOGIN={
    component:containers.CON_LOGIN,
    path:paths.CON_LOGIN,
    exact:false
}
export const CON_DH={
    component:containers.CON_DH,
    path:paths.CON_DH,
    exact:true
}
export const CON_DH_BIENESTAR={
    component:containers.CON_DH_BIENESTAR,
    path:paths.CON_DH_BIENESTAR,
    exact:false
}

export default [
    CON_HOME,
    CON_LOGIN,
    CON_DH,
    CON_DH_BIENESTAR
]

