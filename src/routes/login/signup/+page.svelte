<script>
  import { Card, Button, Label, Input, Checkbox, Radio } from "flowbite-svelte";
  import { EnvelopeSolid } from "flowbite-svelte-icons";
  import { _ } from "svelte-i18n";
</script>

<div class="flex items-center justify-center pt-25">
  <Card class="w-full max-w-md">
    <form class="flex flex-col space-y-6" action="/">
      <h3 class="text-xl font-medium text-gray-900 dark:text-white">
        {$_("Sign_up")}
      </h3>
      <div class="mb-6">
        <Label for="input-group-1" class="block mb-2">Email:</Label>
        <Input id="email" type="email" placeholder={$_("hold_email")}>
          <EnvelopeSolid
            slot="left"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
          />
        </Input>
      </div>
      <Label class="space-y-2">
        <span>{$_("Password")}</span>
        <Input
          type="password"
          name="password"
          placeholder={$_("hold_pass")}
          required
        />
      </Label>
      <Label class="space-y-2">
        <span>{$_("repassword")}</span>
        <Input
          type="password"
          name="password"
          placeholder={$_("hold_pass2")}
          required
        />
      </Label>
      <Label class="space-y-2">
        <span>{$_("sex")}</span>
        <Radio name="sex">{$_("Male")}</Radio>
        <Radio name="sex">{$_("Female")}</Radio>
        <Radio name="sex">{$_("Other")}</Radio>
      </Label>
      <Label class="space-y-2">
        <span>{$_("")}</span>
        <label class="text-sm mt-2">
          {$_("info")}
          <a
            href="/"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >{$_("policy")}</a
          >
          .
        </label>
        <Checkbox>{$_("agree")}</Checkbox>
      </Label>

      <Button type="submit" class="w-full">{$_("crea")}</Button>
      <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
        {$_("have_acc")}
        <a
          href="/login"
          class="text-primary-700 hover:underline dark:text-primary-500"
        >
          {$_("Sign_in")}
        </a>
      </div>
    </form>
  </Card>
</div>
