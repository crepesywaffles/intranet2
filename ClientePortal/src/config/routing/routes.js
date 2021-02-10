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
    exact:true
}
export const CON_DH_BIENESTAR_GALERIA={
    component:containers.CON_DH_BIENESTAR_GALERIA,
    path:paths.CON_DH_BIENESTAR_GALERIA,
    exact:false
}
export const CON_DH_BIENESTAR_ALIADOS={
    component:containers.CON_DH_BIENESTAR_ALIADOS,
    path:paths.CON_DH_BIENESTAR_ALIADOS,
    exact:false
}
export const CON_DH_BIENESTAR_APOYO={
    component:containers.CON_DH_BIENESTAR_APOYO,
    path:paths.CON_DH_BIENESTAR_APOYO,
    exact:false
}
export const CON_DH_FYD={
    component:containers.CON_DH_FORMACION,
    path:paths.CON_DH_FYD,
    exact:false
}
export const CON_DH_ADMON={
    component:containers.CON_DH_ADMON,
    path:paths.CON_DH_ADMON,
    exact:false
}
export const CON_DH_RELACIONES={
    component:containers.CON_DH_RELACIONES,
    path:paths.CON_DH_RELACIONES,
    exact:false
}
export const CON_DH_SELECCION={
    component:containers.CON_DH_SELECCION,
    path:paths.CON_DH_SELECCION,
    exact:false
}
export const CON_DH_SST={
    component:containers.CON_DH_SST,
    path:paths.CON_DH_SST,
    exact:true
}
export const CON_DH_SST_COVID={
    component:containers.CON_DH_SST_COVID,
    path:paths.CON_DH_SST_COVID,
    exact:true
}
export const CON_DH_SST_COVID_GALERIA={
    component:containers.CON_DH_SST_COVID_GALERIA,
    path:paths.CON_DH_SST_COVID_GALERIA,
    exact:true
}



export default [
    CON_HOME,
    CON_LOGIN,
    CON_DH,
    CON_DH_BIENESTAR,
    CON_DH_FYD,
    CON_DH_BIENESTAR_GALERIA,
    CON_DH_BIENESTAR_ALIADOS,
    CON_DH_BIENESTAR_APOYO,
    CON_DH_ADMON,
    CON_DH_RELACIONES,
    CON_DH_SELECCION,
    CON_DH_SST,
    CON_DH_SST_COVID,
    CON_DH_SST_COVID_GALERIA
]

