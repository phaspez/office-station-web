<script>
  import { Card, Button, Label, Input, Checkbox } from "flowbite-svelte";
  import { _ } from "svelte-i18n";
</script>

<div class="innercenter">
  <div class="flex items-center justify-center pt-25">
    <Card class="w-full max-w-md">
      <form class="flex flex-col space-y-6" action="/">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">
          {$_("Sign_in")}
        </h3>
        <Label class="space-y-2">
          <span>Email:</span>
          <Input
            type="email"
            name="email"
            placeholder={$_("hold_email")}
            required
          />
        </Label>
        <Label class="space-y-2">
          <span>{$_("Password")}</span>
          <Input
            type="password"
            name="password"
            placeholder={$_("hold_pass")}
            required
          />
        </Label>
        <div class="flex items-start">
          <Checkbox>{$_("Remember")}</Checkbox>
          <a
            href="/"
            class="ml-auto text-sm text-primary-700 hover:underline dark:text-primary-500"
          >
            {$_("lost")}
          </a>
        </div>
        <Button type="submit" class="w-full">{$_("login")}</Button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          {$_("registered")}
          <a
            href="/login/signup"
            class="text-primary-700 hover:underline dark:text-primary-500"
          >
            {$_("Create")}
          </a>
        </div>
      </form>
    </Card>
  </div>
</div>
