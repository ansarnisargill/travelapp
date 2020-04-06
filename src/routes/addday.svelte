<script>
  import { goto } from "@sapper/app";
  import { user } from "../stores";
  import { onMount } from "svelte";
  let showSuccess=false;
  async function gotoHmoepage() {
    await goto("/");
  }
  async function submitHandeler() {
    const fd = new FormData();
    fd.append("name", document.getElementById("name").value);
    fd.append("description", document.getElementById("description").value);
    fd.append("client", document.getElementById("client").value);
    let response = await fetch("/day", {
      method: "POST",
      body: fd
    });
    let json = await response.json();
    if (json.status) {
      showSuccess=true;
      clearValues();
    }
  }
  function clearValues(){
      document.getElementById("name").value="";
      document.getElementById("description").value="";
      document.getElementById("client").value="";

  }
</script>
{#if showSuccess}
<div class="alert alert-success alert-dismissible" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>Success!</strong> Day Has Been Saved Successfully
</div>
{/if}
<div class="row">

  <div class="panel">
    <header class="panel-heading well">
      Add new Day
      <span class="tools pull-right">
        <a class="collapse-box fa fa-chevron-down" href="javascript:;" />

      </span>
    </header>
    <div class="panel-body">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <form role="form" on:submit|preventDefault={submitHandeler}>
            <div class="form-group">
              <label for="name">Name</label>
              <input
                class="form-control"
                id="name"
                placeholder="Name"
                type="text" 
                required/>
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <input
                class="form-control"
                id="description"
                placeholder="Description"
                type="Text" required/>
            </div>
            <div class="form-group">
              <label for="client">Client Description</label>
              <input id="client" type="Text"  class="form-control" required />
              <!--<p class="help-block">Example block-level help text here.</p>-->
            </div>

            <input type="submit" class="btn btn-primary" value="Add"/>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
