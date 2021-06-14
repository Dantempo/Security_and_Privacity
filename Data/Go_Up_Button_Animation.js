window.onscroll = function()
{
    if (document.documentElement.scrollTop > 15)
    {
        document.querySelector(".button").classList.add("show");
    }

    else
    {
        document.querySelector(".button").classList.remove("show");
    }
}

document.querySelector(".button").addEventListener("click", ScrollUp);
function ScrollUp()
{
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0)
    {
        window.requestAnimationFrame(ScrollUp);
        window.scrollTo (0, currentScroll - (currentScroll/7));
    }
}