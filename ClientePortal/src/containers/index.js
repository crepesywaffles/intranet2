import CON_HOME from "../containers/Home/Home";
import CON_LOGIN from "../containers/Login/Login";
import CON_DH from "../containers/DH/Dh"
import CON_DH_BIENESTAR from "../containers/DH/Areas/Bienestar/Bienestar"
import CON_DH_BIENESTAR_GALERIA from "../containers/DH/Areas/Bienestar/Galeria"
import CON_DH_BIENESTAR_ALIADOS from "../containers/DH/Areas/Bienestar/Aliados"
import CON_DH_BIENESTAR_APOYO from "../containers/DH/Areas/Bienestar/Apoyo"
import CON_DH_BIENESTAR_CONVENIO from "../containers/DH/Areas/Bienestar/Convenioscaja"
import CON_DH_FORMACION from "../containers/DH/Areas/Formacion/Formacion"
import CON_DH_ADMON from "../containers/DH/Areas/AdmonP/AdmonP"
import CON_DH_RELACIONES from "../containers/DH/Areas/Relaciones/Relaciones"
import CON_DH_SELECCION from "../containers/DH/Areas/Seleccion/Seleccion"
import CON_DH_SST from "../containers/DH/Areas/SST/Sst"
import CON_DH_SST_COVID from "../containers/DH/Areas/SST/Covid"
import CON_DH_SST_COVID_GALERIA from "../containers/DH/Areas/SST/Galeria";
import CON_CALIDAD from "../containers/Calidad/Calidad"
import CON_CALIDAD_NOTICIAS from "../containers/Calidad/CalidadCore/GaleriaNoticias"
import CON_CALIDAD_HABLADORES from "../containers/Calidad/CalidadCore/Habladores"
import CON_CALIDAD_PROCEDIMIENTOS  from "../containers/Calidad/CalidadCore/ProcedimeintosE"
import CON_CALIDAD_REQUISITOS  from "../containers/Calidad/CalidadCore/RequisitosH"
import CON_CALIDAD_CORE from "./Calidad/CalidadCore/CalidadMain";
import CON_CALIDAD_INDICADORES from "./Calidad/Indicadores";
import CON_MEDIOAMBIENTE from "./Calidad/MedioA/MedioA";
import CON_ACADEMIA   from "../containers/Academia/AcademiaMain"
import CON_ACADEMIA_ARTE from "../containers/Academia/Arteycultura/Arteycultura"
import CON_ACADEMIA_EMPODERAMIENTO from "../containers/Academia/Empoderamiento/Empoderamiento";
import CON_ACADEMIA_EMPODERAMIENTO_FORMACIONES from "../containers/Academia/Empoderamiento/Formaciones";
import CON_ACADEMIA_BIENESTAR from "../containers/Academia/BienestarIntegral/BienestarIntegral";
import CON_ACADEMIA_CONCIENCIA from "../containers/Academia/Conciencia/Conciencia"
import CON_ACADEMIA_CURSO from "../containers/Academia/Empoderamiento/Curso"
import CON_ACADEMIA_CURSO2 from "../containers/Academia/Empoderamiento/Curso2"
import CON_ACADEMIA_CURSO3 from "../containers/Academia/Empoderamiento/Curso3"
import CON_ACADEMIA_BI_VIDEOS from "../containers/Academia/BienestarIntegral/Videos/Videos"
import CON_SOSTENIBILIDAD from "../containers/Sostenibilidad/Sostenibilidad";
import CON_SOSTENIBILIDAD_CAJAMARCA from "../containers/Sostenibilidad/regiones/Cajamarca";
import CON_SOSTENIBILIDAD_CHOCONTA from "../containers/Sostenibilidad/regiones/Choconta";
import CON_SOSTENIBILIDAD_GUAITARILLA from "../containers/Sostenibilidad/regiones/Guaitarilla";
import CON_SOSTENIBILIDAD_MONTES from "../containers/Sostenibilidad/regiones/Montes";
import CON_SOSTENIBILIDAD_SOCOTA from "../containers/Sostenibilidad/regiones/Socota";
import CON_SOSTENIBILIDAD_TUMACO from "../containers/Sostenibilidad/regiones/Tumaco";
import CON_SOSTENIBILIDAD_USME from "../containers/Sostenibilidad/regiones/Usme";
import CON_SOSTENIBILIDAD_GUAMEZ from "../containers/Sostenibilidad/regiones/ValleG";
import CON_SOSTENIBILIDAD_VIGIA from "../containers/Sostenibilidad/regiones/Vigia"
import CON_NUESTRAEMPRESA_CULTURA  from "../containers/Nuestra/Cultura";
import CON_EMPRESASB from "../containers/Nuestra/Empresasb"
import CON_ACTUALIZATE from "../containers/Actualizate/Actulizate"
import CON_ACTUALIZATE_PODCAST from "../containers/Actualizate/Podcast"
import CON_ACTUALIZATE_BEATRIZ from "../containers/Actualizate/Beatriz"
import CON_NUESTRAEMPRESA_GENTE from "../containers/Nuestra/Gente"
import CON_GENTE_DOMICILIARIAS from "../containers/Nuestra/NuestraGente/Domiciliarias"
import CON_GENTE_RESTAURANTES from "../containers/Nuestra/NuestraGente/Restaurantes"
import CON_GENTE_CALL from "../containers/Nuestra/NuestraGente/Callcenter"
import CON_GENTE_CAMION from "../containers/Nuestra/NuestraGente/Camion"
import CON_GENTE_COCINA from "../containers/Nuestra/NuestraGente/Cocinaoculta";


export default {
    CON_HOME,
    CON_LOGIN,
    CON_DH,
    CON_DH_BIENESTAR,
    CON_DH_FORMACION,
    CON_DH_BIENESTAR_GALERIA,
    CON_DH_BIENESTAR_ALIADOS,
    CON_DH_BIENESTAR_APOYO,
    CON_DH_BIENESTAR_CONVENIO,
    CON_DH_ADMON,
    CON_DH_RELACIONES,
    CON_DH_SELECCION,
    CON_DH_SST,
    CON_DH_SST_COVID,
    CON_DH_SST_COVID_GALERIA,
    CON_CALIDAD,
    CON_CALIDAD_CORE,
    CON_CALIDAD_INDICADORES,
    CON_MEDIOAMBIENTE,
    CON_CALIDAD_NOTICIAS,
    CON_CALIDAD_HABLADORES,
    CON_CALIDAD_PROCEDIMIENTOS,
    CON_CALIDAD_REQUISITOS,
    CON_ACADEMIA,
    CON_ACADEMIA_ARTE,
    CON_ACADEMIA_EMPODERAMIENTO,
    CON_ACADEMIA_EMPODERAMIENTO_FORMACIONES,
    CON_ACADEMIA_BIENESTAR,
    CON_ACADEMIA_CONCIENCIA,
    CON_ACADEMIA_CURSO,
    CON_ACADEMIA_CURSO2,
    CON_ACADEMIA_CURSO3,
    CON_ACADEMIA_BI_VIDEOS,
    CON_SOSTENIBILIDAD,
    CON_SOSTENIBILIDAD_CAJAMARCA,
    CON_SOSTENIBILIDAD_CHOCONTA,
    CON_SOSTENIBILIDAD_GUAITARILLA,
    CON_SOSTENIBILIDAD_MONTES,
    CON_SOSTENIBILIDAD_SOCOTA,
    CON_SOSTENIBILIDAD_TUMACO,
    CON_SOSTENIBILIDAD_USME,
    CON_SOSTENIBILIDAD_GUAMEZ,
    CON_SOSTENIBILIDAD_VIGIA,
    CON_NUESTRAEMPRESA_CULTURA,
    CON_EMPRESASB,
    CON_ACTUALIZATE,
    CON_ACTUALIZATE_PODCAST,
    CON_ACTUALIZATE_BEATRIZ,
    CON_NUESTRAEMPRESA_GENTE,
    CON_GENTE_DOMICILIARIAS,
    CON_GENTE_RESTAURANTES,
    CON_GENTE_CALL,
    CON_GENTE_CAMION,
    CON_GENTE_COCINA

}