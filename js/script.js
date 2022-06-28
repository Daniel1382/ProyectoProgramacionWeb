document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
    
}

//funciones//
document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

//la barrita de busqueda xd//
bar_search =        document.getElementById("ctn-bars-search");
cover_ctn_search=   document.getElementById("cover-ctn-search");
inputsearch=        document.getElementById("inputsearch");
box_search=         document.getElementById("box-search");

//mostrar//
function mostrar_buscador(){

    bar_search.style.top="80px";
    cover_ctn_search.style.display = "block";
    inputsearch.focus();

}


//ocultar//
function ocultar_buscador(){

    bar_search.style.top="-10px";
    cover_ctn_search.style.display = "none";
    inputsearch.value = "";

}

//busqueda
document.getElementById("inputsearch").addEventListener("keyup", buscador_interno);

function buscador_interno(){


    filter = inputsearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    //Recorriendo elementos a filtrar mediante los "li"
    for (i = 0; i < li.length; i++){

        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){

            li[i].style.display = "";
            box_search.style.display = "block";

            if (inputsearch.value === ""){
                box_search.style.display = "none";
            }

        }else{
            li[i].style.display = "none";
        }

    }



}
