<script>
// @ts-nocheck

  import { _ } from "svelte-i18n";
  import DownloadApp from "../DownloadApp.svelte";
  import Background from "../Background.svelte";
  import AnimOnVisible from "../AnimOnVisible.svelte";
  import { about1, about2, allDevicesImg, } from "../img";
  import { Alert,Carousel} from "flowbite-svelte";
  import { Timeline, TimelineItem, Button, Heading, P } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
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
<div class="h-100">
  <br>
  <h1 class="text-center text-5xl">{$_("about.headline")}</h1>
  <br>
</div>
<div class="bg-white py-5 sm:py-5">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base leading-7 text-gray-600">{$_("stats1.1")}</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{$_("stats1")}</dd>
      </div>
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base leading-7 text-gray-600">{$_("stats2")}</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">20</dd>
      </div>
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base leading-7 text-gray-600">{$_("stats3")}</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">10+</dd>
      </div>
    </dl>
  </div>
</div>

<Background color="yellow">
  <AnimOnVisible direction="left">
    <div class="innercenter">
      <h1 class="text-3xl">{$_("about.subsection1")}</h1>
      <div class="grid grid-cols-1 justify-items-stretch md:grid-cols-2">
        <div class="subsection">
          <p class>
           {$_("about.subsection1.details")}
          </p>
          <Timeline>
            <TimelineItem title="" date=" 2016">
              <p class="mb-4 text-base font-normal text-black-500 dark:text-black-400">{$_("about.title1")}</p>
            </TimelineItem>
            <TimelineItem title="" date=" 2019">
              <p class="text-base font-normal text-black-500 dark:text-black-400">{$_("about.title2")}</p>
            </TimelineItem>
            <TimelineItem title="" date=" 2021">
              <p class="text-base font-normal text-black-500 dark:text-black-400">{$_("about.title3")}</p>
            </TimelineItem>
          </Timeline>
        </div>
        <div class="subsection">
          <Carousel images={about1} duration={5000} />

        </div>
      </div>
    </div>
  </AnimOnVisible>
</Background>



<Background color="blue">
  <AnimOnVisible>
    <div class="text-center text-6xl">
      <h1>{$_("about.headline1")}</h1>
    </div>
    <div class="innercenter py-5">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <Alert color="none" class="box-info-blue drop-shadow-md m-1">
            <h2>{$_("about1")}</h2>
            <ul class="list">
              {@html $_("about1.1")}
            </ul>
          </Alert>
        </div>
        <div>
          <Alert color="none" class="box-info-green drop-shadow-md m-1">
            <h2>{$_("about2")}</h2>
            <div class="i18n" data-i18n="[html]content.body">
              <ul class="list">
                {@html $_("about2.2")}
              </ul>
            </div>
          </Alert>
        </div>
        <div>
          <Alert color="none" class="box-info-orange drop-shadow-md m-1">
            <h2>{$_("about3")}</h2>
            <ul class="list">
              {@html $_("about3.3")}
            </ul>
          </Alert>
        </div>
      </div>
    </div>
  </AnimOnVisible>
</Background>

<Background color="lavender">
  <AnimOnVisible direction="right">
    <div class="text-center">
      <Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">{$_("about4")}</Heading>
      <P class="text-center mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">{$_("about4.4")}</P>
      <Button href="/">
        <ArrowRightOutline class="w-3.5 h-3.5 ml-2" />
      </Button>
    </div>
    <br>
  </AnimOnVisible>
</Background>


<div class="py-10">
  <DownloadApp></DownloadApp>
</div>
