<script>
  //@ts-nocheck
  import AnimOnVisible from "../../AnimOnVisible.svelte";
  import { Alert, Carousel, Button } from "flowbite-svelte";
  import { _ } from "svelte-i18n";
  import { allDevicesImg, slides1, slides2, slides3 } from "../../img";
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
        src="https://website-prod.cache.wpscdn.com/img/format_ppt.7fd5ac6.png"
        alt=""
      />
    </div>
  </div>
</div>

<div class="innercenter z-30">
  <h1 class="headline">{$_("Slides")}</h1>
  <p class="headline-details pt-0 lg:pr-96">
    {$_("slide.headline")}
  </p>
</div>

<div>
  <Background color="yellow">
    <AnimOnVisible direction="right">
      <div class="innercenter">
        <h1>{$_("slide.subsection1")}</h1>
        <div class="grid grid-cols-1 justify-items-stretch md:grid-cols-2">
          <div class="subsection">
            <p class>
              {$_("slide.subsection1.details")}
            </p>
          </div>
          <div class="subsection">
            <Carousel images={slides1} duration={5000} />
          </div>
        </div>
      </div>
    </AnimOnVisible>
  </Background>

  <Background color="red">
    <AnimOnVisible direction="left">
      <div class="innercenter">
        <h1>{$_("slide.subsection2")}</h1>
        <div class="grid grid-cols-1 justify-items-stretch md:grid-cols-2">
          <div class="subsection">
            <p class>
              {$_("slide.subsection2.details")}
            </p>
          </div>
          <div class="subsection">
            <Carousel images={slides2} duration={5000} />
          </div>
        </div>
      </div>
    </AnimOnVisible>
  </Background>

  <Background color="sublime">
    <AnimOnVisible direction="right">
      <div class="innercenter">
        <h1>{$_("slide.subsection3")}</h1>
        <div class="grid grid-cols-1 justify-items-stretch md:grid-cols-2">
          <div class="subsection">
            <p class>
              {$_("slide.subsection3.details")}
            </p>
          </div>
          <div class="subsection">
            <Carousel images={slides3} duration={5000} />
          </div>
        </div>
      </div>
    </AnimOnVisible>
  </Background>
</div>
<div class="py-10">
  <DownloadApp></DownloadApp>
</div>
