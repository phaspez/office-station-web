<script>
    import { writable } from 'svelte/store';
    
    let email = writable('');
    let password = writable('');
    let isLoading = writable(false);
    
    function onLogin() {
      isLoading.set(true);
      // gửi yêu cầu đăng nhập đến server
      // ...
      isLoading.set(false);
    }
    </script>
    
    <main>
      <h1>Đăng nhập</h1>
    
      <form on:submit|preventDefault={onLogin}>
        <input type="email" placeholder="Email" bind:value={email} />
        <input type="password" placeholder="Mật khẩu" bind:value={password} />
        <button type="submit">Đăng nhập</button>
      </form>
    
      {#if isLoading}
        <p>Đang đăng nhập...</p>
      {/if}
    </main>
    