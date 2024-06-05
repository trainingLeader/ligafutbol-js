import '../../../Models/equipoModel.js';
export class TeamComponent extends HTMLElement {
    constructor() {
        super();
        this.render();
    }
    render(){
        
        this.innerHTML = /* html */ `
        <style rel="stylesheet">
          @import "./src/components/team/teamStyle.css";
        </style>
        <div class="row g-3">
            <div class="col-md-6">
                <label for="nameTeam" class="form-label">Nombre equipo</label>
                <input type="email" class="form-control" name="nameTeam" id="nameTeam">
            </div>
            <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Logo</label>
                <input class="form-control" type="file" name="logoTeam" id="logoTeam">
            </div>
            <div class="col-12">
                <label for="inputAddress" class="form-label">Director Tecnico</label>
                <input type="text" class="form-control" name="coachTeam" id="coachTeam">
            </div>
            <div class="col-md-6">
                <label for="inputState" class="form-label">Ciudad Origen</label>
                <select id="cityName" name="cityName" class="form-select">
                <option selected>Seleccione una ciudad</option>
                <option>...</option>
                </select>
            </div>
            <div class="col-md-6">
                <label for="inputState" class="form-label">Fecha fundacion</label>
                <input type="date" class="form-control" name="dateTeam" id="dateTeam">
            </div>
        </div>
        `
    }
}
customElements.define("team-component",TeamComponent);