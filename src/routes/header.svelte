<script>
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
  } from "flowbite-svelte";

  let themeState = false;
  function toggleTheme() {
    if (themeState) {
      document.documentElement.classList.add("dark");
      console.log("Dark theme");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("Light theme");
    }

    themeState = !themeState;
  }
</script>

<header>
  <script>
    import {
      Navbar,
      NavBrand,
      NavLi,
      NavUl,
      NavHamburger,
    } from "flowbite-svelte";
  </script>

  <Navbar let:hidden let:toggle class="bg-slate-200">
    <NavBrand href="/">
      <img src="favicon.png" class="mr-3 h-6 sm:h-9" alt="Office Logo" />
      <span
        class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
      >
        OfficeStation
      </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/services">Services</NavLi>
      <NavLi href="/pricing">Pricing</NavLi>
      <NavLi href="/contact">Contact</NavLi>
      <button
        id="theme-toggle"
        type="button"
        on:click={toggleTheme}
        class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none
    focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm"
      >
        <img src="favicon.png" alt="" class="h-6" />
      </button>
    </NavUl>
  </Navbar>
</header>
