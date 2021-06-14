let open = document.getElementById ("click");
let menu = document.getElementById ("menu");
let closed = true;
open.addEventListener ("click", oppening);
function oppening()
{
   if (closed)
   {
       menu.style.left = "0%";
       closed = false;
   }
   else
   {
       menu.style.left = "-100%";
       closed = true;
   }
}