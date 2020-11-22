// .then & fetch method.



const getData = fetch("https://restcountries.eu/rest/v2/all");  // Su "fetch" pasiprasome duomenu.
console.log(getData);
//const main = document.getElementById("main");
getData.then(response=> {                                            // Gautus duomenis saugome su json().
    return response.json();
})
    .then(countries => {                                             // Iskonsoliname gautus duomenis.
        console.log(countries);
        countries.map(country => {                                   // Is visu gautu duomenu kreipiames i "name" ir paprasome jo reiksmiu.
            country.name;
            console.log(country.name);

            const allData = document.getElementById("main");
            const placeForInfo = document.createElement("div");
            const flagPic = document.createElement("img");        // Kadangi "flag" reiksme butu nuoroda, mum netinka, turim susikurti <img>.
            const nameOfCountry = document.createElement("h4");

            nameOfCountry.innerHTML=country.name;
            flagPic.setAttribute("src", country.flag,);
            placeForInfo.appendChild(flagPic);                             // AppendChild nurodomas elementas(vaikas), kuris bus dedamas i tevini elementa.
            main.appendChild(placeForInfo);
            allData.appendChild(placeForInfo);
            placeForInfo.appendChild(nameOfCountry);

            console.log("BANDOM VEL *********")
        });
    });
console.log(getData);


// Async/Await + For each method.

// async function fetchCountries() {
//
//     try {
//         const response = await fetch("https://restcountries.eu/rest/v2/all");    // Paprasom duomenu.
//         const data = await response.json();                                            // Gaunam ir issaugom kaip data.
//         console.log(data);
//
//         data.forEach(country => {
//             const placeForInfo = document.createElement("div");
//             const flagPic = document.createElement("img");
//             const nameOfCountry = document.createElement("h4");
//             flagPic.setAttribute("src", country.flag,);
//             //const allData = document.getElementById("main");       // Main cia nereikia apsibrezti, automatiskai paima.
//
//
//             nameOfCountry.innerHTML=country.name;
//             main.appendChild(placeForInfo);
//             placeForInfo.appendChild(flagPic);
//             placeForInfo.appendChild(nameOfCountry);
//         })
//
//     } catch(err) {
//         alert(err);
//     }
// }
//
// fetchCountries();
