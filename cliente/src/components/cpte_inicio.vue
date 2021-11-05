<template>
  <div class="secPpal">
    <figure class="item1">
      <img src="../assets/imgs/icono_LaRuta.png" alt="La Ruta">
    </figure>
    <figure class="item2">
      <img src="../assets/imgs/foto rio mina 1.jpeg" alt="Río Mina">
    </figure>
  </div>
</template>

<style scoped>

  .secPpal {
    display: flex;
  }

  .item1 {flex: 35%; padding-top: 100px}
  .item1 > img {
    width: 80%;
    height: auto;
    padding-left: 3em
  }

  .item2 {flex: 65%; align-items: right}
  .item2 > img {
    width: 80%;
    height: auto;
    border-radius: 50%;
  }

</style>