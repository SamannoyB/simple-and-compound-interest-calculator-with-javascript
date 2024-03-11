
function simpleInterest(s, r, t)  {
          a = s*r*t/100;
          return a;
}

function compoundInterest(s, r, t)  {
          z = 1 + r/100;
          j = Math.pow(z, t);
          a = s * j;
          return a;
}

document.getElementById("button_s").addEventListener("click", e => {
          var sum_s = document.getElementById("sum_s").value;
          var rate_s = document.getElementById("rate_s").value;
          var year_s = document.getElementById("year_s").value;

          amt = simpleInterest(sum_s, rate_s, year_s);
          document.getElementById("result_s").innerText = `Simple Interest Amount is ${Math.round(amt)}`;
});

document.getElementById("button_c").addEventListener("click", e => {
          var sum_c = document.getElementById("sum_c").value;
          var rate_c = document.getElementById("rate_c").value;
          var year_c = document.getElementById("year_c").value;
          amt = compoundInterest(sum_c, rate_c, year_c);
          document.getElementById("result_c").innerText = `Compound Interest Amount is ${Math.round(amt)}`;
});

