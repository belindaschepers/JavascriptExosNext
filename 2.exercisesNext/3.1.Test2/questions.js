let CreationTableauLangages =  () => {
    let langage = ["Html" , "CSS", "Java", "PHP" ];
    return (langage);

}

let CreationTableauNombres =  () => {
    let nombres = [0, 1, 2, 3, 4, 5];
    return (nombres);

}

let RemplacementElement =  (langages) => {
    langages[2] = "Javascript";
    return langages;
    
}

let AjoutElementLangages =  (langages) => {
    langages.push("Ruby", "Python");
    return langages;

}

let AjoutElementNombres =  (nombres) => {
    nombres.unshift(-2, -1);
    return nombres;

}

let SuppressionPremierElement =  (langages) => {
    langages.shift();
    return langages;

}

let SuppressionDernierElement =  (langages) => {
    langages.pop();
    return langages;

}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
    return reseaux_sociaux_chaine.split(",");

}

let ConversionTableauChaine =  (langages) => {
    return langages.toString();

}

let TriTableau =  (reseaux_sociaux) => {
    return reseaux_sociaux.sort();

}

let InversionTableau =  (reseaux_sociaux) =>{
    return reseaux_sociaux.reverse();

}
