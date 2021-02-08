<script lang="ts">
  export let title : string;
  export let body: string;
  export let clickFunction;
</script>

<div
  class="card h-100 shadow"
  on:click={clickFunction}
>
  <div class="card-title">
    <h5 class="my-1">{title}</h5>
  </div>
  <div class="card-body">{body}</div>
</div>


<style>
   .card-title {
    background: #f3d7ca;
    border: 2px solid #f3d7ca;
    border-radius: 1px;
  }

  .card {
    background: #f8f8f8;
    cursor: pointer;
  }

  .card:hover {
    background: #f0f0f0;
  }

  .shadow {
    -moz-box-shadow: inset 0 0 10px #000000;
    -webkit-box-shadow: inset 0 0 10px #000000;
    box-shadow: inset 0 0 10px #000000;
  }
</style>