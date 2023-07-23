const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

const globalForm = document.querySelector('form')
const calculButton = document.getElementById('calcul')
const result = document.getElementById('result')

globalForm.addEventListener('submit', (e) => {
  e.preventDefault()

  let cmValue = document.getElementById('cm-number').value
  let kgValue = document.getElementById('kg-number').value

  if (cmValue < 0 || kgValue < 0 || cmValue === "" || kgValue === "") {

    result.innerHTML = `
    <div class=error-message>
    <p>Whoops</p>
    <p>Veuillez rentrer des valeurs valide</p>
    </div>
    `
  } else {

    //Calcul de l'IMC

    cmValue = cmValue / 100
    cmValue = Math.pow(cmValue, 2)

    let IMC = kgValue / cmValue
    IMC = Math.ceil(IMC)

    // Vérification et exposition du résultat dans le DOM 

    let resultText = "";
    for (let i = 0; i < BMIData.length; i++) {

      const category = BMIData[i];

      if (IMC < category.range[1]) {
        resultText = `
          <div class="IMC">
            <p class=${category.color}>${IMC}</p>
            <p>Résultat : ${category.name}</p>
          </div>
        `;
        break; // Sortir de la boucle dès que la catégorie appropriée est trouvée
      }
    }

    // Si l'IMC est supérieur à la dernière plage, la dernière catégorie s'applique
    if (IMC >= BMIData[BMIData.length - 1].range[1]) {
      resultText = `
        <div class="IMC">
          <p>${IMC}</p>
          <p>Résultat : ${BMIData[BMIData.length - 1].name}</p>
        </div>
      `;
    }

    // Mettre à jour le contenu de l'élément résultat
    result.innerHTML = resultText;










    /* 1ére essai */

    // if (IMC < 18.5) {

    //   result.innerHTML = `
    //   <div class="IMC">
    //     <p>${IMC}</p>
    //     <p>Resultat : ${BMIData[0].name}</p>
    //   </div>
    //   `
    // } else if (IMC < 25) {

    //   result.innerHTML = `
    //   <div class="IMC">
    //     <p>${IMC}</p>
    //     <p>Resultat : ${BMIData[1].name}</p>
    //   </div>
    //   `
    // } else if (IMC < 30) {

    //   result.innerHTML = `
    //   <div class="IMC">
    //     <p>${IMC}</p>
    //     <p>Resultat : ${BMIData[2].name}</p>
    //   </div>
    //   `
    // } else if (IMC < 35) {

    //   result.innerHTML = `
    //   <div class="IMC">
    //     <p>${IMC}</p>
    //     <p>Resultat : ${BMIData[3].name}</p>
    //   </div>
    //   `
    // } else if (IMC < 40) {

    //   result.innerHTML = `
    //   <div class="IMC">
    //     <p>${IMC}</p>
    //     <p>Resultat : ${BMIData[4].name}</p>
    //   </div>
    //   `
    // } else {

    //   result.innerHTML = `
    //   <div class="IMC">
    //     <p>${IMC}</p>
    //     <p>Resultat : ${BMIData[5].name}</p>
    //   </div>
    //   `
    // }


  }

})

