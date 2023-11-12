<script>
  // @ts-nocheck

  import { Button, Alert, Carousel, Indicator } from "flowbite-svelte";
  import { images, cloudimg, allDevicesImg, complatibleImg } from "./img";
  import AnimOnVisible from "./AnimOnVisible.svelte";
  import { _, register, init, getLocaleFromNavigator } from "svelte-i18n";
</script>

<section>
  <img
    src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/products_apps_services_hero_3840x1200:VP5-1920x720?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=75"
    alt=""
  />
</section>

<p class="headline">{$_("homepage.headline")}</p>
<p class="headline-details pt-0 lg:pr-96">
  {$_("homepage.headline.details")}
</p>
<Button>{$_("getstarted")}</Button>
<div class="py-7" />

<h1 class="text-4xl font-semibold">{$_("homepage.section1")}</h1>

<section>
  <AnimOnVisible direction="left">
    <section>
      <h1>{$_("homepage.section1.sub")}</h1>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="subsection overflow-visible min-h-full">
          <div class="max-w-4xl min-h-full h-max align-middle p-0 m-0">
            <Carousel {images} duration={5000} let:Controls let:Indicators>
              <Controls />
              <Indicators />
            </Carousel>
          </div>
        </div>
        <div class="subsection">
          <p>{$_("homepage.section1.sub.details")}</p>
          <Alert color="none" class="box-info-blue drop-shadow-md m-1">
            <h2>{$_("Documents")}</h2>
            {$_("documents.about")}
          </Alert>
          <Alert color="none" class="box-info-green drop-shadow-md m-1">
            <h2>{$_("Sheets")}</h2>
            {$_("sheets.about")}
          </Alert>
          <Alert color="none" class="box-info-orange drop-shadow-md m-1">
            <h2>{$_("Slides")}</h2>
            {$_("slides.about")}
          </Alert>
        </div>
      </div>
    </section>
  </AnimOnVisible>
  <AnimOnVisible direction="right">
    <section>
      <h1>{$_("homepage.section1.sub2")}</h1>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="subsection">
          <p>{$_("homepage.section1.sub2.details")}</p>
          <Alert color="none" class="box-info-blue drop-shadow-md m-1">
            <h2>{$_("OfficeStation.Cloud")}</h2>
            {$_("OfficeStation.Cloud.about")}
          </Alert>
        </div>
        <div class="subsection">
          <Carousel
            images={cloudimg}
            duration={5000}
            let:Controls
            let:Indicators
          >
            <Controls />
            <Indicators />
          </Carousel>
        </div>
      </div>
    </section>
  </AnimOnVisible>
  <AnimOnVisible direction="left">
    <section>
      <h1>{$_("homepage.section1.sub3")}</h1>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="subsection">
          <Carousel
            images={complatibleImg}
            duration={5000}
            let:Controls
            let:Indicators
          >
            <Controls />
            <Indicators />
          </Carousel>
        </div>
        <div class="subsection">
          <p>{$_("homepage.section1.sub3.details")}</p>
          <Alert color="none" class="box-info-green drop-shadow-md m-1">
            <h2>{$_("Sheets")}</h2>
            {$_("sheets.about")}
          </Alert>
        </div>
      </div>
    </section>
  </AnimOnVisible>
  <AnimOnVisible direction="right">
    <section>
      <h1>{$_("homepage.section1.sub4")}</h1>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="subsection">
          <p>
            {$_("homepage.section1.sub4.details")}
          </p>
          <Alert color="none" class="box-info-orange drop-shadow-md m-1">
            <h2>{$_("OfficeStation.Mobile")}</h2>
            {$_("officestation.mobile.info")}
          </Alert>
        </div>
        <div class="subsection">
          <Carousel
            images={allDevicesImg}
            duration={5000}
            let:Controls
            let:Indicators
          >
            <Controls />
            <Indicators />
          </Carousel>
        </div>
      </div>
    </section>
  </AnimOnVisible>
</section>

<h1 class="text-4xl font-semibold">{$_("homepage.section2")}</h1>
<AnimOnVisible>
  <section>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div>
        <Alert color="none" class="box-info-blue drop-shadow-md m-1">
          <h2>{$_("Documents")}</h2>
          <ul class="list">
            {@html $_("Documents.details")}
          </ul>
        </Alert>
      </div>
      <div>
        <Alert color="none" class="box-info-green drop-shadow-md m-1">
          <h2>{$_("Sheets")}</h2>
          <div class="i18n" data-i18n="[html]content.body">
            <ul class="list">
              {@html $_("Sheets.details")}
            </ul>
          </div>
        </Alert>
      </div>
      <div>
        <Alert color="none" class="box-info-orange drop-shadow-md m-1">
          <h2>{$_("Slides")}</h2>
          <ul class="list">
            {@html $_("Slides.details")}
          </ul>
        </Alert>
      </div>
    </div>
  </section>
</AnimOnVisible>

<div>
  <h1 class="text-4xl font-semibold py-3">{$_("homepage.section3")}</h1>
  <Button>{$_("getstarted")}</Button>
  <div class="py-7" />
</div>

<!--
<style lang="postcss">
  .subsection {
    @apply my-5 py-5 px-1 min-h-full;
  }

  section {
    @apply py-7;
  }

  section p {
    @apply py-3;
  }
</style> -->
