document.getElementById("calcBtn").addEventListener("click",(function(){let e=(t=document.getElementById("principal").value,n=document.getElementById("years").value,(l=document.getElementById("rate").value)&&(monthlyRate=l/100/12),t*monthlyRate/(1-Math.pow(1/(1+monthlyRate),12*n)));var t,n,l;document.getElementById("monthlyPayment").innerHTML=e.toFixed(2)}));