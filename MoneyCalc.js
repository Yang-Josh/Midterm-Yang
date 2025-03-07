function MoneyCalc (nickel,dime,quarter,loonie,toonie){ 

   //Calculate value
   let Vnickel = nickel*.05;
   let Vdime = dime*.10;
   let Vquarter = quarter*.25;
   let Vloonie = loonie;
   let Vtoonie = toonie*2;

 let Vtotal = Vnickel+Vdime+Vquarter+Vloonie+Vtoonie;
   return Vtotal;
}


export {MoneyCalc}