<script>
  //@ts-nocheck
  import AnimOnVisible from "../../AnimOnVisible.svelte";
  import { Alert, Carousel } from "flowbite-svelte";
  import { _ } from "svelte-i18n";
  import { allDevicesImg } from "../../img";
  import { images } from "../../img";
  import Background from "../../Background.svelte";
  import DownloadApp from "../../DownloadApp.svelte";

  let imgaddr = {
    alt: "img",
    src: "https://website-prod.cache.wpscdn.com/img/introduce3.1709dd1.png",
    title: "image",
  };

  let first = [images[0]];
</script>

<div class="">
  <div class="overflow-hidden">
    <div
      class="absolute invisible md:visible overflow-hidden mix-blend-multiply dark:mix-blend-hard-light right-12 top-14 lg:opacity-90 md:opacity-20 z-1"
    >
      <img
        class="w-80"
        src="https://website-prod.cache.wpscdn.com/img/format_doc.46c8679.png"
        alt=""
      />
    </div>
  </div>
</div>

<div class="innercenter">
  <h1 class="headline">{$_("Documents")}</h1>
  <p class="headline-details pt-0 lg:pr-96">
    {$_("documentpage.headline")}
  </p>
</div>

<div>
  <Background color="blue">
    <AnimOnVisible direction="left">
      <div class="innercenter">
        <h1 class="font-medium">{$_("documentpage.subsection1")}</h1>
        <div
          class="grid grid-cols-1 justify-items-stretch items-center md:grid-cols-2"
        >
          <div class="subsection">
            <p class>
              {$_("documentpage.subsection1.details")}
            </p>
          </div>
          <div class="subsection">
            <Carousel images={allDevicesImg} duration={5000} />
          </div>
        </div>
      </div>
    </AnimOnVisible>
  </Background>

  <Background color="lavender">
    <AnimOnVisible direction="right">
      <div class="innercenter">
        <h1 class="font-medium">{$_("documentpage.subsection2")}</h1>
        <div
          class="grid grid-cols-1 items-center justify-items-stretch md:grid-cols-2"
        >
          <div class="subsection">
            <p class>
              {$_("documentpage.subsection2.details")}
            </p>
          </div>
          <div class="subsection">
            <Carousel images={first} duration={5000} />
          </div>
        </div>
      </div>
    </AnimOnVisible>
  </Background>

  <Background color="sublime">
    <AnimOnVisible direction="left">
      <div class="innercenter">
        <h1 class="font-medium">{$_("documentpage.subsection3")}</h1>
        <div
          class="grid grid-cols-1 justify-items-stretch items-center md:grid-cols-2"
        >
          <div class="subsection">
            <p class>
              {$_("documentpage.subsection3.details")}
            </p>
          </div>
          <div class="subsection">
            <Carousel images={[imgaddr]} duration={5000} />
          </div>
        </div>
      </div>
    </AnimOnVisible>
  </Background>
</div>

<div class="py-10 innercenter">
  <DownloadApp></DownloadApp>
</div>
