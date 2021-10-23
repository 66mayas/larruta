<template>
  <div id="appComponente" name="divPpal">
    <nav id="barraTitulo">
      <img id="imgCabecera" src="./assets/imgs/cabecera.jpg" alt="Cabecera">
      <h1 id="txtCabecera">La Ruta</h1>
    </nav>
    <nav id="barraNavegacionPpal" name="barraNavegacionPpal">
      <button class="botonMenuPpal" name="btnMenuPpal" v-on:click="cargarComponente(0)">Administración</button>
      <button class="botonMenuPpal" name="btnMenuPpal" v-on:click="cargarComponente(1)">Restaurante</button>
      <button class="botonMenuPpal" name="btnMenuPpal" v-on:click="cargarComponente(2)">Bar</button>
      <button class="botonMenuPpal" name="btnMenuPpal" v-on:click="cargarComponente(3)">Billar</button>
      <button class="botonMenuPpal" name="btnMenuPpal" v-on:click="cargarComponente(4)">Posada</button>
    </nav>
    <div>
      <componenteActivo/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppPrincipal',
  data(){
    return {
      strComponente: "./components/cpte_inicio"
    }
  },
  components: {
    componenteActivo
  },
  methods: {
    cargarComponente(numComponente) {
      switch(numComponente){
        case 0:
          strComponente = "./components/cpte0_administracion";
          break;
        case 1:
          strComponente = "./components/cpte1_restaurante";
          break;
        case 2:
          strComponente = "./components/cpte2_bar";
          break;
        case 3:
          strComponente = "./components/cpte3_billar";
          break;
        case 4:
          strComponente = "./components/cpte4_posada";
          break;
        default:
          strComponente = "./components/cpte_inicio";
      };
    }
  }
}
  import componenteActivo from strComponente;
</script>

<style></style>