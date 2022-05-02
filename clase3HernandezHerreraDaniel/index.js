//Declaramos las variables que usaremos 
let horoscopo;
let dia;
let mes;
let respuesta;

alert('Bienvenido a tu horoscopo');
do {
//Preguntamos la fecha de nacimiento a traves del prompt
dia = parseInt(prompt('Ingresa el número de día en que naciste'));
mes = parseInt(prompt('Ingresa el mes en que naciste'));

//Usamos if para calular el horoscopo dependiendo de la fecha de nacimiento
if((dia>=21&&mes==3)||(dia<=20&&mes==4))
horoscopo = 'Aries';
if((dia>=24&&mes==9)||(dia<=23&&mes==10))
horoscopo = 'Libra';
if((dia>=21&&mes==4)||(dia<=21&&mes==5))
horoscopo = 'Tauro';
if((dia>=24&&mes==10)||(dia<=22&&mes==11))
horoscopo = 'Escrpio';
if((dia>=22&&mes==5)||(dia<=21&&mes==6))
horoscopo = 'Geminis';
if((dia>=23&&mes==11)||(dia<=21&&mes==12))
horoscopo = 'Sagitario';
if((dia>=21&&mes==6)||(dia<=23&&mes==7))
horoscopo = 'Cancer';
if((dia>=22&&mes==12)||(dia<=20&&mes==1))
horoscopo = 'Capricornio';
if((dia>=24&&mes==7)||(dia<=23&&mes==8))
horoscopo = 'Leo';
if((dia>=21&&mes==1)||(dia<=19&&mes==2))
horoscopo = 'Acuario';
if((dia>=24&&mes==8)||(dia<=23&&mes==9))
horoscopo = 'Virgo';
if((dia>=20&&mes==2)||(dia<=20&&mes==3))
horoscopo = 'Piscis';

//Conociendo el signo del usuario con ayuda de switch evaluamos el caso y lanzamos el horoscopo
switch (horoscopo) {

    case 'Aries':
        alert('Aries:\nEs el momento de ahorrar un poco de cara al futuro, Aries, luego lo agradecerás. Podrías hacer cambios favorables a nivel de trabajo, es el momento apropiado. Te darás cuenta de qué negocios son más beneficiosos y lo aprovecharás.');
        break;
    case 'Libra':
        alert('Libra:\nSi estás pensando hacer una compra importante, has elegido un buen día, Libra. Te gustaría tener más dinero para no tener que preocuparte por los gastos. ');
        break;
    case 'Tauro':
        alert('Tauro:\nEn estos días podrías dejar atrás alguna deuda pendiente, Tauro, te irá bien. Puedes cometer algún error en el trabajo si no estás pendiente de lo que haces.');
        break;
    case 'Escorpio':
        alert('Escorpio:\nTendrás que dejar para un poco más adelante algunos de tus proyectos, Escorpio. Tu economía empieza a dar un giro hacia la estabilidad, que ya era hora. ');
        break;
    case 'Geminis':
        alert('Geminis:\nEstarás suspicaz en el trabajo, Géminis, especialmente con un compañero, contrólate. Tienes que controlar más tus arranques consumistas, te estás pasando.');
        break;
    case 'Sagitario':
        alert('Sagitario:\nTe esperan novedades positivas en el terreno laboral y en el económico.Las desavenencias entre tus compañeros no deben afectar a tu rendimiento. Tu economía va bien, e incluso, puedes conseguir un aumento de sueldo. ');
        break;
    case 'Cancer':
        alert('Cancer:\nTu economía puede resentirse por tus deseos de ayudar a todo el mundo, Cáncer. No hagas inversiones que supongan un riesgo excesivo, debes ser prudente.');
        break;
    case 'Leo':
        alert('Leo:\nTendrás noticias favorables sobre un negocio que te traes entre manos, Leo. Resolverás exitosamente un problema que se te presentará en el trabajo. ');
        break;
    case 'Acuario':
        alert('Acuario:\nTus iniciativas en el trabajo se verán recompensadas, tendrás suerte, Acuario. Vas a querer hacer las cosas a tu manera y te saldrán bien. Deberías poner más de tu parte en tus tareas, te van a estar observando. ')
        break;
    case 'Virgo':
        alert('Virgo:\nSerá fácil que te propongan un proyecto interesante y es probable que lo aceptes. Te vendría bien buscar asesoramiento profesional para tus asuntos económicos. ');
        break;
    case 'Piscis':
        alert('Piscis:\nPuedes conseguir los avales que necesitas para un préstamo, Piscis, estás de suerte. Te enfrentarás a nuevas situaciones en el trabajo y las resolverás bien. ');
        break;  
}

//Preguntamos al usuario si desea volver a consultar el horoscopo
respuesta = prompt('¿Deseas volver a consultar tu horoscopo?')
} while (respuesta =='si' || respuesta == 'Si' );
