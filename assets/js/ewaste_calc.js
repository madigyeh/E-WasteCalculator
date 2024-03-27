submit.addEventListener("click", function() {
  
})

document.getElementById('submit').onclick = function(){
  var microwave = document.getElementById('microwave').value;
  console.log(microwave);
};

document.getElementById('reset').onclick = function(){
   document.getElementById('microwave').value = 0;
   document.getElementById('kapp').value = 0;
   document.getElementById('heatvent').value = 0;
   document.getElementById('pc').value = 0;
   document.getElementById('vacuum').value = 0;
   document.getElementById('TV').value = 0;
   document.getElementById('dishwasher').value = 0;
   document.getElementById('wash').value = 0;
   document.getElementById('dryer').value = 0;
   document.getElementById('refrigerator').value = 0;
   document.getElementById('aircon_heat').value = 0;
   document.getElementById('other_lhe').value = 0;
   document.getElementById('lithiumion').value = 0;
   document.getElementById('nickel').value = 0;
   document.getElementById('alkaline').value = 0;
   document.getElementById('mobile').value = 0;
   document.getElementById('laptop').value = 0;
   document.getElementById('printer').value = 0;
   document.getElementById('router').value = 0;
   document.getElementById('other_pe').value = 0;
};
