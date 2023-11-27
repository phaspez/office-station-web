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
        <h1>{$_("documentpage.subsection1")}</h1>
        <div class="grid grid-cols-1 justify-items-stretch md:grid-cols-2">
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
        <h1>{$_("documentpage.subsection2")}</h1>
        <div class="grid grid-cols-1 justify-items-stretch md:grid-cols-2">
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
        <h1>{$_("documentpage.subsection3")}</h1>
        <div class="grid grid-cols-1 justify-items-stretch md:grid-cols-2">
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
<div class="py-10">
  <DownloadApp></DownloadApp>
</div>
