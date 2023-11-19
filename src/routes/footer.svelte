<script>
  import {
    Footer,
    FooterCopyright,
    FooterLinkGroup,
    FooterBrand,
    FooterLink,
  } from "flowbite-svelte";
</script>

<footer class="shadow-md bg-slate-200 dark:bg-gray-900 px-5 py-5">
  <Footer
    footerType="logo"
    class="bg-transparent border-0 shadow-none dark:bg-transparent px-10"
  >
    <div class="sm:flex sm:items-center sm:justify-between">
      <FooterBrand
        href="/"
        src="svelte-icon.png"
        alt="OfficeStation Logo"
        name="OfficeStation"
        class="pb-5"
      />
      <FooterLinkGroup
        ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
      >
        <FooterLink href="/">Home</FooterLink>
        <FooterLink href="/about">About</FooterLink>
        <FooterLink href="/pricing">Pricing</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
      </FooterLinkGroup>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <FooterCopyright href="/" by="OfficeStation™" />
  </Footer>
</footer>
