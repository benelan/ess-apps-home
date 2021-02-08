<script lang="ts">
  import AppCard from "./AppCard.svelte";
  import AppModal from "./AppModal.svelte";
  import apps from "./appInfo";
</script>

<main>
  <h1>Esri Support Services Apps</h1>
  <div class="container-flex m-4">
    <div class="row">
      {#each apps as { title, body, url, modalTitle, popup }}
        <div class="col-md-4 my-4">
          {#if !!url}
            <AppCard
              {title}
              {body}
              clickFunction={() => window.location.assign(url)}
            />
          {:else if !!modalTitle && popup}
            <AppModal {title} {body} {modalTitle} {popup} />
          {/if}
        </div>
      {/each}
    </div>
  </div>
</main>

<style>
  main {
    background-color: #f5eee6;
    height: 100%;
    width: 100%;
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #c86b85;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    margin-bottom: 50px;
  }
</style>
