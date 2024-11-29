<script lang="ts">
  import { onMount } from "svelte";
  import LoginModal from "./component/LoginModal.svelte";
  import Card from "./component/Card.svelte";

  let isLoginModalOpen = false;
  const toggleLoginModal = () => {
    isLoginModalOpen = !isLoginModalOpen;
  };
</script>

<!-- Header -->
<header>
  <div class="logo">Logo</div>
  <div
    class="profile"
    on:click={toggleLoginModal}
    on:keydown={(e) => e.key === "Enter" && toggleLoginModal()}
  >
    👤
  </div>
</header>

<!-- Main -->
<main>
  {#each Array(9) as _, i}
    <Card title={`Card ${i + 1}`} />
  {/each}
</main>

<!-- Footer -->
<footer>
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</footer>

<!-- Login Modal -->
{#if isLoginModalOpen}
  <LoginModal onClose={toggleLoginModal} />
{/if}

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: #f5f5f5;
    border-bottom: 1px solid #ddd;
  }

  header .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }

  header .profile {
    cursor: pointer;
    font-size: 1.2rem;
  }

  main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 1rem;
  }

  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #f5f5f5;
    border-top: 1px solid #ddd;
    display: flex;
    justify-content: space-around;
    padding: 0.5rem;
  }

  footer button {
    flex: 1;
    text-align: center;
    padding: 0.5rem 0;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 1rem;
  }
</style>
