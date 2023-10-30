<script>
  // @ts-nocheck

  import { Button, Alert, Carousel, Indicator } from "flowbite-svelte";
  import { images, cloudimg, allDevicesImg, complatibleImg } from "./img";
</script>

<section>
  <img
    src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/products_apps_services_hero_3840x1200:VP5-1920x720?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=75"
    alt=""
  />
</section>

<p class="headline">Elevate Your Productivity with OfficeStation.</p>
<p class="headline-details">
  Improve productivity with lightweight office apps. Documents, Sheets and
  Slides.
</p>
<Button>Get started!</Button>
<div class="py-7" />

<h1 class="text-4xl font-semibold">Why choose OfficeStation?</h1>
<section>
  <section>
    <h1>Lightweight Office apps</h1>
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
        <p>
          OfficeStation is a lightweight all-in-one office suite that can help
          you handle daily office tasks with ease.
        </p>
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

  <section>
    <h1>Online Access to your files</h1>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="subsection">
        <p>
          All your files can be synced with ease for collaborators to review and
          modify, using your favorite cloud platforms such as Google Drive,
          Dropbox, iCloud, or our intergrated cloud solution, OfficeStation
          Cloud.
        </p>
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
        <Carousel images={cloudimg} duration={5000} let:Controls let:Indicators>
          <Controls />
          <Indicators />
        </Carousel>
      </div>
    </div>
  </section>

  <section>
    <h1>Microsoft Office Complatible</h1>
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
        <p>
          When working with many collaboarators, your files will still feel the
          same. OfficeStation makes it convinent for you and your collaborators
          to import and export files from many major formats.
        </p>
        <Alert color="none" class="box-info-green drop-shadow-md m-1">
          <h2>Sheets</h2>
          Turn your workbooks and spreadsheets data into insights, organize your
          data, predicting trends, and more.
        </Alert>
      </div>
    </div>
  </section>

  <section>
    <h1>Take your Office with you</h1>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="subsection">
        <p>
          Wherever you are, you can get you work done with our mobile app
          companion. Available for free on major platforms.
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
</section>

<h1 class="text-4xl font-semibold">What's in Store?</h1>
<section>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <div>
      <Alert color="none" class="box-info-blue drop-shadow-md m-1">
        <h2>Documents</h2>
        <ul class="list-disc pl-5">
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
        <ul class="list-disc pl-5">
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
        <ul class="list-disc pl-5">
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

<h1 class="text-4xl font-semibold py-3">Ready to Get work done?</h1>
<Button>Get started!</Button>
<div class="py-7" />

<style lang="postcss">
  .subsection {
    @apply my-5 py-5 px-1 min-h-full;
  }

  section {
    @apply py-5;
  }

  section p {
    @apply py-3;
  }
</style>
