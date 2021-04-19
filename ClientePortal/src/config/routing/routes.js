import containers from "../../containers/index"
import*as paths from "./paths";

  
export const CON_HOME={
    component:containers.CON_HOME,
    path:paths.CON_HOME,
    exact:true,
    isPrivate:true
}
export const CON_LOGIN={
    component:containers.CON_LOGIN,
    path:paths.CON_LOGIN,
    exact:true,
    isPrivate:false
}
export const CON_DH={
    component:containers.CON_DH,
    path:paths.CON_DH,
    exact:true,
    isPrivate:true
}
export const CON_DH_BIENESTAR={
    component:containers.CON_DH_BIENESTAR,
    path:paths.CON_DH_BIENESTAR,
    exact:true,
    isPrivate:true
}
export const CON_DH_BIENESTAR_GALERIA={
    component:containers.CON_DH_BIENESTAR_GALERIA,
    path:paths.CON_DH_BIENESTAR_GALERIA,
    exact:false,
    isPrivate:true
}
export const CON_DH_BIENESTAR_ALIADOS={
    component:containers.CON_DH_BIENESTAR_ALIADOS,
    path:paths.CON_DH_BIENESTAR_ALIADOS,
    exact:false,
    isPrivate:true
}
export const CON_DH_BIENESTAR_APOYO={
    component:containers.CON_DH_BIENESTAR_APOYO,
    path:paths.CON_DH_BIENESTAR_APOYO,
    exact:false,
    isPrivate:true
}
export const CON_DH_FYD={
    component:containers.CON_DH_FORMACION,
    path:paths.CON_DH_FYD,
    exact:false,
    isPrivate:true
}
export const CON_DH_ADMON={
    component:containers.CON_DH_ADMON,
    path:paths.CON_DH_ADMON,
    exact:false,
    isPrivate:true
}
export const CON_DH_RELACIONES={
    component:containers.CON_DH_RELACIONES,
    path:paths.CON_DH_RELACIONES,
    exact:false,
    isPrivate:true
}
export const CON_DH_SELECCION={
    component:containers.CON_DH_SELECCION,
    path:paths.CON_DH_SELECCION,
    exact:false,
    isPrivate:true
}
export const CON_DH_SST={
    component:containers.CON_DH_SST,
    path:paths.CON_DH_SST,
    exact:true,
    isPrivate:true
}
export const CON_DH_SST_COVID={
    component:containers.CON_DH_SST_COVID,
    path:paths.CON_DH_SST_COVID,
    exact:true,
    isPrivate:true
}
export const CON_DH_SST_COVID_GALERIA={
    component:containers.CON_DH_SST_COVID_GALERIA,
    path:paths.CON_DH_SST_COVID_GALERIA,
    exact:true,
    isPrivate:true
}
export const CON_CALIDAD={
    component:containers.CON_CALIDAD,
    path:paths.CON_CALIDAD,
    exact:true,
    isPrivate:true
}
export const CON_CALIDAD_CORE={
    component:containers.CON_CALIDAD_CORE,
    path:paths.CON_CALIDAD_CORE,
    exact:false,
    isPrivate:true
}
export const CON_CALIDAD_NOTICIAS={
    component:containers.CON_CALIDAD_NOTICIAS,
    path:paths.CON_CALIDAD_NOTICIAS,
    exact:false,
    isPrivate:true
}
export const CON_CALIDAD_HABLADORES={
    component:containers.CON_CALIDAD_HABLADORES,
    path:paths.CON_CALIDAD_HABLADORES,
    exact:false,
    isPrivate:true
}
export const CON_CALIDAD_PROCEDIMIENTOS={
    component:containers.CON_CALIDAD_PROCEDIMIENTOS,
    path:paths.CON_CALIDAD_PROCEDIMIENTOS,
    exact:false,
    isPrivate:true
}
export const CON_CALIDAD_REQUISITOS={
    component:containers.CON_CALIDAD_REQUISITOS,
    path:paths.CON_CALIDAD_REQUISITOS,
    exact:false,
    isPrivate:true
}
export const CON_CALIDAD_INDICADORES={
    component:containers.CON_CALIDAD_INDICADORES,
    path:paths.CON_CALIDAD_INDICADORES,
    exact:false,
    isPrivate:true
}
export const CON_MEDIOAMBIENTE={
    component:containers.CON_MEDIOAMBIENTE,
    path:paths.CON_MEDIOAMBIENTE,
    exact:true,
    isPrivate:true
}
export const CON_ACADEMIA={
    component:containers.CON_ACADEMIA,
    path:paths.CON_ACADEMIA,
    exact:true,
    isPrivate:true
}
export const CON_ACADEMIA_ARTE={
    component:containers.CON_ACADEMIA_ARTE,
    path:paths.CON_ACADEMIA_ARTE,
    exact:false,
    isPrivate:true
}
export const CON_ACADEMIA_EMPODERAMIENTO={
    component:containers.CON_ACADEMIA_EMPODERAMIENTO,
    path:paths.CON_ACADEMIA_EMPODERAMIENTO,
    exact:true,
    isPrivate:true
}
export const CON_ACADEMIA_EMPODERAMIENTO_FORMACIONES={
    component:containers.CON_ACADEMIA_EMPODERAMIENTO_FORMACIONES,
    path:paths.CON_ACADEMIA_EMPODERAMIENTO_FORMACIONES,
    exact:true,
    isPrivate:true
}
export const CON_ACADEMIA_CURSO={
    component:containers.CON_ACADEMIA_CURSO,
    path:paths.CON_ACADEMIA_CURSO,
    exact:false,
    isPrivate:true
}
export const CON_ACADEMIA_BIENESTAR={
    component:containers.CON_ACADEMIA_BIENESTAR,
    path:paths.CON_ACADEMIA_BIENESTAR,
    exact:false,
    isPrivate:true
}
export const CON_ACADEMIA_CONCIENCIA={
    component:containers.CON_ACADEMIA_CONCIENCIA,
    path:paths.CON_ACADEMIA_CONCIENCIA,
    exact:false,
    isPrivate:true
}
export const CON_SOSTENIBILIDAD={
    component:containers.CON_SOSTENIBILIDAD,
    path:paths.CON_SOSTENIBILIDAD,
    exact:false,
    isPrivate:true
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
    CON_DH_SST_COVID_GALERIA,
    CON_CALIDAD,
    CON_CALIDAD_NOTICIAS,
    CON_CALIDAD_HABLADORES,
    CON_CALIDAD_PROCEDIMIENTOS,
    CON_CALIDAD_REQUISITOS,
    CON_CALIDAD_CORE,
    CON_CALIDAD_INDICADORES,
    CON_MEDIOAMBIENTE,
    CON_ACADEMIA,
    CON_ACADEMIA_ARTE,
    CON_ACADEMIA_EMPODERAMIENTO,
    CON_ACADEMIA_EMPODERAMIENTO_FORMACIONES,
    CON_ACADEMIA_BIENESTAR,
    CON_ACADEMIA_CONCIENCIA,
    CON_SOSTENIBILIDAD,
    CON_ACADEMIA_CURSO
]

