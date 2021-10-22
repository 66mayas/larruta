<template>
  <div id="appComponente">
    <nav id="barraTitulo">
      <img id="imgCabecera" src="./assets/imgs/cabecera.jpg" alt="Cabecera">
      <h1 id="txtCabecera">La Ruta</h1>
    </nav>
    <nav id="barraNavegacionPpal">
      <button class="botonMenuPpal">Administración</button>
      <button class="botonMenuPpal">Restaurante</button>
      <button class="botonMenuPpal">Bar</button>
      <button class="botonMenuPpal">Billar</button>
      <button class="botonMenuPpal">Posada</button>
    </nav>
    <div>
      <listadoProductos/>
    </div>
  </div>
</template>

<script>
import listadoProductos from './components/listadoProductos.vue'

export default {
  name: 'AppPrincipal',
  components: {
    listadoProductos
  }
}
</script>

<style></style>