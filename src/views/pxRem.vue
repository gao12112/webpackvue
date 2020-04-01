<template>
  <div class="pxrem">
    <div class="test">
        <p class="hello">Hello</p>
    </div>
  </div>
</template>
<script>
import "../lib/rem.js"
export default {

}
</script>
<style  scope>
.test{
    width:20rem;
    height:10rem;
    background-color: bisque;
    text-align: center；
}
.hello{
    color:red;
    font-size:1rem;
}
</style>
