 document.getElementById('reset').onclick = function(){
    document.getElementById('microwave').value = 0;
    document.getElementById('microwave1').value = 0;
    document.getElementById('kapp').value = 0;
    document.getElementById('kapp1').value = 0;
    document.getElementById('heatvent').value = 0;
    document.getElementById('heatvent1').value = 0;
    document.getElementById('pc').value = 0;    
    document.getElementById('pc1').value = 0;    
    document.getElementById('vacuum').value = 0;
    document.getElementById('vacuum1').value = 0;
    document.getElementById('TV').value = 0;
    document.getElementById('TV1').value = 0;
    document.getElementById('dishwasher').value = 0;
    document.getElementById('dishwasher1').value = 0;
    document.getElementById('wash').value = 0;
    document.getElementById('wash1').value = 0;
    document.getElementById('dryer').value = 0;
    document.getElementById('dryer1').value = 0;
    document.getElementById('refrigerator').value = 0;
    document.getElementById('refrigerator1').value = 0;
    document.getElementById('aircon_heat').value = 0;
    document.getElementById('aircon_heat1').value = 0;
    document.getElementById('other_lhe').value = 0;
    document.getElementById('other_lhe1').value = 0;
    document.getElementById('lithiumion').value = 0;
    document.getElementById('lithiumion1').value = 0;
    document.getElementById('nickel').value = 0;
    document.getElementById('nickel1').value = 0;
    document.getElementById('alkaline').value = 0;
    document.getElementById('alkaline1').value = 0;
    document.getElementById('mobile').value = 0;
    document.getElementById('mobile1').value = 0;
    document.getElementById('laptop').value = 0;
    document.getElementById('laptop1').value = 0;
    document.getElementById('printer').value = 0;
    document.getElementById('printer1').value = 0;
    document.getElementById('router').value = 0;
    document.getElementById('router1').value = 0;
    document.getElementById('other_pe').value = 0;
    document.getElementById('other_pe1').value = 0;
 }

 document.getElementById('submit').onclick = function(){
   var microwave = document.getElementById("microwave").value;
   localStorage.setItem("microwave", microwave);
   console.log(microwave);
 }
