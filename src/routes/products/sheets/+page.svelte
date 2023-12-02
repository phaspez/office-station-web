<script>
  //@ts-nocheck
  import AnimOnVisible from "../../AnimOnVisible.svelte";
  import { Alert, Carousel } from "flowbite-svelte";
  import { _ } from "svelte-i18n";
  import { allDevicesImg, sheets1, sheets2, sheets3 } from "../../img";
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
      class="absolute invisible md:visible overflow-hidden -right-0 -top--5 opacity-90 z-1 mr-20"
    >
      <img src="https://website-prod.cache.wpscdn.com/img/format_xls.4075155.png" alt="" />
    </div>
  </div>
</div>

<div class="innercenter">
  <h1 class="headline tex">{$_("Sheets")}</h1>
  <p class="headline-details pt-0 lg:pr-96">
    {$_("sheet.headline")}
  </p>
</div>

<div>
  <Background color="green">
    <AnimOnVisible direction="right">
      <div class="innercenter">
        <h1>{$_("sheeet.subsection1")}</h1>
        <div class="grid grid-cols-1 justify-items-stretch md:grid-cols-2">
          <div class="subsection">
            <p class>
              {$_("sheeet.subsection1.details")}
            </p>
          </div>
          <div class="subsection">
            <Carousel images={sheets1} duration={5000} />
          </div>
        </div>
      </div>
    </AnimOnVisible>
  </Background>

  <Background color="yellow">
    <AnimOnVisible direction="left">
      <div class="innercenter">
        <h1>{$_("sheet.subsection2")}</h1>
        <div class="grid grid-cols-1 justify-items-stretch md:grid-cols-2">
          <div class="subsection">
            <p class>
              {$_("sheet.subsection2.details")}
            </p>
          </div>
          <div class="subsection">
            <Carousel images={sheets2} duration={5000} />
          </div>
        </div>
      </div>
    </AnimOnVisible>
  </Background>

  <Background color="red">
    <AnimOnVisible direction="right">
      <div class="innercenter">
        <h1>{$_("sheet.subsection3")}</h1>
        <div class="grid grid-cols-1 justify-items-stretch md:grid-cols-2">
          <div class="subsection">
            <p class>
              {$_("sheet.subsection3.details")}
            </p>
          </div>
          <div class="subsection">
            <Carousel images={sheets3} duration={5000} />
          </div>
        </div>
      </div>
    </AnimOnVisible>
  </Background>

</div>
<div class="py-10">
  <DownloadApp></DownloadApp>
</div>
