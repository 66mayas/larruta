<template>
  <div id="appComponente" name="divPpal">
    <h1 id="barraTitulo">La Ruta</h1>
    <nav class="barraNavegacionPpal" name="barraNavegacionPpal">
      <button class="botonMenuPpal" name="btnMenuPpal" v-on:click="cargarComponente(0)">Inicio</button>
      <button class="botonMenuPpal" name="btnMenuPpal" v-on:click="cargarComponente(5)">Administración</button>
      <button class="botonMenuPpal" name="btnMenuPpal" v-on:click="cargarComponente(1)">Restaurante</button>
      <button class="botonMenuPpal" name="btnMenuPpal" v-on:click="cargarComponente(2)">Bar</button>
      <button class="botonMenuPpal" name="btnMenuPpal" v-on:click="cargarComponente(3)">Billar</button>
      <button class="botonMenuPpal" name="btnMenuPpal" v-on:click="cargarComponente(4)">Posada</button>
    </nav>
    <div v-if="this.numComponente==0">
      <cmpInicio></cmpInicio>
    </div>
    <div v-else-if="this.numComponente==1">
      <cmpRest></cmpRest>
    </div>
    <div v-else-if="this.numComponente==2">
      <cmpBar></cmpBar>
    </div>
    <div v-else-if="this.numComponente==3">
      <cmpBill></cmpBill>
    </div>
    <div v-else-if="this.numComponente==4">
      <cmpPosa></cmpPosa>
    </div>
    <div v-else-if="this.numComponente==5">
      <cmpAdmin></cmpAdmin>
    </div>
    <div v-else>
      <cmpError></cmpError>
    </div>
  </div>
</template>

<script>
  import cmpInicio from "./components/cpte_inicio.vue"
  import cmpAdmin from "./components/cpte0_administracion.vue"
  import cmpRest from "./components/cpte1_restaurante.vue"
  import cmpBar from "./components/cpte2_bar.vue"
  import cmpBill from "./components/cpte3_billar.vue"
  import cmpPosa from "./components/cpte4_posada.vue"
  import cmpError from "./components/cpte_error.vue"
  export default {
    name: "appPrincipal",
    components: {
      cmpInicio,
      cmpAdmin,
      cmpRest,
      cmpBar,
      cmpBill,
      cmpPosa,
      cmpError
    },
    data(){
      return{
        numComponente: 0
      };
    },
    methods: {
      cargarComponente(componente){
        this.numComponente = componente;
        console.log(componente);
      }
    }
  }
</script>