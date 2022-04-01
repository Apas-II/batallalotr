function updateModifiersfuer ()
{
let valorfuer = document.getElementById("valorfuer").value

 if (valorfuer == 102)
document.getElementById("normalfuer").value = 35;
else if (valorfuer == 101)
document.getElementById("normalfuer").value = 30;
else if (valorfuer == 100)
document.getElementById("normalfuer").value = 25;
else if (valorfuer <=99 && valorfuer >=90)
document.getElementById("normalfuer").value = 20;
else if (valorfuer <=89 && valorfuer>= 80)
document.getElementById("normalfuer").value = 15;
else if (valorfuer <=79 && valorfuer>= 70)
document.getElementById("normalfuer").value = 10;
else if (valorfuer <=69 && valorfuer>= 50)
document.getElementById("normalfuer").value = 5;
else if (valorfuer <=49 && valorfuer >= 1)
document.getElementById("normalfuer").value = 0
else if (valorfuer == 6)
document.getElementById("normalfuer").value = 0
else 
document.getElementById("normalfuer").value = null
}
function updateModifiersagi ()
{
let valoragi = document.getElementById("valoragi").value

 if (valoragi == 102)
document.getElementById("normalagi").value = 35;
else if (valoragi == 101)
document.getElementById("normalagi").value = 30;
else if (valoragi == 100)
document.getElementById("normalagi").value = 25;
else if (valoragi <=99 && valoragi >= 90)
document.getElementById("normalagi").value = 20;
else if (valoragi <="89" && valoragi >= 80)
document.getElementById("normalagi").value = 15;
else if (valoragi <=79 && valoragi >= 70)
document.getElementById("normalagi").value = 10;
else if (valoragi <=69 && valoragi >= 50)
document.getElementById("normalagi").value = 5;
else if (valoragi <=49 && valoragi >= 1)
document.getElementById("normalagi").value = 0
else if (valoragi == 6)
document.getElementById("normalagi").value = 0
else
document.getElementById("normalagi").value = null
}
function updateModifiersconst()
{
  let valorconst = document.getElementById("valorconst").value

  if (valorconst == 102)
 document.getElementById("normalconst").value = 35;
 else if (valorconst == 101)
 document.getElementById("normalconst").value = 30;
 else if (valorconst == 100)
 document.getElementById("normalconst").value = 25;
 else if (valorconst <=99 && valorconst >= 90)
 document.getElementById("normalconst").value = 20;
 else if (valorconst <="89" && valorconst >= 80)
 document.getElementById("normalconst").value = 15;
 else if (valorconst <=79 && valorconst >= 70)
 document.getElementById("normalconst").value = 10;
 else if (valorconst <=69 && valorconst >= 50)
 document.getElementById("normalconst").value = 5;
 else if (valorconst <=49 && valorconst >= 1)
 document.getElementById("normalconst").value = 0
 else if (valorconst == 6)
 document.getElementById("normalconst").value = 0
 else
 document.getElementById("normalconst").value = null
}
function updateModifiersint()
{
  let valorint = document.getElementById("valorint").value
  if (valorint == 102)
  document.getElementById("normalint").value = 35;
  else if (valorint == 101)
  document.getElementById("normalint").value = 30;
  else if (valorint == 100)
  document.getElementById("normalint").value = 25;
  else if (valorint <=99 && valorint >= 90)
  document.getElementById("normalint").value = 20;
  else if (valorint <="89" && valorint >= 80)
  document.getElementById("normalint").value = 15;
  else if (valorint <=79 && valorint >= 70)
  document.getElementById("normalint").value = 10;
  else if (valorint <=69 && valorint >= 50)
  document.getElementById("normalint").value = 5;
  else if (valorint <=49 && valorint >= 1)
  document.getElementById("normalint").value = 0
  else if (valorint == 6)
  document.getElementById("normalint").value = 0
  else
  document.getElementById("normalint").value = null 
}
function updateModifiersintu()
{
  let valorintu = document.getElementById("valorintu").value
  if (valorintu == 102)
  document.getElementById("normalintu").value = 35;
  else if (valorintu == 101)
  document.getElementById("normalintu").value = 30;
  else if (valorintu == 100)
  document.getElementById("normalintu").value = 25;
  else if (valorintu <=99 && valorintu >= 90)
  document.getElementById("normalintu").value = 20;
  else if (valorintu <="89" && valorintu >= 80)
  document.getElementById("normalintu").value = 15;
  else if (valorintu <=79 && valorintu >= 70)
  document.getElementById("normalintu").value = 10;
  else if (valorintu <=69 && valorintu >= 50)
  document.getElementById("normalintu").value = 5;
  else if (valorintu <=49 && valorintu >= 1)
  document.getElementById("normalintu").value = 0
  else if (valorintu == 6)
  document.getElementById("normalintu").value = 0
  else
  document.getElementById("normalintu").value = null 
}
function updateModifierspres()
{
  let valorpres = document.getElementById("valorpres").value
  if (valorpres == 102)
  document.getElementById("normalpres").value = 35;
  else if (valorpres == 101)
  document.getElementById("normalpres").value = 30;
  else if (valorpres == 100)
  document.getElementById("normalpres").value = 25;
  else if (valorpres <=99 && valorpres >= 90)
  document.getElementById("normalpres").value = 20;
  else if (valorpres <="89" && valorpres >= 80)
  document.getElementById("normalpres").value = 15;
  else if (valorpres <=79 && valorpres >= 70)
  document.getElementById("normalpres").value = 10;
  else if (valorpres <=69 && valorpres >= 50)
  document.getElementById("normalpres").value = 5;
  else if (valorpres <=49 && valorpres >= 1)
  document.getElementById("normalpres").value = 0
  else if (valorpres == 6)
  document.getElementById("normalpres").value = 0
  else
  document.getElementById("normalpres").value = null 
}
function updateModifiersapa()
{
  let apariencia = document.getElementById("valorapa").value
   document.getElementById("normalapa").value  = apariencia
}





 const razas = 
 [ 
   {raza:"Hombre", fuerza: 10, agilidad: 0, constitucion: 10, inteligencia: 0, intuicion: 0, presencia: 5 }, 
   {raza:"Elfo", fuerza: 0, agilidad: 10, constitucion: 0, inteligencia: 10, intuicion: 5, presencia: 5}, 
   {raza:"Enano", fuerza: 10, agilidad: -5, constitucion: 15, inteligencia: 0, intuicion: -5, presencia: -5}, 
   {raza:"Hobbit", fuerza: -20, agilidad: 15, constitucion: 15, inteligencia: 0, intuicion: -5, presencia: -5}
  ]
 
  razas.forEach((item ) => {
    let listaderazas = document.getElementById("listaderazas")
    let o = document.createElement("option")
    o.text = item.raza;
    o.value = item.raza;
    listaderazas.appendChild(o)
  })
  
document.getElementById("listaderazas").addEventListener('change', function()  //agarro listaderazas. le asigno un listern en ccambio y le tiro la funcion de abajo
{
 let found =razas.find( element=> element.raza == listaderazas.value)
document.getElementById("razafuer").value = found.fuerza
document.getElementById("razaagi").value = found.agilidad
document.getElementById("razaconst").value = found.constitucion
document.getElementById("razaint").value = found.inteligencia
document.getElementById("razaintu").value = found.intuicion
document.getElementById("razapres").value = found.presencia
})

  







const profesiones = 
[
{profesion: "Guerrero", mym: 1, armas: 3, general: 1 , subter: 0 , magia: 0,per: 0, df: 2,}, 
{profesion: "Montaraz", mym: 2, armas: 2, general: 3 , subter: 2 , magia: 0,per:2,df: 2 }, 
{profesion: "Explorador", mym: 2, armas: 1,general: 1 , subter: 2 , magia: 0,per:3, df:0 },
{profesion: "Bardo",mym: 2, armas: 1, general: 1 , subter: 1, magia: 1,per:1,df:0 },
{profesion:"Mago",mym: 1, armas: 0, general: 0 , subter: 0, magia: 3, per:0, df:0 },
{profesion: "Druida",mym: 1, armas:0, general: 1 , subter: 0, magia: 2 , per:2, df:0 }
]



profesiones.forEach((items ) => {
  let listadeprofesiones = document.getElementById("listadeprofesiones")
  let i = document.createElement("option")
  i.text = items.profesion;
  i.value = items.profesion;
  listadeprofesiones.appendChild(i)
})




document.getElementById("listadeprofesiones").addEventListener('change', function() 
{
  let found1 =profesiones.find( element=> element.profesion == listadeprofesiones.value)
  document.getElementById("mymprofesion1").value = found1.mym
  document.getElementById("mymprofesion2").value = found1.mym
  document.getElementById("mymprofesion3").value = found1.mym    // los id de los elementos son unicos. no pueden ser compartidos con otro elemento, a diferencia de las clases
  document.getElementById("mymprofesion4").value = found1.mym
  document.getElementById("mymprofesion5").value = found1.mym
  
  document.getElementById("boprofesion1").value =found1.armas
  document.getElementById("boprofesion2").value =found1.armas
  document.getElementById("boprofesion3").value =found1.armas
  document.getElementById("boprofesion4").value =found1.armas
  document.getElementById("boprofesion5").value =found1.armas
  document.getElementById("boprofesion6").value =found1.armas

  document.getElementById("hgprofesion1").value = found1.general
  document.getElementById("hgprofesion2").value = found1.general
  document.getElementById("hgprofesion3").value = found1.general
  document.getElementById("hgprofesion4").value = found1.general

  document.getElementById("hsprofesion1").value = found1.subter
  document.getElementById("hsprofesion2").value = found1.subter
  document.getElementById("hsprofesion3").value = found1.subter
  document.getElementById("hsprofesion4").value = found1.subter
  
  document.getElementById("magiaprofesion1").value = found1.magia
  document.getElementById("magiaprofesion2").value = found1.magia
  document.getElementById("magiaprofesion3").value = found1.magia
  document.getElementById("magiaprofesion4").value = found1.magia

  document.getElementById("perprofesion").value = found1.per
  document.getElementById("dfprofesion").value = found1.df
})










/* asi pude hacer que sume las strings a total pero no como numeros. tengo que ponerle un evento p*/
document.getElementById("totalfuer").value = parseInt(razafuer.value) + parseInt(normalfuer.value)


