const inp = document.querySelector(".inp");
const btn = document.querySelector(".btn");

const request = async function () {
    const currencies = await fetch(
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json"
    );
    const data = await currencies.json();
    const convertGbpToIls = data.eur.ils / data.eur.gbp;
    return convertGbpToIls;
};
const getPrice = async function () {
    const data = await request();
    inp.addEventListener("keyup", function (e) {
        const val = e.target.value;
        console.log(val);

        const price = val * data * 0.75;
        console.log(data);
        document.querySelector(".newPrice").textContent = `${price.toFixed(
            2
        )} Shekels`;
        document.body.style.backgroundColor = "yellow";
        // inp.value = "";
        inp.placeholder = `תודה אוסי המיסניקית `;
        if (!val) {
            document.querySelector(".newPrice").textContent = "";
        }
    });
};

getPrice();

btn.addEventListener("click", function () {
    const price = inp.value * 4.32 * 0.8;
    document.querySelector(".newPrice").textContent = `${price} Shekels`;
    document.body.style.backgroundColor = "yellow";
    inp.value = " ";
    inp.placeholder = `תודה אוסי המיסניקית `;
});
