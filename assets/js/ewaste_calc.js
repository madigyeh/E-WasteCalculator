 document.getElementById('reset').onclick = function(){
    document.getElementById('microwave').reset();
    document.getElementById('kapp').reset();
    document.getElementById('heatvent').reset();
    document.getElementById('pc').reset();
    document.getElementById('vacuum').reset();
    document.getElementById('TV').reset();
    document.getElementById('dishwasher').reset();
    document.getElementById('wash').reset();
    document.getElementById('dryer').reset();
    document.getElementById('refrigerator').reset();
    document.getElementById('aircon_heat').reset();
    document.getElementById('other_lhe').reset();
    document.getElementById('lithiumion').reset();
    document.getElementById('nickel').reset();
    document.getElementById('alkaline').reset();
    document.getElementById('mobile').reset();
    document.getElementById('laptop').reset();
    document.getElementById('printer').reset();
    document.getElementById('router').reset();
    document.getElementById('other_pe').reset();
 };

function tosubmit() {
  // Getting the value of your text input
  var microwave = document.getElementById("microwave").value;

  // Storing the value above into localStorage
  localStorage.setItem("microwave", microwave);
  console.log(microwave);

  return true;
}
