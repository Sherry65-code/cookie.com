window.addEventListener('load',()=>{
    document.getElementById('loader').style.visibility = "hidden";

});
function open_recipe(name)
{
    loadonly();
    if (name == "ch-bh")
    {
        document.getElementById('main').innerHTML = ` <iframe src="./web/ch-bh.html" frameborder="0"></iframe>`;
    }
    else if (name == "go-ga")
    {
        document.getElementById('main').innerHTML = ` <iframe src="./web/go-ga.html" frameborder="0"></iframe>`;
    }
    else if (name == "pa-bh")
    {
        document.getElementById('main').innerHTML = ` <iframe src="./web/go-ga.html" frameborder="0"></iframe>`;
    }
}
function loadonly()
{
    document.getElementById('loader').style.visibility = "visible";
    setTimeout(dontload, 2000);
}
function dontload()
{
    document.getElementById('loader').style.visibility = "hidden";
}
