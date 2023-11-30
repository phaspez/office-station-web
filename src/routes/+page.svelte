<!-- 
  Đây là file chứa các định dạng HTML và CSS định dạng trang chủ của website. 

  Các thư viện sử dụng:
  + Sử dụng thẻ Background, DownloadApp và AnimOnVisible custom của nhóm
  + Với các thẻ trong thư viện Flowbite.
-->

<script>
  // @ts-nocheck
  // khai báo các thư viện cần thiết
  import { Button, Alert, Carousel } from "flowbite-svelte";
  import { images, cloudimg, allDevicesImg, complatibleImg } from "./img";
  import AnimOnVisible from "./AnimOnVisible.svelte";
  import { _ } from "svelte-i18n";
  import Background from "./Background.svelte";
  import DownloadApp from "./DownloadApp.svelte";
</script>

<div class="">
  <div class="overflow-hidden">
    <div
      class="absolute invisible md:visible overflow-hidden -right-0 -top-5 opacity-30 z-1"
    >
      <img src="svelte-icon.png" alt="" />
    </div>
  </div>
</div>

<!-- Tiêu đề website -->
<div class="lg:px-20 px-2 md:px-10 sm:px-5">
  <p class="headline">{$_("homepage.headline")}</p>
  <p class="headline-details pt-0 lg:pr-96">
    {$_("homepage.headline.details")}
  </p>

  <Button>{$_("getstarted")}</Button>
</div>

<div>
  <!-- Tiêu đề của mục 1 -->
  <h1 class="text-4xl innercenter">{$_("homepage.section1")}</h1>

  <!-- Nội dung con của mục 1 -->
  <div>
    <Background color="blue">
      <AnimOnVisible direction="left">
        <div class="innercenter">
          <h1 class="font-medium">{$_("homepage.section1.sub")}</h1>
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
        </div>
      </AnimOnVisible>
    </Background>

    <Background color="purple">
      <AnimOnVisible direction="right">
        <div class="innercenter">
          <h1 class="font-medium">{$_("homepage.section1.sub2")}</h1>
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
        </div>
      </AnimOnVisible>
    </Background>

    <Background color="sublime">
      <AnimOnVisible direction="left">
        <div class="innercenter">
          <h1 class="font-medium">{$_("homepage.section1.sub3")}</h1>
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
        </div>
      </AnimOnVisible>
    </Background>

    <Background color="lavender">
      <AnimOnVisible direction="right">
        <div class="innercenter">
          <h1 class="font-medium">{$_("homepage.section1.sub4")}</h1>
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="subsection">
              <p>
                {$_("homepage.section1.sub4.details")}
              </p>
              <Alert color="none" class="box-info-orange drop-shadow-md m-1">
                <h2>{$_("OfficeStation.Mobile")}</h2>
                {@html $_("officestation.mobile.info")}
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
        </div>
      </AnimOnVisible>
    </Background>
  </div>

  <!-- Tiêu  của mục 2 -->
  <h1 class="text-4xl innercenter">{$_("homepage.section2")}</h1>
  <Background color="blue">
    <AnimOnVisible>
      <div class="innercenter py-5">
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
      </div>
    </AnimOnVisible>
  </Background>

  <h1 class="text-4xl innercenter">
    {$_("homepage.section3")}
  </h1>
  <div class="innercenter">
    <p class="py-5 pb-10">
      Getting started with OfficeStation is easy! Download now on your device.
    </p>
    <DownloadApp></DownloadApp>
    <div class="py-7" />
  </div>
</div>
