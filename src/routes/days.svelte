<script>
  import { goto } from "@sapper/app";
  import { user } from "../stores";
  import { onMount } from "svelte";
  let showSuccessDelete = false;
  let loading = true;
  let days = [];
  onMount(async () => {
    await getDays();
  });
  async function gotoHmoepage() {
    await goto("/");
  }
  async function getDays() {
    let response = await fetch("/day");
    let json = await response.json();
    days = json;
    loading = false;
  }
  async function deleteDay(id) {
    let response = await fetch("/day/" + id, {
      method: "DELETE"
    });
    let json = await response.json();
    if (json.status) {
      loading = false;
      showSuccessDelete = true;
      await getDays();
    }
  }
  async function editDay(id) {
    user.set(id);
    goto("/editday");
  }
  function clearValues() {
    document.getElementById("name").value = "";
    document.getElementById("description").value = "";
    document.getElementById("client").value = "";
  }
</script>

{#if showSuccessDelete}
  <div class="alert alert-success alert-dismissible" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <strong>Success!</strong>
    Day Has Been Deleted Successfully
  </div>
{/if}
<div class="row">

  <div class="panel">
    <header class="panel-heading well">
      List Of Days
      <span class="tools pull-right">
        <a class="collapse-box fa fa-chevron-down" href="javascript:;" />

      </span>
    </header>
    <div class="panel-body container">
      <div class="row">

        {#if loading}
          <h2>Loading . . .</h2>
        {/if}
        {#if !loading && days.length != 0}
          <table class="table">
            <thead>
              <tr>

                <th>Name</th>
                <th>Description</th>
                <th>Client Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {#each days as day}
                <tr>

                  <td>{day.name}</td>
                  <td>{day.description}</td>
                  <td>{day.clientDescription}</td>
                  <td>
                    <div class="btn-group" role="group" aria-label="...">
                      <button
                        type="button"
                        class="btn btn-default"
                        on:click|preventDefault={() => {
                          editDay(day._id);
                        }}>
                        Edit
                      </button>
                      <button
                        type="button"
                        on:click|preventDefault={() => {
                          deleteDay(day._id);
                        }}
                        class="btn btn-danger">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              {/each}

            </tbody>
          </table>
        {/if}
      </div>
    </div>
  </div>
</div>
