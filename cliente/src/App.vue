<template>
  <div id="appComponente">
    <nav>
      <h1>La Ruta</h1>
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

<style scoped></style>