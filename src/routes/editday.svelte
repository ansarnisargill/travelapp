<script>
  import { goto } from "@sapper/app";
  import { user } from "../stores";
  import { onMount } from "svelte";
  let showSuccess = false;
  let id;
  let day;
  let loading = true;
  onMount(
    user.subscribe(async value => {
      id = value;
      let response = await fetch("/day/" + id);
      let json = await response.json();
      day = json;
      loading=false;
    })
  );
  async function gotoHmoepage() {
    await goto("/");
  }
  async function submitHandeler() {
    const fd = new FormData();
    fd.append("name", document.getElementById("name").value);
    fd.append("description", document.getElementById("description").value);
    fd.append("client", document.getElementById("client").value);
    fd.append("_id", id);
    let response = await fetch("/day", {
      method: "PUT",
      body: fd
    });
    let json = await response.json();
    if (json.status) {
      showSuccess = true;
    }
  }
</script>

{#if showSuccess}
  <div class="alert alert-success alert-dismissible" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <strong>Success!</strong>
    Day Has Been Updated Successfully
  </div>
{/if}
<div class="row">

  <div class="panel">
    <header class="panel-heading well">
      Edit Day
      <span class="tools pull-right">
        <a class="collapse-box fa fa-chevron-down" href="javascript:;" />

      </span>
    </header>
    <div class="panel-body">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          {#if loading}
            <h2>Loading ...</h2>
          {/if}
          {#if !loading}
            <form role="form" on:submit|preventDefault={submitHandeler}>
              <div class="form-group">

                <label for="name">Name</label>
                <input
                  class="form-control"
                  id="name"
                  placeholder="Name"
                  type="text"
                  value={day.name}
                  required />
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <input
                  class="form-control"
                  id="description"
                  placeholder="Description"
                  type="Text"
                  value={day.description}
                  required />
              </div>
              <div class="form-group">
                <label for="client">Client Description</label>
                <input
                  id="client"
                  type="Text"
                  class="form-control"
                  value={day.clientDescription}
                  required />
                <!--<p class="help-block">Example block-level help text here.</p>-->
              </div>

              <input type="submit" class="btn btn-primary" value="Update" />
            </form>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
