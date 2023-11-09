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
<Button>Get started!</Button>
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
            <h2>Documents</h2>
            Create stunning paper with rich visuals.
          </Alert>
          <Alert color="none" class="box-info-green drop-shadow-md m-1">
            <h2>Sheets</h2>
            Turn your workbooks and spreadsheets data into insights, organize your
            data, predicting trends, and more.
          </Alert>
          <Alert color="none" class="box-info-orange drop-shadow-md m-1">
            <h2>Slides</h2>
            Make a captivating presentation with your imaginations.
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
            <h2>OfficeStation Cloud</h2>
            With our OfficeStation Cloud platform, you can access your files on any
            devices.
            <br />
            Signing up for OfficeStation Cloud, you will receive free 5 GB of cloud
            storages.
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
            <h2>Sheets</h2>
            Turn your workbooks and spreadsheets data into insights, organize your
            data, predicting trends, and more.
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
            <h2>OfficeStation Mobile</h2>
            You can view, edit, and share your files from your mobile devices.
            <br /><br />
            Available on Android and iOS.
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

<h1 class="text-4xl font-semibold">What's in Store?</h1>
<AnimOnVisible>
  <section>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div>
        <Alert color="none" class="box-info-blue drop-shadow-md m-1">
          <h2>Documents</h2>
          <ul class="list">
            <li>View/Edit documents</li>
            <li>Spell checker</li>
            <li>Split/Merge documents</li>
            <li>Convert .docs to .pdf</li>
            <li>Online templates</li>
          </ul>
        </Alert>
      </div>
      <div>
        <Alert color="none" class="box-info-green drop-shadow-md m-1">
          <h2>Sheets</h2>
          <ul class="list">
            <li>Format cells</li>
            <li>Excel formulas complatible</li>
            <li>Charts visualizers</li>
            <li>Convert .xlsx to .pdf</li>
            <li>Online templates</li>
          </ul>
        </Alert>
      </div>
      <div>
        <Alert color="none" class="box-info-orange drop-shadow-md m-1">
          <h2>Slides</h2>
          <ul class="list">
            <li>Presentation tools</li>
            <li>Screen recorder</li>
            <li>Co-editing, Presentation notes</li>
            <li>Convert slides to .pdf</li>
            <li>Online templates</li>
          </ul>
        </Alert>
      </div>
    </div>
  </section>
</AnimOnVisible>

<div>
  <h1 class="text-4xl font-semibold py-3">Ready to Get work done?</h1>
  <Button>Get started!</Button>
  <div class="py-7" />
</div>

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
</style>
