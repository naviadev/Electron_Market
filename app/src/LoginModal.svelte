<script lang="ts">
  export let onClose: () => void;

  function close() {
    onClose();
  }
</script>

<style>
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 2rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9;
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
</style>

<div class="backdrop" on:click={close}></div>
<div class="modal">
  <h2>Login</h2>
  <p>This is the login modal.</p>
  <button on:click={close}>Close</button>
</div>