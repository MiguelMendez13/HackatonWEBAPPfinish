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