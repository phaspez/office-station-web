<script>
  import { dictionary } from "svelte-i18n";
</script>

<div class="flex flex-col items-center justify-center min-h-screen">
  <h2 class="text-3xl font-bold mb-8">Sign in</h2>
  <div class="flex flex-col w-full max-w-md">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email"
        >Email</label
      >
      <input
        type="text"
        id="email"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password"
        >Password</label
      >
      <input
        type="password"
        id="password"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div class="flex items-center mb-4">
      <input type="checkbox" id="remember" class="mr-2" />
      <label class="text-gray-700 text-sm font-bold" for="remember"
        >Remember password</label
      >
    </div>
    <button
      type="submit"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >Sign in</button
    >
  </div>
</div>
<h2 class="text-3xl font-bold mt-8 mb-8">Sign up</h2>
<div class="flex flex-col w-full max-w-md">
  <h3>Name</h3>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="first_name"
      >First name</label
    >
    <input
      type="text"
      id="first_name"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="last_name"
      >Last name</label
    >
    <input
      type="text"
      id="last_name"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>

  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="sex"
      >Sex</label
    >
    <div class="flex items-center">
      <input type="radio" id="male" name="sex" value="male" class="mr-2" />
      <label class="text-gray-700 text-sm font-bold" for="male">Male</label>
    </div>
    <div class="flex items-center">
      <input type="radio" id="female" name="sex" value="female" class="mr-2" />
      <label class="text-gray-700 text-sm font-bold" for="female">Female</label>
    </div>
  </div>
</div>

<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="use"
    >Who use ?</label
  >
  <div class="flex items-center">
    <input
      type="radio"
      id="personal"
      name="use"
      value="personal"
      class="mr-2"
    />
    <label class="text-gray-700 text-sm font-bold" for="personal"
      >Personal</label
    >
  </div>
  <div class="flex items-center">
    <input
      type="radio"
      id="personal"
      name="use"
      value="personal"
      class="mr-2"
    />
    <label class="text-gray-700 text-sm font-bold" for="Group">Group</label>
  </div>
  <div class="flex items-center">
    <input
      type="radio"
      id="personal"
      name="use"
      value="personal"
      class="mr-2"
    />
    <label class="text-gray-700 text-sm font-bold" for="Enterprise"
      >Enterprise</label
    >
  </div>
</div>
<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="Password"
    >Password</label
  >
  <input
    type="password"
    placeholder="Password"
    class="block text-gray-700 text-sm font-smaill mb-4"
  />
</div>

<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="Re_Password"
    >Confirm password</label
  >
  <input
    type="password"
    placeholder="Confirm password"
    class="block text-gray-700 text-sm font-smaill mb-4"
  />
</div>

<div class="flex items-center mt-2">
  <input type="checkbox" class="form-checkbox" />
  <label class="ml-2">Sign up for newsletters?</label>
</div>

<button
  type="submit"
  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >Sign up</button
>