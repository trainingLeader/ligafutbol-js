const divContainerDoctor = document.querySelector('.detailDoctors');
const divContainerPlayer = document.querySelector('.detailPlayers');

document.addEventListener('DOMContentLoaded', (e) => {
    
});
document.querySelector('#addDoctor').addEventListener('click', (e) => {
    divContainerDoctor.insertAdjacentHTML('beforeend', crearMdHTML());
});
document.querySelector('#addPlayer').addEventListener('click', (e) => {
    divContainerPlayer.insertAdjacentHTML('beforeend', crearPlayerHTML());
});
//Eventos para manipular skills Cuerpo medico
divContainerDoctor.addEventListener("click", (e)=>{
    if(e.target.id == "removeDoctor"){
        eliminarItemLista(e.target.dataset.id);
    }
})
const eliminarItemLista = (Idx) =>{
    let skills = document.querySelector(`#GrpDoctors${Idx}`);
    skills.remove();
}
//-------------------------------------------

//Eventos para manipular jugadores
divContainerPlayer.addEventListener("click", (e)=>{
    if(e.target.id == "removePlayer"){
        eliminarPlayerItemLista(e.target.dataset.id);
    }
})
const eliminarPlayerItemLista = (Idx) =>{
    let player = document.querySelector(`#GrpPlayer${Idx}`);
    player.remove();
}
//Fin de eventos
const crearMdHTML = () => {
    let id = Date.now().toString(16);
    let skillHTML = /* html */ `
            <div class="row mt-3" id="GrpDoctors${id}">
                <div class="col-4">
                    <input type="text" class="form-control" placeholder="Nombre del personal" aria-label="First name" id="nameDoctor${id}" name="nameDoctor${id}">
                </div>
                <div class="col-6">
                    <select id="skillDoctor${id}" name="skillDoctor${id}" class="form-select">
                        <option selected>Seleccione Especialidad</option>
                        <option>...</option>
                    </select>                                          
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-danger" data-id="${id}" id="removeDoctor">-</button>
                </div>
        </div>
  `;
    return skillHTML;
}
const crearPlayerHTML = () => {
    let id = Date.now().toString(16);
    let skillHTML = /* html */ `
        <div class="row mt-3" id="GrpPlayer${id}">
            <div class="col-3">
                <input type="text" class="form-control" placeholder="Nombre del Jugador" aria-label="First name" id="namePlayer${id}" name="namePlayer${id}">
            </div>
            <div class="col-2">
                <input type="text" class="form-control" placeholder="Dorsal" aria-label="First name" id="dorsalPlayer${id}" name="dorsalPlayer${id}">
            </div>
            <div class="col-2">
                <input type="number" class="form-control" placeholder="Edad" aria-label="First name" id="agePlayer${id}" name="agePlayer${id}">
            </div>
            <div class="col-3">
                <select id="positionPlayer${id}" name="positionPlayer${id}" class="form-select">
                    <option selected>Seleccione la posicion de juego</option>
                    <option>...</option>
                </select>                                          
            </div>
            <div class="col-2">
                <button type="button" class="btn btn-danger" data-id="${id}" id="removePlayer">-</button>
            </div>
        </div>
  `;
    return skillHTML;
}