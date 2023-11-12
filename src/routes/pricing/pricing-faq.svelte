<script>
  // @ts-nocheck
  import { AccordionItem, Accordion } from "flowbite-svelte";
</script>

<Accordion
  activeClasses="border-1 dark:bg-gray-800"
  inactiveClasses="text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
  class="bg-gray-200 dark:bg-slate-700 rounded-2xl"
>
  <AccordionItem class="">
    <span slot="header">What's the differece between Free and Pro plans?</span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      The Free plan offers basic usage of the application to get you started
      with OfficeStation Suite, and it's free forever! With the Pro membership,
      you get more advanced features of the application, such as document
      signing in Documents, data scraping using Python in Sheets, and more
      templates in Slides, as well as upgrading your online storage in
      OfficeStation Cloud up to 1 TB!
    </p>
  </AccordionItem>
  <AccordionItem>
    <span slot="header"
      >How can I or my team be eligible for Student discount?</span
    >
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      To apply for student discount, you and all of your team members must
      currently be a student of an academic institution, such as high school,
      college or university. We will ask you to enter your student ID, school
      e-mail address and your school websites during checkout.
    </p>
  </AccordionItem>
  <AccordionItem>
    <span slot="header">Can I change my plan later on?</span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      Yes you can! Contact us using your signed in profile so we can cancel or
      upgrade your plan. Please note that this only takes effect at the end of
      each month.
    </p>
  </AccordionItem>
  <AccordionItem>
    <span slot="header">What is Enterprise Plan?</span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      OfficeStation Enterprise is a special plan that offers generous cloud
      storages, administrative tools as well as security checks suitable for a
      large group of users. You can contact us for more details about our
      services!
    </p>
  </AccordionItem>
</Accordion>
