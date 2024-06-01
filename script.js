const submit_btn = document.querySelector(".container__button-submit");
const container = document.querySelector(".container");
const thankyou_container = document.querySelector(".thankyou__container");
const result = document.querySelector(".thankyou__container span");
const buttons = document.querySelectorAll(".container__button");

let val = 0;

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      val = button.value;
    })
  },

    submit_btn.addEventListener("click", () => {
      container.classList.add("disabled");
      thankyou_container.classList.remove("disabled");
      result.innerText = val
    })

  )
