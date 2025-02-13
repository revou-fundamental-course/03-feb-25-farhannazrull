document.addEventListener("DOMContentLoaded", function() {
  const inputTemp = document.getElementById("inputTemp");
  const outputTemp = document.getElementById("outputTemp");
  const calculationOutput = document.getElementById("calculation");
  const form = document.getElementById("tempForm");
  const resetButton = document.getElementById("reset");
  const reverseButton = document.getElementById("reverse");
  const linkReverse = document.getElementById("link-reverse");
  let isCelsiusToFahrenheit = true;

  form.addEventListener("submit", function(e) {
      e.preventDefault();
      const value = parseFloat(inputTemp.value);
      if (isNaN(value)) {
          alert("Masukkan nilai suhu yang valid.");
          return;
      }
      let result, explanation;
      if (isCelsiusToFahrenheit) {
          result = (value * 9/5) + 32;
          explanation = `${value}°C × (9/5) + 32 = ${result.toFixed(2)}°F`;
      } else {
          result = (value - 32) * 5/9;
          explanation = `(${value}°F - 32) × (5/9) = ${result.toFixed(2)}°C`;
      }
      outputTemp.textContent = result.toFixed(2);
      calculationOutput.textContent = explanation;
  });

  resetButton.addEventListener("click", function() {
      inputTemp.value = "";
      outputTemp.textContent = "-";
      calculationOutput.textContent = "-";
  });

  // Fungsi buat update penjelasan konversi
  function updateExplanation() {
      if (isCelsiusToFahrenheit) {
          linkReverse.textContent = "Fahrenheit ke Celsius";
          document.getElementById("explanation").innerHTML = `
              <h3>Cara Konversi Dari Celsius (°C) ke Fahrenheit (°F)</h3>
              <ol>
                  <li><b>Kalikan</b> suhu dalam Celsius dengan <b>9/5</b>.</li>
                  <li><b>Tambahkan 32</b> ke hasil perkalian tadi.</li>
                  <li>Hasilnya adalah suhu dalam <b>Fahrenheit (°F)</b>.</li>
              </ol>
              <p><b>Rumus:</b> (°C × (9/5)) + 32 = °F</p>
          `;
      } else {
          linkReverse.textContent = "Celsius ke Fahrenheit";
          document.getElementById("explanation").innerHTML = `
              <h3>Cara Konversi Dari Fahrenheit (°F) ke Celsius (°C)</h3>
              <ol>
                  <li><b>Kurangi</b> suhu dalam Fahrenheit dengan <b>32</b>.</li>
                  <li><b>Kalikan hasilnya</b> dengan <b>5/9</b>.</li>
                  <li>Hasilnya adalah suhu dalam <b>Celsius (°C)</b>.</li>
              </ol>
              <p><b>Rumus:</b> (°F - 32) × (5/9) = °C</p>
          `;
      }
  }

  // Event Listener buat tombol Reverse
  reverseButton.addEventListener("click", function() {
      isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
      document.getElementById("inputLabel").textContent = isCelsiusToFahrenheit ? "Celsius (°C):" : "Fahrenheit (°F):";
      document.querySelector(".result h2").textContent = isCelsiusToFahrenheit ? "Fahrenheit (°F):" : "Celsius (°C):";
      inputTemp.value = "";
      outputTemp.textContent = "-";
      calculationOutput.textContent = "-";
      updateExplanation();
  });

  // Event Listener buat teks yang jadi tombol Reverse juga
  linkReverse.addEventListener('click', function(e) {
      e.preventDefault();
      isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
      document.getElementById("inputLabel").textContent = isCelsiusToFahrenheit ? "Celsius (°C):" : "Fahrenheit (°F):";
      document.querySelector(".result h2").textContent = isCelsiusToFahrenheit ? "Fahrenheit (°F):" : "Celsius (°C):";
      inputTemp.value = "";
      outputTemp.textContent = "-";
      calculationOutput.textContent = "-";
      updateExplanation();
  });

  // Panggil fungsi updateExplanation() pas halaman di-load pertama kali
  updateExplanation();
});
