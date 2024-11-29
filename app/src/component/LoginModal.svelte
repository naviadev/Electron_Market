<script lang="ts">
  export let onClose: () => void;
  function close() {
    onClose();
  }

  // 상태 변수
  let email = "";
  let password = "";
  // 로그인 정보 제출
  function register() {
    console.log("Email:", email, "Password:", password);
    close(); // 제출 후 모달 닫기
  }
</script>

<!-- 배경 DIV ( Modal 이외의 영역을 누르면 닫힐 수 있게끔 작성) -->
<div class="backdrop" on:click={close} on:keydown={(e) => {}}></div>
<div class="modal">
  <h2>Login</h2>
  <input type="email" placeholder="email" bind:value={email} />
  <input type="password" placeholder="password" bind:value={password} />
  <button on:click={register}>Register</button>
  <button on:click={close}>Close</button>
</div>

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
