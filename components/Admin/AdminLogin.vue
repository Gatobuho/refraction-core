<script setup lang="ts">
const client = useSupabaseAuthClient()

const email = ref('')
const password = ref('')
const method = ref('logIn')

const myData = ref<any>(null)
const myError = ref<any>(null)

const resetInputs = () => {
  email.value = ''
  password.value = ''
}

const logIn = async (e: Event) => {
  e.preventDefault()
  const { data, error } = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })
  if (!error)
    resetInputs()

  myData.value = data
  myError.value = error
}
const signUp = async (e: Event) => {
  e.preventDefault()
  const { data, error } = await client.auth.signUp({
    email: email.value,
    password: password.value,
  })
  if (!error)
    resetInputs()

  myData.value = data
  myError.value = error
}
</script>

<template>
  <section>
    <div class="mt-6 max-w-xs bg-slate-100 rounded p-6">
      <form class="space-y-6" @submit.prevent="logIn">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-500">Email address</label>
          <div class="mt-1">
            <input id="email" v-model="email" name="email" type="email" autocomplete="email" required class="block w-full appearance-none rounded-md border border-gray-500 px-3 py-2 placeholder-gray-500 shadow-sm focus:border-rose-500 focus:outline-none focus:ring-rose-500 sm:text-sm" placeholder="my@email.com">
          </div>
        </div>

        <div class="space-y-1">
          <label for="password" class="block text-sm font-medium text-gray-500">Password</label>
          <div class="mt-1">
            <input
              id="password" v-model="password" name="password" type="password" autocomplete="current-password" required
              class="block w-full appearance-none rounded-md border border-gray-500 px-3 py-2 placeholder-gray-500 shadow-sm focus:border-rose-500 focus:outline-none focus:ring-rose-500 sm:text-sm" placeholder="supersecret_1234"
            >
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md border border-transparent bg-rose-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 uppercase">
            {{ method }}
          </button>
        </div>
      </form>
      <div class="text-rose-300">
        {{ myData }}
        {{ myError }}
      </div>
    </div>
  </section>
</template>
