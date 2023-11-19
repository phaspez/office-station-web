<script>
  //@ts-nocheck
  import AnimOnVisible from "../../AnimOnVisible.svelte";
  import { Alert, Carousel } from "flowbite-svelte";
  import { _ } from "svelte-i18n";
  import { allDevicesImg } from "../../img";
  import { images } from "../../img";

  let imgaddr = {
    alt: "img",
    src: "https://website-prod.cache.wpscdn.com/img/introduce3.1709dd1.png",
    title: "image",
  };

  let first = [images[0]];
</script>

<h1 class="headline">{$_("Documents")}</h1>
<p class="headline-details pt-0 lg:pr-96">
  {$_("documentpage.headline")}
</p>

<section>
  <AnimOnVisible direction="left">
    <section>
      <h1>Create easily outstanding text documents</h1>
      <div class="grid grid-cols-1 justify-items-stretch md:grid-cols-2">
        <div class="subsection">
          <p class>
            Reliable and easy to use, Documents is a text editor that always has
            a useful feature to support and complement your work. Quickly tweak
            layouts, fonts and formatting, add images and tables with ease.
          </p>
        </div>
        <div class="subsection">
          <Carousel images={allDevicesImg} duration={5000} />
        </div>
      </div>
    </section>
  </AnimOnVisible>
  <section>
    <AnimOnVisible direction="right">
      <section>
        <h1>Complatible with many major formats</h1>
        <div class="grid grid-cols-1 justify-items-stretch md:grid-cols-2">
          <div class="subsection">
            <p class>
              Documents is compatible with 15 File Formats, including .doc,
              .docx, .docm, .dotm, .txt, .rtf, and more. With Documents, you can
              effortlessly preserve text, headings, colors, cell and number
              formats, layout, and other components, ensuring that your files
              remain intact throughout the process.
            </p>
          </div>
          <div class="subsection">
            <Carousel images={first} duration={5000} />
          </div>
        </div>
      </section>
    </AnimOnVisible>
  </section>
  <AnimOnVisible direction="left">
    <section>
      <h1>Collaboration with your teammate</h1>
      <div class="grid grid-cols-1 justify-items-stretch md:grid-cols-2">
        <div class="subsection">
          <p class>
            Empower teamwork with comments, track changes from multiple authors,
            and leverage solid compatibility with all popular file formats,
            including Microsoft Office, Apple iWork, OpenOffice, and others.
          </p>
        </div>
        <div class="subsection">
          <Carousel images={[imgaddr]} duration={5000} />
        </div>
      </div>
    </section>
  </AnimOnVisible>
</section>
