import CON_HOME from "../containers/Home/Home";
import CON_VACUNACION  from "../containers/Home/Vacunación/Vacunacion"
import CON_VACUNACION_GALERIA from "../containers/Home/Vacunación/Galeria"
import CON_LOGIN from "../containers/Login/Login";
import CON_TUTORIAL from "./Login/Tutorial";
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
import CON_CALIDAD_NOTICIAS_ALERGENOS from "../containers/Calidad/NoticiasCalidad/Alergenos"
import CON_CALIDAD_NOTICIAS_DOCUMENTACION from "../containers/Calidad/NoticiasCalidad/Documentacion"
import CON_CALIDAD_NOTICIAS_LYD from "../containers/Calidad/NoticiasCalidad/Limpiezaydesinfeccion"
import CON_CALIDAD_NOTICIAS_PLAGAS from "../containers/Calidad/NoticiasCalidad/Manejoplagas"
import CON_CALIDAD_NOTICIAS_PRODUCTO from "../containers/Calidad/NoticiasCalidad/ManejoProducto"
import CON_CALIDAD_HABLADORES from "../containers/Calidad/CalidadCore/Habladores"
import CON_CALIDAD_PROCEDIMIENTOS  from "../containers/Calidad/CalidadCore/ProcedimeintosE"
import CON_CALIDAD_REQUISITOS  from "../containers/Calidad/CalidadCore/RequisitosH"
import CON_CALIDAD_CORE from "./Calidad/CalidadCore/CalidadMain";
import CON_CALIDAD_INDICADORES from "./Calidad/Indicadores";
import CON_MEDIOAMBIENTE from "./Calidad/MedioA/MedioA";
import CON_MEDIOAMBIENTE_ASPECTOSGENERALES from "./Calidad/MedioA/AspectosGenerales/AspectosGenerales"
import CON_MEDIOAMBIENTE_INDICADORES from "./Calidad/MedioA/Indicadores"
import CON_MA_ASPECTOS_AGUARESIDUAL from "./Calidad/MedioA/AspectosGenerales/AguaResidual"
import CON_MA_ASPECTOS_ENERGIA from "./Calidad/MedioA/AspectosGenerales/Energia"
import CON_MA_ASPECTOS_AGUAPOTABLE from "./Calidad/MedioA/AspectosGenerales/AguaPotable"
import CON_MA_ASPECTOS_RESIDUOS from "./Calidad/MedioA/AspectosGenerales/ResiduosSolidos"
import CON_MA_ASPECTOS_ECONOMIA from "./Calidad/MedioA/AspectosGenerales/Economia"
import CON_MEDIOAMBIENTE_MUNDODEHOY from "./Calidad/MedioA/MedioAmbienteMundo/MedioAmbienteMundo"
import CON_MEDIOAMBIENTE_ASPECTOSAMBIENTALES from "./Calidad/MedioA/AspectosAmbientales/AspectosAmbientales"
import CON_MEDIOAMBIENTE_NOTICIAS from "./Calidad/MedioA/NoticiasMA/NoticiasMA"
import CON_MEDIOAMBIENTE_NOTICIAS_AGUAPOTABLE  from "./Calidad/MedioA/NoticiasMA/AguaPotable"
import CON_MEDIOAMBIENTE_NOTICIAS_AGUARESIDUAL from "./Calidad/MedioA/NoticiasMA/AguaResidual"
import CON_MEDIOAMBIENTE_NOTICIAS_PEDIDOS from "./Calidad/MedioA/NoticiasMA/Pedidos"
import CON_MEDIOAMBIENTE_NOTICIAS_RESIDUOS from "./Calidad/MedioA/NoticiasMA/ResiduosSolidos"
import CON_MA_ASPECTOSAMBIENTALES_COCINACENTRAL from "./Calidad/MedioA/AspectosAmbientales/CocinaCentral"
import CON_MA_ASPECTOSAMBIENTALES_COCINABUCARA from "./Calidad/MedioA/AspectosAmbientales/CocinaBucara"
import CON_MA_ASPECTOSAMBIENTALES_PDVCC from "./Calidad/MedioA/AspectosAmbientales/PdvCC"
import CON_MA_ASPECTOSAMBIENTALES_PDVCALLE from "./Calidad/MedioA/AspectosAmbientales/PdvCalle"
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
import CON_GENTE_HELADERIAS from "../containers/Nuestra/NuestraGente/Heladerias"
import CON_GENTE_CALL from "../containers/Nuestra/NuestraGente/Callcenter"
import CON_GENTE_CAMION from "../containers/Nuestra/NuestraGente/Camion"
import CON_GENTE_COCINA from "../containers/Nuestra/NuestraGente/Cocinaoculta";
import CON_FUNDADORES from "../containers/Fundadores/Fundadores"
import CON_GERENCIA from "../containers/Fundadores/Gerenciaadmon"
import CON_RECONOCIMIENTOS from "../containers/Nuestra/Reconocimientos"
import CON_CALIDAD_PROGRAMAS from "../containers/Calidad/Programas"
import CON_COMPRAS from "../containers/Compras/Compras"
import CON_FINANCIERA from "../containers/Financiera/Financiera"
import CON_FINANCIERA_PLANEACION from "../containers/Financiera/Planeacion/Planeacion"
import CON_FINANCIERA_NOMINA from "../containers/Financiera/Nomina/Nomina"
import CON_FINANCIERA_TESORERIA from "../containers/Financiera/Tesoreria/Tesoreria"
import CON_FINANCIERA_CONTABILIDAD from "../containers/Financiera/Contabilidad/Contabilidad"
import CON_LEGAL from "../containers/Legaladmin/Legal"
import CON_LEGAL_CENTROSERVICIO from "../containers/Legaladmin/CentroServicio/CentroServicio"
import CON_LEGAL_CENTROSERVICIO_DIRADMON  from "../containers/Legaladmin/CentroServicio/Directorioadmon";
import CON_LEGAL_CENTROSERVICIO_DIRPDV from "../containers/Legaladmin/CentroServicio/Directoriopdv";
import CON_LEGAL_GESTIONDOCUMENTAL  from "../containers/Legaladmin/GestionDocu/GestionDocu";
import CON_LEGAL_INMUEBLES from "../containers/Legaladmin/Inmuebles/Inmuebles";
import CON_LEGAL_SEGURIDAD from "../containers/Legaladmin/Seguridad/Seguridad"
import CON_LOGISTICA from "../containers/Logistica/Logistica"
import CON_MANTENIMIENTO from "../containers/Mantenimiento/Mantenimiento"
import CON_MERCADEO from "../containers/Mercadeo/Mercadeo"
import CON_HELADERIAS from "../containers/Oheladerias/Oheladerias"
import CON_RESTAURANTES from "../containers/Orestaurantes/Restaurantes"
import CON_PLANTA_HELADOS from "../containers/Plantahelados/Plantahelados"
import CON_PLANTA_PRODUCCION from "../containers/Plantaproducion/Plantaproduccion"
import CON_SARGLAFT from "../containers/Sarglaft/Sarglaft"
import CON_SARGLAFT_PTEE from "../containers/Sarglaft/Ptee"
import CON_TECNOLOGIA from "../containers/Tecnologia/Tecnologia"
import CON_UBICACIONES from "../containers/Nuestra/Lugares"
import CON_SARGLAFT_INFO  from "../containers/Sarglaft/Info"
import CON_SARGLAFT_INFO_VIDEOS from "../containers/Sarglaft/Info_videos"
import CON_SARGLAFT_PTEE_VIDEOS from "../containers/Sarglaft/Ptee_videos"
import CON_FORM_FACTURACION from "../containers/Financiera/FormFacturación"
import CON_ADMIN_FACTURACION from "../containers/Financiera/AdminFacturacion"



export default {
    CON_HOME,
    CON_LOGIN,
    CON_TUTORIAL,
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
    CON_MEDIOAMBIENTE_ASPECTOSGENERALES,
    CON_MA_ASPECTOS_AGUARESIDUAL,
    CON_MA_ASPECTOS_ENERGIA,
    CON_MA_ASPECTOS_AGUAPOTABLE,
    CON_MA_ASPECTOS_RESIDUOS,
    CON_MA_ASPECTOS_ECONOMIA,
    CON_MEDIOAMBIENTE_MUNDODEHOY,
    CON_MEDIOAMBIENTE_ASPECTOSAMBIENTALES,
    CON_MEDIOAMBIENTE_NOTICIAS,
    CON_MEDIOAMBIENTE_INDICADORES,
    CON_MEDIOAMBIENTE_NOTICIAS_AGUAPOTABLE,
    CON_MEDIOAMBIENTE_NOTICIAS_AGUARESIDUAL,
    CON_MEDIOAMBIENTE_NOTICIAS_PEDIDOS,
    CON_MEDIOAMBIENTE_NOTICIAS_RESIDUOS,
    CON_MA_ASPECTOSAMBIENTALES_COCINACENTRAL,
    CON_MA_ASPECTOSAMBIENTALES_COCINABUCARA,
    CON_MA_ASPECTOSAMBIENTALES_PDVCC,
    CON_MA_ASPECTOSAMBIENTALES_PDVCALLE,
    CON_CALIDAD_NOTICIAS,
    CON_CALIDAD_NOTICIAS_ALERGENOS,
    CON_CALIDAD_NOTICIAS_DOCUMENTACION,
    CON_CALIDAD_NOTICIAS_LYD,
    CON_CALIDAD_NOTICIAS_PLAGAS,
    CON_CALIDAD_NOTICIAS_PRODUCTO,
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
    CON_GENTE_HELADERIAS,
    CON_GENTE_CALL,
    CON_GENTE_CAMION,
    CON_GENTE_COCINA,
    CON_FUNDADORES,
    CON_GERENCIA,
    CON_RECONOCIMIENTOS,
    CON_CALIDAD_PROGRAMAS,
    CON_COMPRAS,
    CON_FINANCIERA,
    CON_FINANCIERA_PLANEACION,
    CON_FINANCIERA_NOMINA,
    CON_FINANCIERA_TESORERIA,
    CON_FINANCIERA_CONTABILIDAD,
    CON_LEGAL,
    CON_LOGISTICA,
    CON_MANTENIMIENTO,
    CON_MERCADEO,
    CON_HELADERIAS,
    CON_RESTAURANTES,
    CON_PLANTA_HELADOS,
    CON_PLANTA_PRODUCCION,
    CON_SARGLAFT,
    CON_SARGLAFT_PTEE,
    CON_SARGLAFT_INFO,
    CON_SARGLAFT_INFO_VIDEOS,
    CON_SARGLAFT_PTEE_VIDEOS,
    CON_TECNOLOGIA,
    CON_UBICACIONES,
    CON_LEGAL_CENTROSERVICIO,
    CON_LEGAL_CENTROSERVICIO_DIRADMON,
    CON_LEGAL_CENTROSERVICIO_DIRPDV,
    CON_LEGAL_GESTIONDOCUMENTAL,
    CON_LEGAL_INMUEBLES,
    CON_LEGAL_SEGURIDAD,
    CON_VACUNACION,
    CON_VACUNACION_GALERIA,
    CON_FORM_FACTURACION,
    CON_ADMIN_FACTURACION

}