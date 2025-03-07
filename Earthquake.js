function Earthquake(richter){
    var result = 0;

    if (richter < 5){
        result = "Little to no damage";
    }

    else if (richter <=5 && richter < 5.5 ){
         result = "Some damage";
    }

    else if (richter <= 5.5 && richter < 6.5){
        result = "Serious damage: walls may crack or fall"
    }

    else if (richter <= 6.5 && richter < 7.5){
        result = "Disaster: buildings may collapse";
    }

    else if (richter >= 7.5){
        result = "Catastrophe: most buildings destroyed";
    }

    else result = "Unknown";
return result;
}


export {Earthquake}