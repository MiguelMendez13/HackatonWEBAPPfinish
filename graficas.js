/*grafica sexo*/



let sexos = document.getElementById("Sexo").getContext("2d");

var char = new Chart(sexos,{
    type: "bar",
    data:{
        labels:["Femenino","Masculino"],
        
        datasets:[{
            label:"Datos de contagios de COVID de 2 generos",
            backgroundColor:["#00fffb","#2b8cca"],
            borderColor:"rgb(200,225,195)",
            color:"#fff",
            data:[2060464, 2040927]

        }]
    }
})

/*grafica edad*/

let edad = {0: 7928, 1: 8108, 2: 6704, 3: 6192, 4: 6501, 5: 6958, 6: 7817, 7: 8620, 8: 9449, 9: 10711, 10: 11549, 11: 13044, 12: 15198, 13: 17962, 14: 20416, 15: 23244, 16: 25857, 17: 29303, 18: 35721, 19: 47330, 20: 57288, 21: 65100, 22: 71181, 23: 79564, 24: 85372, 25: 91109, 26: 97013, 27: 99909, 28: 101199, 29: 100475, 30: 98118, 31: 95770, 32: 92807, 33: 90916, 34: 90208, 35: 89466, 36: 88581, 37: 88937, 38: 88314, 39: 86496, 40: 82950, 41: 78999, 42: 77518, 43: 77875, 44: 78417, 45: 79014, 46: 81295, 47: 80533, 48: 79824, 49: 77546, 50: 72583, 51: 67945, 52: 65689, 53: 62495, 54: 59305, 55: 58303, 56: 56920, 57: 54561, 58: 51453, 59: 49258, 60: 47031, 61: 43663, 62: 39826, 63: 38629, 64: 36085, 65: 34546, 66: 32929, 67: 31079, 68: 28522, 69: 26557, 70: 25420, 71: 23821, 72: 22045, 73: 20228, 74: 18877, 75: 17617, 76: 16424, 77: 14924, 78: 14399, 79: 12877, 80: 11711, 81: 10415, 82: 9178, 83: 8439, 84: 7646, 85: 6978, 86: 5835, 87: 5132, 88: 4168, 89: 3415, 90: 3040, 91: 2476, 92: 1662, 93: 1315, 94: 1062, 95: 877, 96: 592, 97: 447, 98: 368, 99: 266, 100: 281, 101: 112, 102: 57, 103: 65, 104: 55, 105: 40, 106: 31, 107: 39, 108: 27, 109: 28, 110: 23, 111: 10, 112: 14, 113: 5, 114: 10, 115: 15, 116: 13, 117: 8, 118: 11, 119: 4, 120: 67}

let rangosDeEdad = ['0-10','11-20','21-30','31-40','41-50','51-60','61-70','71-80','81-90','91-100','101-110','101-110','111-120'];

let keyEdad = Object.keys(edad);
let valuesEdad = Object.values(edad);
console.log(valuesEdad);

let edades = document.getElementById("Edad").getContext("2d");
let rangoEdad = 0;
let suma = 0;
let iterador = 0;
var arrayEdadConRango = [];

for(var i = 0; i < 15; i++){
    for(var j = 0; j<10; j++){
        
        rangoEdad = valuesEdad[iterador];
        suma += rangoEdad;
        iterador++;
    }
    arrayEdadConRango.push(suma);
    suma = 0;
    rangoEdad=0;
}

var char = new Chart(edades,{
    type: "bar",
    data:{
        labels: rangosDeEdad,
        datasets:[{
            label:"Datos de contagios COVID por edades",
            backgroundColor:["#00fffb","#2b8cca"],
            borderColor:"rgb(200,225,195)",
            data:arrayEdadConRango
        }]
    }
})

/*grafica asma*/
let asma = document.getElementById("Asma").getContext("2d");
let datosAsma = [82746, 4008697, 9948];
var char = new Chart(asma,{
    type: "bar",
    data:{
        labels: ["Si","No","Indefino"],
        datasets:[{
            label:"Datos de contagios COVID de personas con Asma",
            backgroundColor:["#00fffb","#2b8cca"],
            borderColor:"rgb(200,225,195)",
            data:datosAsma
        }]
    }
})

/*grafica embarazo*/

let embarazo = document.getElementById("Embarazo").getContext("2d");
let datosEmbarazo = [30229, 2016836, 2054326];

var char = new Chart(embarazo,{
    type: "bar",
    data:{
        labels: ["Si","No","Indefino"],
        datasets:[{
            label:"Datos de contagio de COVID de mujeres embarazadas",
            backgroundColor:["#00fffb","#2b8cca"],
            borderColor:"rgb(200,225,195)",
            data:datosEmbarazo
        }]
    }
})

/*grafica diabetes*/

let diabetes = document.getElementById("Diabetes").getContext("2d");
let datosDiabetes = [450611, 3639911];

var char = new Chart(diabetes,{
    type: "bar",
    data:{
        labels: ["Si","No"],
        datasets:[{
            label:"Datos de contagios COVID de personas con diabetes",
            backgroundColor:["#00fffb","#2b8cca"],
            borderColor:"rgb(200,225,195)",
            data:datosDiabetes
        }]
    }
})

/*Grafica epoc*/

let epoc = document.getElementById("Epoc").getContext("2d");
let datosEpoc = [36710, 4054551];

var char = new Chart(epoc,{
    type: "bar",
    data:{
        labels: ["Si","No"],
        datasets:[{
            label:"Datos de contagios COVID de personas con epoc",
            backgroundColor:["#00fffb","#2b8cca"],
            borderColor:"rgb(200,225,195)",
            data:datosEpoc
        }]
    }
})

/*Grafica hipertensión */

let hipertension = document.getElementById("Hipertension").getContext("2d");
let datosHipertension = [584609, 3506614];

var char = new Chart(hipertension,{
    type: "bar",
    data:{
        labels: ["Si","No"],
        datasets:[{
            label:"Datos de contagios COVID de personas con hipertensión",
            backgroundColor:["#00fffb","#2b8cca"],
            borderColor:"rgb(200,225,195)",
            data:datosHipertension
        }]
    }
})

/*grafica cardio */

let cardio = document.getElementById("Cardio").getContext("2d");
let datosCardio = [51330, 4039935];

var char = new Chart(cardio,{
    type: "bar",
    data:{
        labels: ["Si","No"],
        datasets:[{
            label:"Datos de contagios COVID de personas con cardio",
            backgroundColor:["#00fffb","#2b8cca"],
            borderColor:"rgb(200,225,195)",
            data:datosCardio
        }]
    }
})

/*grafica obesidad */

let obesidad = document.getElementById("Obesidad").getContext("2d");
let datosObesidad = [499824, 3591807];

var char = new Chart(obesidad,{
    type: "bar",
    data:{
        labels: ["Si","No"],
        datasets:[{
            label:"Datos de contagios COVID de personas con obesidad",
            backgroundColor:["#00fffb","#2b8cca"],
            borderColor:"rgb(200,225,195)",
            data:datosObesidad
        }]
    }
})

/*grafica tabaquismo */

let tabaquismo = document.getElementById("Tabaquismo").getContext("2d");
let datosTabaquismo = [270135, 3820722];

var char = new Chart(tabaquismo,{
    type: "bar",
    data:{
        labels: ["Si","No"],
        datasets:[{
            label:"Datos de contagios COVID de personas con tabaquismo",
            backgroundColor:["#00fffb","#2b8cca"],
            borderColor:"rgb(200,225,195)",
            data:datosTabaquismo
        }]
    }
})

/*grafica muertes */

let muertes = document.getElementById("Muertes").getContext("2d");
let datosMuertes = [289077,3812314];

var char = new Chart(muertes,{
    type: "bar",
    data:{
        labels: ["Si","No"],
        datasets:[{
            label:"Datos de muertes por COVID",
            backgroundColor:["#00fffb","#2b8cca"],
            borderColor:"rgb(200,225,195)",
            data:datosMuertes
        }]
    }
})

/*grafica resultados/prueba covid */

let resultados = document.getElementById("Resultados").getContext("2d");
let datosResultados = [3671611, 6600961, 429780];

var char = new Chart(resultados,{
    type: "bar",
    data:{
        labels: ["Si","No","Sospechosos"],
        datasets:[{
            label:"Datos de pruebas de COVID ",
            backgroundColor:["#00fffb","#2b8cca"],
            borderColor:"rgb(200,225,195)",
            data:datosResultados
        }]
    }
})




/*Municipios*/
function estado_Municipio(idEstado){

    let municipios = {1: {1: 37389, 2: 566, 3: 1147, 4: 151, 5: 1337, 6: 1039, 7: 928, 8: 152, 9: 322, 10: 122, 11: 711, 999: 2}, 2: {1: 12143, 2: 34088, 3: 2851, 4: 43243, 5: 2548, 999: 7}, 3: {1: 4411, 2: 3552, 3: 23436, 4: 0, 5: 0, 6: 0, 7: 0, 8: 23067, 9: 2321, 999: 1}, 4: {1: 604, 2: 13856, 
        3: 8080, 4: 1508, 5: 908, 6: 462, 7: 207, 8: 186, 9: 1843, 10: 473, 11: 361, 999: 2}, 5: {1: 11, 2: 4422, 3: 867, 4: 306, 5: 45, 6: 629, 7: 971, 8: 38, 9: 1900, 10: 2195, 11: 180, 12: 47, 13: 25, 14: 73, 15: 24, 16: 100, 17: 1780, 18: 9161, 19: 239, 20: 2487, 21: 167, 22: 980, 23: 163, 24: 1913, 25: 9807, 26: 56, 27: 1868, 28: 3081, 29: 184, 30: 25118, 31: 595, 32: 2354, 33: 2696, 34: 59, 35: 24357, 36: 145, 37: 313, 38: 462, 999: 3}, 6: {1: 642, 2: 9773, 3: 355, 4: 767, 5: 818, 6: 245, 7: 8739, 8: 221, 9: 5439, 10: 7110, 999: 1}, 7: {1: 47, 2: 227, 3: 167, 4: 105, 5: 48, 6: 253, 7: 99, 8: 539, 9: 528, 10: 43, 11: 119, 12: 593, 13: 112, 14: 13, 15: 362, 16: 265, 17: 679, 18: 56, 19: 5600, 20: 199, 21: 67, 22: 90, 23: 98, 24: 98, 25: 31, 26: 143, 27: 1061, 28: 80, 29: 28, 30: 197, 31: 106, 32: 115, 33: 15, 34: 400, 35: 167, 36: 18, 37: 326, 38: 107, 39: 6, 40: 1064, 41: 124, 42: 548, 43: 154, 44: 41, 45: 106, 46: 185, 47: 63, 48: 342, 49: 120, 50: 168, 
        51: 242, 52: 1051, 53: 60, 54: 279, 55: 54, 56: 92, 57: 553, 58: 10, 59: 3083, 60: 39, 61: 868, 62: 87, 63: 11, 64: 124, 65: 5742, 66: 109, 67: 77, 68: 1740, 69: 414, 70: 14, 71: 219, 72: 42, 73: 6, 74: 1182, 75: 221, 76: 65, 77: 589, 78: 3861, 79: 178, 80: 251, 81: 39, 82: 85, 83: 130, 84: 50, 85: 45, 86: 156, 87: 147, 88: 5, 89: 13529, 90: 2, 91: 190, 92: 228, 93: 91, 94: 146, 95: 0, 96: 162, 97: 2655, 98: 22, 99: 319, 100: 85, 101: 15719, 102: 454, 103: 171, 104: 82, 105: 101, 106: 243, 107: 1026, 108: 3026, 109: 298, 110: 21, 111: 105, 112: 76, 113: 88, 114: 182, 115: 9, 116: 70, 117: 52, 118: 1, 119: 78, 120: 2, 121: 0, 122: 112, 123: 19, 999: 22}, 8: {1: 100, 2: 286, 3: 195, 
        4: 121, 5: 184, 6: 28, 7: 41, 8: 30, 9: 605, 10: 235, 11: 729, 12: 34, 13: 117, 14: 28, 15: 29, 16: 38, 17: 2948, 18: 29, 19: 21795, 20: 123, 21: 2581, 22: 14, 23: 49, 24: 45, 25: 116, 26: 25, 27: 639, 28: 26, 29: 137, 30: 156, 31: 347, 32: 3327, 33: 9, 34: 36, 35: 56, 36: 653, 37: 28833, 38: 123, 39: 49, 40: 151, 41: 7, 42: 76, 43: 8, 44: 66, 45: 503, 46: 45, 47: 19, 48: 180, 49: 47, 50: 1283, 51: 105, 52: 1128, 53: 28, 54: 8, 55: 158, 56: 10, 57: 14, 58: 24, 59: 54, 60: 181, 61: 26, 62: 365, 63: 45, 64: 13, 65: 100, 66: 11, 67: 39, 999: 3}, 9: 
        {1: 0, 2: 51946, 3: 56035, 4: 18843, 5: 123363, 6: 40914, 7: 161314, 8: 29801, 9: 20986, 10: 144948, 11: 51514, 12: 95720, 13: 53612, 14: 
        36757, 15: 53353, 16: 35013, 17: 47910, 999: 21}, 10: {1: 966, 2: 28, 3: 21, 4: 683, 5: 28724, 6: 26, 7: 9687, 8: 536, 9: 92, 10: 50, 11: 
        47, 12: 2669, 13: 252, 14: 307, 15: 79, 16: 135, 17: 391, 18: 238, 19: 22, 20: 215, 21: 62, 22: 256, 23: 1798, 24: 281, 25: 21, 26: 443, 27: 9, 28: 200, 29: 20, 30: 10, 31: 78, 32: 739, 33: 80, 34: 182, 35: 135, 36: 153, 37: 91, 38: 453, 39: 938, 999: 0}, 11: {1: 838, 2: 4287, 3: 4279, 4: 1969, 5: 2359, 6: 78, 7: 17838, 8: 1154, 9: 1564, 10: 674, 11: 2270, 12: 733, 13: 538, 14: 3731, 15: 7629, 16: 385, 17: 17349, 18: 1520, 19: 1516, 20: 65104, 21: 1998, 22: 765, 23: 2734, 24: 271, 25: 1549, 26: 1481, 27: 8540, 28: 3653, 29: 1363, 30: 2785, 31: 4432, 32: 2050, 33: 3549, 34: 68, 35: 2022, 36: 463, 37: 4381, 38: 475, 39: 882, 40: 411, 41: 2202, 42: 4199, 43: 439, 44: 1470, 45: 208, 46: 1575, 999: 3}, 12: {1: 29444, 2: 261, 3: 347, 4: 109, 5: 99, 6: 31, 7: 401, 8: 33, 9: 12, 10: 54, 11: 938, 12: 893, 13: 231, 14: 296, 15: 152, 16: 27, 17: 190, 18: 206, 19: 41, 20: 29, 21: 460, 22: 536, 23: 363, 24: 33, 25: 91, 26: 57, 27: 143, 28: 1555, 29: 13843, 30: 317, 31: 16, 32: 481, 33: 166, 34: 437, 35: 3302, 36: 282, 37: 119, 38: 5026, 39: 446, 40: 167, 41: 62, 42: 109, 43: 26, 44: 301, 45: 69, 46: 
        1631, 47: 6, 48: 534, 49: 71, 50: 1136, 51: 548, 52: 317, 53: 371, 54: 165, 55: 2453, 56: 743, 57: 570, 58: 320, 59: 220, 60: 43, 61: 1546, 62: 95, 63: 18, 64: 256, 65: 116, 66: 1388, 67: 452, 68: 254, 69: 32, 70: 58, 71: 406, 72: 17, 73: 269, 74: 109, 75: 692, 76: 44, 77: 265, 78: 22, 79: 22, 80: 111, 81: 7, 999: 1}, 13: {1: 222, 2: 328, 3: 1147, 4: 104, 5: 444, 6: 202, 7: 227, 8: 1538, 9: 243, 10: 1137, 11: 179, 12: 306, 13: 1108, 14: 159, 15: 224, 16: 829, 17: 288, 18: 119, 19: 283, 20: 16, 21: 465, 22: 366, 23: 401, 24: 166, 25: 119, 26: 84, 
        27: 233, 28: 1987, 29: 966, 30: 1241, 31: 67, 32: 120, 33: 28, 34: 74, 35: 152, 36: 75, 37: 166, 38: 110, 39: 378, 40: 48, 41: 778, 42: 400, 43: 55, 44: 233, 45: 125, 46: 205, 47: 34, 48: 12941, 49: 92, 50: 475, 51: 6305, 52: 488, 53: 197, 54: 443, 55: 210, 56: 926, 57: 185, 
        58: 243, 59: 303, 60: 553, 61: 2478, 62: 108, 63: 2882, 64: 166, 65: 219, 66: 147, 67: 1004, 68: 142, 69: 5406, 70: 449, 71: 66, 72: 303, 
        73: 162, 74: 760, 75: 446, 76: 3776, 77: 5664, 78: 51, 79: 146, 80: 95, 81: 642, 82: 395, 83: 1303, 84: 527, 999: 0}, 14: {1: 192, 2: 374, 3: 247, 4: 42, 5: 72, 6: 960, 7: 103, 8: 915, 9: 127, 10: 118, 11: 46, 12: 40, 13: 1642, 14: 131, 15: 1554, 16: 170, 17: 67, 18: 1052, 19: 45, 20: 37, 21: 433, 22: 979, 23: 2921, 24: 315, 25: 525, 26: 130, 27: 104, 28: 20, 29: 191, 30: 507, 31: 48, 32: 39, 33: 57, 34: 29, 35: 478, 36: 69, 37: 437, 38: 35, 39: 53131, 40: 30, 41: 84, 42: 85, 43: 409, 44: 718, 45: 181, 46: 109, 47: 283, 48: 144, 49: 43, 50: 487, 
        51: 284, 52: 27, 53: 2805, 54: 45, 55: 156, 56: 3, 57: 77, 58: 173, 59: 168, 60: 71, 61: 80, 62: 18, 63: 2012, 64: 525, 65: 111, 66: 621, 
        67: 16245, 68: 91, 69: 32, 70: 3376, 71: 43, 72: 90, 73: 915, 74: 73, 75: 33, 76: 15, 77: 213, 78: 167, 79: 273, 80: 23, 81: 31, 82: 337, 
        83: 1705, 84: 71, 85: 1010, 86: 83, 87: 153, 88: 93, 89: 23, 90: 97, 91: 528, 92: 44, 93: 3255, 94: 305, 95: 89, 96: 148, 97: 9852, 98: 13380, 99: 38, 100: 289, 101: 8659, 102: 33, 103: 83, 104: 39, 105: 154, 106: 36, 107: 28, 108: 293, 109: 245, 110: 110, 111: 86, 112: 39, 113: 62, 114: 251, 115: 51, 116: 116, 117: 35, 118: 280, 119: 303, 120: 29960, 121: 290, 122: 45, 123: 147, 124: 388, 125: 106, 999: 0}, 15: {1: 796, 2: 2245, 3: 384, 4: 129, 5: 1395, 6: 424, 7: 575, 8: 219, 9: 1020, 10: 439, 11: 1082, 12: 1214, 13: 14171, 14: 2382, 15: 313, 16: 466, 17: 73, 18: 851, 19: 778, 20: 9233, 21: 233, 22: 343, 23: 816, 24: 7916, 25: 17820, 26: 136, 27: 247, 28: 314, 29: 4160, 30: 290, 
        31: 12867, 32: 192, 33: 54488, 34: 94, 35: 2458, 36: 424, 37: 7940, 38: 159, 39: 13122, 40: 670, 41: 26, 42: 1612, 43: 443, 44: 371, 45: 1286, 46: 479, 47: 404, 48: 962, 49: 238, 50: 420, 51: 2468, 52: 360, 53: 1281, 54: 5577, 55: 249, 56: 290, 57: 31838, 58: 46187, 59: 582, 
        60: 10904, 61: 184, 62: 1205, 63: 284, 64: 452, 65: 554, 66: 19, 67: 707, 68: 486, 69: 49, 70: 7143, 71: 77, 72: 302, 73: 645, 74: 793, 75: 437, 76: 2385, 77: 67, 78: 93, 79: 74, 80: 97, 81: 12790, 82: 1581, 83: 402, 84: 504, 85: 605, 86: 215, 87: 714, 88: 1469, 89: 240, 90: 
        1496, 91: 1302, 92: 1391, 93: 242, 94: 243, 95: 1125, 96: 367, 97: 170, 98: 194, 99: 6124, 100: 886, 101: 1686, 102: 132, 103: 1419, 104: 
        28192, 105: 116, 106: 23136, 107: 146, 108: 3426, 109: 13273, 110: 1012, 111: 180, 112: 317, 113: 383, 114: 535, 115: 988, 116: 30, 117: 61, 118: 2503, 119: 158, 120: 5106, 121: 11178, 122: 7602, 123: 204, 124: 504, 125: 143, 999: 4991}, 16: {1: 92, 2: 26, 3: 246, 4: 159, 5: 
        101, 6: 2211, 7: 53, 8: 107, 9: 1008, 10: 176, 11: 63, 12: 327, 13: 77, 14: 78, 15: 214, 16: 121, 17: 75, 18: 106, 19: 207, 20: 262, 21: 56, 22: 274, 23: 22, 24: 106, 25: 258, 26: 36, 27: 20, 28: 67, 29: 22, 30: 64, 31: 71, 32: 94, 33: 150, 34: 1124, 35: 325, 36: 133, 37: 62, 38: 1157, 39: 40, 40: 88, 41: 73, 42: 40, 43: 675, 44: 115, 45: 352, 46: 210, 47: 101, 48: 56, 49: 75, 50: 911, 51: 99, 52: 12195, 53: 16856, 54: 37, 55: 756, 56: 107, 57: 80, 58: 79, 59: 67, 60: 131, 61: 79, 62: 74, 63: 99, 64: 128, 65: 658, 66: 2290, 67: 107, 68: 189, 69: 
        2162, 70: 202, 71: 598, 72: 140, 73: 252, 74: 112, 75: 1121, 76: 796, 77: 201, 78: 104, 79: 229, 80: 61, 81: 31, 82: 476, 83: 206, 84: 192, 85: 245, 86: 87, 87: 311, 88: 869, 89: 259, 90: 60, 91: 94, 92: 75, 93: 160, 94: 58, 95: 134, 96: 20, 97: 173, 98: 388, 99: 234, 100: 212, 101: 62, 102: 8354, 103: 116, 104: 139, 105: 84, 106: 280, 107: 1631, 108: 3166, 109: 61, 110: 500, 111: 97, 112: 2044, 113: 264, 999: 
        3}, 17: {1: 311, 2: 415, 3: 475, 4: 1582, 5: 215, 6: 6283, 7: 16377, 8: 2041, 9: 551, 10: 278, 11: 7293, 12: 1641, 13: 388, 14: 188, 15: 291, 16: 241, 17: 1062, 18: 3008, 19: 382, 20: 923, 21: 225, 22: 280, 23: 156, 24: 1138, 25: 709, 26: 422, 27: 209, 28: 1477, 29: 3043, 30: 976, 31: 1411, 32: 270, 33: 172, 34: 33, 35: 126, 999: 2}, 18: {1: 895, 2: 256, 3: 63, 4: 1875, 5: 96, 6: 539, 7: 266, 8: 1478, 9: 206, 10: 512, 11: 387, 12: 865, 13: 81, 14: 297, 15: 2189, 16: 586, 17: 22990, 18: 650, 19: 33, 20: 6723, 999: 3}, 19: {1: 45, 2: 172, 3: 27, 4: 2136, 5: 315, 6: 23058, 7: 348, 8: 109, 9: 6230, 10: 1504, 11: 600, 12: 1771, 13: 184, 14: 1301, 15: 18, 16: 90, 17: 778, 18: 8197, 19: 2519, 20: 216, 21: 12059, 22: 558, 23: 71, 24: 103, 25: 1720, 26: 29159, 27: 43, 28: 35, 29: 133, 30: 33, 31: 10435, 32: 151, 33: 3217, 34: 56, 35: 65, 36: 105, 37: 83, 38: 3722, 39: 60124, 40: 17, 41: 2535, 42: 89, 43: 51, 44: 2774, 45: 2067, 46: 16281, 47: 422, 48: 12731, 49: 2378, 50: 25, 51: 186, 999: 1}, 20: {1: 29, 2: 160, 3: 5, 4: 9, 5: 301, 6: 339, 7: 20, 8: 7, 9: 32, 10: 653, 11: 11, 12: 23, 13: 31, 14: 1347, 15: 8, 16: 6, 17: 7, 18: 8, 19: 7, 20: 26, 21: 94, 22: 10, 23: 677, 24: 8, 25: 34, 26: 149, 27: 5, 28: 390, 29: 0, 30: 191, 31: 61, 32: 8, 33: 106, 34: 4, 35: 19, 36: 24, 37: 14, 38: 3, 39: 2517, 40: 12, 41: 122, 42: 111, 43: 2087, 44: 484, 45: 369, 46: 13, 47: 10, 48: 1, 49: 24, 50: 3, 51: 9, 52: 248, 53: 24, 54: 1, 55: 17, 56: 6, 57: 359, 58: 11, 59: 1139, 60: 5, 61: 19, 62: 4, 63: 155, 64: 49, 65: 9, 
        66: 34, 67: 20302, 68: 791, 69: 4, 70: 54, 71: 13, 72: 174, 73: 390, 74: 0, 75: 9, 76: 10, 77: 133, 78: 23, 79: 2917, 80: 2, 81: 9, 82: 12, 83: 432, 84: 219, 85: 54, 86: 7, 87: 168, 88: 4, 89: 19, 90: 28, 91: 372, 92: 38, 93: 1, 94: 5, 95: 8, 96: 8, 97: 2, 98: 0, 99: 3, 100: 
        0, 101: 0, 102: 103, 103: 132, 104: 6, 105: 6, 106: 0, 107: 1025, 108: 14, 109: 4, 110: 3, 111: 10, 112: 33, 113: 4, 114: 2, 115: 495, 116: 5, 117: 3, 118: 12, 119: 0, 120: 1, 121: 2, 122: 4, 123: 13, 124: 169, 125: 30, 126: 8, 127: 2, 128: 0, 129: 1, 130: 11, 131: 37, 132: 47, 133: 18, 134: 69, 135: 143, 136: 21, 137: 10, 138: 1, 139: 6, 140: 3, 141: 12, 142: 0, 143: 48, 144: 2, 145: 141, 146: 4, 147: 2, 148: 
        4, 149: 14, 150: 234, 151: 0, 152: 5, 153: 28, 154: 7, 155: 0, 156: 20, 157: 939, 158: 12, 159: 21, 160: 11, 161: 15, 162: 9, 163: 7, 164: 21, 165: 8, 166: 94, 167: 5, 168: 3, 169: 1, 170: 2, 171: 22, 172: 3, 173: 26, 174: 190, 175: 11, 176: 35, 177: 258, 178: 167, 179: 2, 180: 5, 181: 1, 182: 2, 183: 8, 184: 4902, 185: 71, 186: 0, 187: 2, 188: 17, 189: 7, 190: 80, 191: 0, 192: 33, 193: 70, 194: 15, 195: 1, 196: 1, 197: 24, 198: 53, 199: 1, 200: 6, 201: 1, 202: 11, 203: 4, 204: 2, 205: 23, 206: 12, 207: 21, 208: 16, 209: 2, 210: 15, 211: 3, 212: 
        1, 213: 3, 214: 3, 215: 2, 216: 3, 217: 7, 218: 2, 219: 27, 220: 1, 221: 5, 222: 1, 223: 0, 224: 2, 225: 4, 226: 14, 227: 621, 228: 0, 229: 3, 230: 6, 231: 19, 232: 111, 233: 13, 234: 2, 235: 14, 236: 1, 237: 12, 238: 5, 239: 6, 240: 4, 241: 9, 242: 25, 243: 28, 244: 26, 245: 2, 246: 13, 247: 36, 248: 68, 249: 9, 250: 5, 251: 9, 252: 9, 253: 3, 254: 20, 255: 4, 256: 4, 257: 4, 258: 19, 259: 6, 260: 1, 261: 18, 
        262: 6, 263: 6, 264: 1, 265: 36, 266: 56, 267: 0, 268: 13, 269: 71, 270: 5, 271: 16, 272: 14, 273: 7, 274: 0, 275: 3, 276: 1, 277: 91, 278: 94, 279: 13, 280: 15, 281: 1, 282: 1, 283: 8, 284: 6, 285: 14, 286: 26, 287: 11, 288: 1, 289: 13, 290: 7, 291: 22, 292: 8, 293: 765, 294: 211, 295: 153, 296: 31, 297: 6, 298: 174, 299: 2, 300: 41, 301: 36, 302: 7, 303: 7, 304: 11, 305: 78, 306: 6, 307: 104, 308: 40, 309: 18, 310: 303, 311: 0, 312: 26, 313: 0, 314: 2, 315: 25, 316: 2, 317: 1, 318: 1211, 319: 6, 320: 11, 321: 3, 322: 0, 323: 2, 324: 626, 325: 38, 326: 8, 327: 140, 328: 2, 329: 1, 330: 69, 331: 0, 332: 0, 333: 67, 334: 227, 335: 1, 336: 3, 337: 18, 338: 482, 339: 58, 340: 12, 341: 3, 342: 110, 343: 66, 344: 11, 345: 11, 346: 6, 347: 6, 348: 52, 349: 22, 350: 1072, 351: 10, 352: 7, 353: 10, 354: 0, 355: 0, 356: 10, 357: 0, 358: 9, 359: 3, 360: 46, 361: 0, 362: 15, 363: 25, 364: 295, 365: 3, 366: 11, 367: 11, 368: 36, 369: 37, 370: 5, 371: 7, 372: 4, 373: 0, 374: 2, 375: 738, 376: 0, 377: 33, 378: 20, 379: 9, 380: 58, 381: 28, 382: 4, 383: 0, 384: 20, 385: 4355, 386: 17, 387: 36, 388: 6, 
        389: 2, 390: 3315, 391: 5, 392: 9, 393: 34, 394: 13, 395: 3, 396: 1, 397: 841, 398: 37, 399: 1620, 400: 20, 401: 321, 402: 2, 403: 152, 404: 4, 405: 18, 406: 7, 407: 39, 408: 2, 409: 586, 410: 4, 411: 8, 412: 11, 413: 1856, 414: 37, 415: 13, 416: 1, 417: 47, 418: 146, 419: 2, 420: 4, 421: 84, 422: 4, 423: 0, 424: 32, 425: 2, 426: 13, 427: 137, 428: 8, 429: 7, 430: 0, 431: 15, 432: 10, 433: 3, 434: 5, 435: 3, 436: 0, 437: 50, 438: 1, 439: 199, 440: 3, 441: 18, 442: 0, 443: 2, 444: 0, 445: 6, 446: 12, 447: 69, 448: 0, 449: 12, 450: 23, 451: 1, 452: 33, 453: 49, 454: 3, 455: 20, 456: 16, 457: 11, 458: 3, 459: 43, 460: 53, 461: 4, 462: 79, 463: 3, 464: 0, 465: 2, 466: 9, 467: 196, 468: 14, 469: 299, 470: 9, 471: 0, 472: 51, 473: 0, 474: 21, 475: 75, 476: 1, 477: 2, 478: 1, 479: 0, 480: 2, 481: 1, 482: 713, 483: 225, 484: 14, 485: 6, 486: 31, 487: 8, 488: 2, 489: 15, 490: 3, 491: 6, 492: 8, 493: 3, 494: 16, 495: 0, 496: 12, 497: 12, 498: 25, 499: 42, 500: 23, 501: 6, 502: 8, 503: 0, 504: 1, 505: 349, 506: 3, 507: 9, 508: 36, 509: 11, 510: 11, 511: 4, 512: 2, 513: 75, 514: 0, 515: 1270, 516: 15, 517: 11, 518: 2, 519: 81, 520: 45, 521: 3, 522: 0, 523: 20, 524: 2, 525: 30, 526: 72, 527: 1, 528: 8, 529: 2, 530: 41, 531: 32, 532: 7, 533: 22, 534: 38, 535: 6, 536: 7, 537: 45, 538: 5, 539: 220, 540: 123, 541: 3, 542: 7, 543: 6, 544: 6, 545: 141, 546: 66, 547: 19, 548: 35, 549: 55, 550: 140, 551: 995, 552: 4, 553: 452, 554: 13, 555: 56, 556: 3, 557: 150, 558: 32, 559: 112, 560: 22, 561: 8, 562: 7, 563: 7, 
        564: 0, 565: 1343, 566: 3, 567: 10, 568: 13, 569: 4, 570: 438, 999: 0}, 21: {1: 340, 2: 36, 3: 492, 4: 236, 5: 11, 6: 25, 7: 12, 8: 53, 9: 15, 10: 195, 11: 14, 12: 30, 13: 92, 14: 14, 15: 852, 16: 46, 17: 162, 18: 16, 19: 3030, 20: 32, 21: 12, 22: 30, 23: 21, 24: 2, 25: 37, 26: 86, 27: 20, 28: 5, 29: 14, 30: 10, 31: 12, 32: 7, 33: 14, 34: 431, 35: 238, 36: 8, 37: 29, 38: 44, 39: 15, 40: 35, 41: 1869, 42: 16, 43: 180, 44: 82, 45: 420, 46: 39, 47: 335, 48: 192, 49: 61, 50: 53, 51: 466, 52: 0, 53: 1101, 54: 353, 55: 19, 56: 10, 57: 11, 58: 41, 59: 18, 60: 28, 61: 12, 62: 41, 63: 60, 64: 42, 65: 30, 66: 52, 67: 85, 68: 13, 69: 141, 70: 25, 71: 2172, 72: 42, 73: 108, 74: 1381, 75: 39, 76: 148, 77: 16, 78: 37, 79: 22, 80: 4, 81: 11, 82: 104, 83: 68, 84: 19, 85: 1298, 86: 54, 87: 40, 88: 21, 89: 36, 90: 254, 91: 128, 92: 18, 93: 20, 94: 254, 95: 10, 96: 21, 97: 8, 98: 38, 99: 36, 100: 44, 101: 15, 102: 52, 103: 32, 104: 130, 105: 24, 106: 247, 107: 10, 108: 159, 109: 80, 110: 172, 111: 49, 112: 45, 113: 39, 114: 79922, 115: 143, 116: 26, 117: 173, 118: 86, 119: 2912, 120: 23, 121: 5, 122: 87, 123: 14, 124: 61, 125: 96, 126: 44, 127: 19, 128: 104, 129: 49, 130: 35, 131: 5, 132: 3214, 133: 8, 134: 158, 135: 5, 136: 130, 137: 59, 138: 66, 139: 19, 140: 2783, 141: 35, 142: 478, 143: 341, 144: 95, 145: 11, 146: 19, 147: 23, 148: 61, 149: 245, 150: 23, 151: 48, 152: 96, 
        153: 201, 154: 806, 155: 222, 156: 11858, 157: 101, 158: 23, 159: 18, 160: 29, 161: 233, 162: 6, 163: 84, 164: 762, 165: 8, 166: 78, 167: 
        12, 168: 38, 169: 253, 170: 61, 171: 13, 172: 115, 173: 56, 174: 3584, 175: 53, 176: 96, 177: 188, 178: 45, 179: 252, 180: 232, 181: 55, 182: 40, 183: 100, 184: 23, 185: 43, 186: 324, 187: 22, 188: 63, 189: 115, 190: 5, 191: 191, 192: 16, 193: 16, 194: 228, 195: 19, 196: 14, 
        197: 791, 198: 9, 199: 224, 200: 10, 201: 15, 202: 24, 203: 18, 204: 51, 205: 77, 206: 23, 207: 528, 208: 869, 209: 56, 210: 18, 211: 138, 212: 55, 213: 49, 214: 72, 215: 3, 216: 6, 217: 25, 999: 3}, 22: {1: 666, 2: 357, 3: 354, 4: 1561, 5: 931, 6: 6183, 7: 784, 8: 323, 9: 1623, 10: 248, 11: 5468, 12: 1970, 13: 208, 14: 65905, 15: 300, 16: 9132, 17: 1091, 18: 441, 999: 1}, 23: {1: 2325, 2: 1537, 3: 655, 4: 10882, 5: 33483, 6: 698, 7: 1140, 8: 11653, 9: 987, 10: 598, 11: 76, 999: 3}, 24: {1: 283, 2: 103, 3: 381, 4: 54, 5: 649, 6: 144, 7: 424, 8: 455, 9: 87, 10: 204, 11: 1731, 12: 423, 13: 8568, 14: 230, 15: 587, 16: 978, 17: 308, 18: 286, 19: 63, 20: 4092, 21: 778, 22: 143, 23: 524, 24: 4524, 25: 334, 26: 86, 27: 237, 28: 53392, 29: 391, 30: 46, 31: 106, 32: 913, 33: 118, 34: 252, 35: 7427, 36: 402, 37: 4126, 38: 301, 39: 241, 40: 1258, 41: 328, 42: 408, 43: 99, 44: 89, 45: 177, 46: 194, 47: 139, 48: 95, 49: 205, 50: 894, 51: 142, 52: 100, 53: 1003, 54: 959, 55: 330, 56: 463, 57: 885, 58: 677, 999: 2}, 25: {1: 11025, 2: 769, 3: 638, 4: 206, 5: 570, 6: 33488, 7: 292, 8: 1049, 9: 1618, 10: 
        1521, 11: 8918, 12: 12661, 13: 439, 14: 1320, 15: 1903, 16: 297, 17: 742, 18: 2626, 999: 4}, 26: {1: 53, 2: 1499, 3: 607, 4: 147, 5: 31, 6: 49, 7: 13, 8: 7, 9: 18, 10: 9, 11: 57, 12: 533, 13: 68, 14: 190, 15: 9, 16: 76, 17: 4940, 18: 19418, 19: 2353, 20: 61, 21: 8, 22: 13, 23: 84, 24: 7, 25: 2759, 26: 1128, 27: 50, 28: 53, 29: 5587, 30: 49431, 31: 8, 32: 19, 33: 2448, 34: 12, 35: 135, 36: 862, 37: 9, 38: 151, 39: 56, 40: 75, 41: 474, 42: 5631, 43: 5966, 44: 7, 45: 6, 46: 7, 47: 352, 48: 1156, 49: 64, 50: 16, 51: 133, 52: 239, 53: 8, 54: 19, 55: 4824, 56: 48, 57: 15, 58: 588, 59: 3, 60: 31, 61: 5, 62: 8, 63: 12, 64: 15, 65: 12, 66: 152, 67: 17, 68: 7, 69: 93, 70: 411, 71: 728, 72: 376, 999: 3}, 27: {1: 2614, 2: 13663, 3: 3187, 4: 63066, 5: 7431, 6: 5733, 7: 1702, 8: 4643, 9: 2154, 10: 5779, 11: 1108, 12: 6986, 13: 12268, 14: 5971, 15: 1813, 16: 2911, 17: 3903, 999: 0}, 28: {1: 131, 2: 984, 3: 9013, 4: 124, 5: 25, 6: 33, 7: 275, 8: 19, 9: 8451, 10: 18, 11: 101, 12: 433, 13: 144, 14: 68, 15: 89, 16: 155, 17: 338, 18: 64, 19: 153, 20: 40, 21: 4316, 22: 15944, 23: 19, 24: 138, 25: 800, 26: 30, 27: 8276, 28: 51, 29: 116, 30: 330, 31: 13, 32: 15559, 33: 2031, 34: 80, 35: 1083, 36: 13, 37: 984, 38: 14761, 39: 331, 40: 1417, 41: 15341, 42: 43, 43: 451, 999: 2}, 29: {1: 291, 2: 526, 3: 100, 4: 91, 5: 3468, 6: 685, 7: 135, 8: 126, 9: 129, 10: 1865, 11: 58, 12: 56, 13: 
        1616, 14: 138, 15: 730, 16: 153, 17: 63, 18: 757, 19: 340, 20: 61, 21: 224, 22: 137, 23: 364, 24: 649, 25: 1075, 26: 478, 27: 228, 28: 681, 29: 357, 30: 145, 31: 761, 32: 198, 33: 5078, 34: 786, 35: 153, 36: 634, 37: 81, 38: 452, 39: 489, 40: 216, 41: 837, 42: 404, 43: 1103, 
        44: 1599, 45: 29, 46: 24, 47: 57, 48: 276, 49: 78, 50: 173, 51: 91, 52: 72, 53: 124, 54: 136, 55: 49, 56: 121, 57: 71, 58: 194, 59: 64, 60: 80, 999: 0}, 30: {1: 47, 2: 14, 3: 465, 4: 224, 5: 49, 6: 130, 7: 21, 8: 15, 9: 119, 10: 243, 11: 741, 12: 99, 13: 153, 14: 586, 15: 369, 16: 1229, 17: 15, 18: 6, 19: 9, 20: 72, 21: 186, 22: 294, 23: 199, 24: 30, 25: 57, 26: 299, 27: 32, 28: 2746, 29: 16, 30: 856, 31: 38, 32: 419, 33: 174, 34: 158, 35: 15, 36: 57, 37: 8, 38: 1410, 39: 10171, 40: 1260, 41: 14, 42: 19, 43: 36, 44: 7597, 45: 2040, 46: 33, 47: 235, 48: 1240, 49: 98, 50: 30, 51: 45, 52: 102, 53: 204, 54: 94, 55: 52, 56: 25, 57: 25, 58: 311, 59: 89, 60: 15, 61: 533, 62: 211, 63: 26, 
        64: 3, 65: 668, 66: 89, 67: 17, 68: 2334, 69: 178, 70: 28, 71: 385, 72: 85, 73: 282, 74: 179, 75: 53, 76: 18, 77: 325, 78: 26, 79: 25, 80: 97, 81: 470, 82: 127, 83: 88, 84: 58, 85: 1786, 86: 105, 87: 10881, 88: 28, 89: 569, 90: 119, 91: 46, 92: 198, 93: 141, 94: 121, 95: 35, 
        96: 5, 97: 524, 98: 14, 99: 142, 100: 234, 101: 725, 102: 2322, 103: 9, 104: 20, 105: 1478, 106: 19, 107: 3, 108: 3432, 109: 426, 110: 10, 111: 93, 112: 101, 113: 42, 114: 45, 115: 1211, 116: 79, 117: 130, 118: 5896, 119: 14, 120: 61, 121: 80, 122: 16, 123: 1938, 124: 1622, 125: 157, 126: 467, 127: 47, 128: 619, 129: 57, 130: 138, 131: 7834, 132: 63, 133: 566, 134: 367, 135: 453, 136: 48, 137: 7, 138: 1544, 139: 54, 140: 19, 141: 2001, 142: 38, 143: 337, 144: 51, 145: 54, 146: 16, 147: 17, 148: 238, 149: 31, 150: 17, 151: 88, 152: 62, 153: 13, 154: 12, 155: 255, 156: 8, 157: 67, 158: 129, 159: 22, 160: 564, 161: 138, 162: 11, 163: 7, 164: 108, 165: 7, 166: 19, 167: 31, 168: 41, 169: 306, 170: 13, 171: 10, 172: 50, 173: 127, 174: 1235, 175: 1173, 176: 33, 177: 34, 178: 142, 179: 11, 180: 13, 181: 201, 182: 109, 183: 415, 184: 11, 185: 96, 186: 60, 187: 8, 188: 33, 189: 3458, 190: 37, 191: 581, 192: 125, 193: 23905, 194: 62, 195: 1, 196: 261, 197: 17, 198: 8, 199: 31, 200: 10, 201: 376, 202: 12, 203: 18, 204: 454, 205: 294, 206: 511, 207: 737, 208: 392, 209: 13, 210: 84, 211: 284, 212: 18, 999: 1}, 31: {1: 75, 2: 499, 3: 112, 4: 95, 5: 43, 6: 290, 7: 65, 8: 22, 9: 63, 10: 10, 11: 72, 12: 45, 13: 353, 14: 117, 15: 39, 16: 21, 17: 105, 18: 88, 19: 490, 20: 50, 21: 168, 22: 73, 23: 51, 24: 46, 25: 107, 26: 66, 27: 79, 28: 11, 29: 32, 30: 121, 31: 16, 32: 239, 33: 154, 34: 49, 35: 64, 36: 74, 37: 37, 38: 966, 39: 41, 40: 616, 41: 3043, 42: 27, 43: 43, 44: 129, 45: 35, 46: 33, 47: 46, 48: 636, 49: 6, 50: 52090, 51: 44, 52: 865, 53: 148, 54: 40, 55: 61, 56: 352, 57: 114, 58: 521, 59: 1915, 60: 11, 61: 115, 62: 74, 63: 116, 64: 10, 65: 140, 66: 58, 67: 113, 68: 41, 69: 25, 70: 128, 71: 18, 72: 34, 73: 11, 74: 70, 75: 113, 76: 167, 77: 18, 78: 37, 79: 985, 80: 46, 81: 72, 82: 41, 83: 20, 84: 58, 85: 374, 86: 17, 87: 50, 88: 32, 89: 2004, 90: 66, 91: 342, 92: 60, 93: 359, 94: 17, 95: 100, 96: 2627, 97: 26, 98: 145, 99: 146, 100: 52, 101: 1929, 102: 4432, 103: 22, 104: 135, 105: 42, 106: 22, 999: 1}, 32: {1: 38, 2: 27, 3: 43, 4: 45, 5: 739, 6: 72, 7: 449, 8: 141, 9: 64, 10: 8150, 11: 37, 12: 84, 13: 88, 14: 188, 15: 11, 16: 231, 17: 10861, 18: 50, 19: 428, 20: 1472, 21: 30, 22: 189, 23: 118, 24: 636, 25: 89, 26: 260, 27: 13, 28: 13, 29: 154, 30: 91, 31: 181, 32: 360, 33: 20, 34: 1258, 35: 116, 36: 631, 37: 164, 38: 553, 39: 759, 40: 132, 41: 28, 42: 1616, 43: 18, 44: 245, 45: 185, 46: 94, 47: 178, 48: 870, 49: 246, 50: 183, 51: 430, 52: 110, 53: 146, 54: 118, 55: 514, 56: 10279, 57: 415, 58: 44, 999: 1}}
    
   
    let municipio = municipios[idEstado];
    let estadokey = Object.keys(municipios);
    
   let graficaPorEstado= document.getElementById("Estados").getContext("2d");
    
    var char = new Chart(graficaPorEstado,{
        type: "pie",
        data:{
            labels: ['Estado','AGUASCALIENTES', 'ASIENTOS', 'CALVILLO', 'COSÍO', 'JESÚS MARÍA', 'PABELLÓN DE ARTEAGA', 'RINCÓN DE ROMOS', 'SAN JOSÉ DE GRACIA', 'TEPEZALÁ', 'EL LLANO', 'SAN FRANCISCO DE LOS ROMO', 'NO ESPECIFICADO'],
            datasets:[{
                color:"3",
                label:estadokey[idEstado],
                backgroundColor:["#fff","#2b8cca","#20cad8","#00fffb"],
                borderColor:"rgb(255,255,255)",
                data:municipio
                
            }]
        }
    })

}
/*Recibe el estado a graficar */
estado_Municipio(1)