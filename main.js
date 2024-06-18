let form = document.querySelector("form");
let input = document.querySelector("input");
let btn = document.querySelector("button");
let container = document.querySelector(".container");
const check = async (e) => {
  e.preventDefault();

  if (input.value === "") {
    window.alert("Please enter city!");
  } else {
    try {
      container.innerHTML = "";
      let response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=77de8e8c983f4871bb4124848241706&q=${input.value}&days=7&aqi=no&alerts=no`
      );
      let data = await response.json();
      let array = data.forecast.forecastday;
      array.forEach((element) => {
        let div = document.createElement("div");
        div.className = "cards";
        let h3 = document.createElement("h3");
        h3.className = "h3";
        h3.innerText = element.date;
        div.appendChild(h3);
        let IMG = document.createElement("img");
        IMG.setAttribute("src", element.day.condition.icon);
        div.appendChild(IMG);
        let h4 = document.createElement("h4");
        h4.className = "h4";
        h4.innerText = element.day.condition.text;
        div.appendChild(h4);
        let h5 = document.createElement("h5");
        h5.className = "h5";
        h5.innerText = element.day.avgtemp_c;
        div.appendChild(h5);
        let h6 = document.createElement("h6");
        h6.className = "h6";
        h6.innerText = data.location.name;
        div.appendChild(h6);
        container.appendChild(div);
        // setTimeout(() => {
        //   container.removeChild(div);
        // }, 10000);
      });

      form.reset();
    } catch (error) {
      window.alert("something went wrong!");
    }
  }
};
btn.addEventListener("click", check);
