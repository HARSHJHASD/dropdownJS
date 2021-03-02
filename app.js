function getOption() {
  selectElement =
  document.querySelector('#sel');
  output = selectElement.value;
        output1 = selectElement.innerText;
  document.querySelector('.output').textContent
      = output;
}
