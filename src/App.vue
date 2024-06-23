<script setup lang="ts">
import { ref } from "vue";
import { account, ID } from "./lib/appwrite";
const loggedInUser = ref(null);
const email = ref("");
const name = ref("");
const password = ref("");

const login = async (email: string, password: string) => {
  await account.createEmailPasswordSession(email, password);
  loggedInUser.value = await account.get();
};

const register = async () => {
  await account.create(ID.unique(), email.value, password.value, name.value);
  login(email.value, password.value);
};

const logout = async () => {
  await account.deleteSession("current");
  loggedInUser.value = null;
};
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 to-blue-500 p-4"
  >
    <div
      class="backdrop-filter backdrop-blur-lg bg-white/30 rounded-lg p-8 shadow-lg max-w-md w-full"
    >
      <p class="text-center text-white mb-4">
        {{
          loggedInUser ? `Logged in as ${loggedInUser.name}` : "Not logged in"
        }}
      </p>
      <form on:submit="{submit}" class="space-y-4">
        <input
          type="email"
          placeholder="Email"
          v-model="email"
          required
          class="w-full p-2 rounded-lg bg-white/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="password"
          placeholder="Password"
          v-model="password"
          required
          class="w-full p-2 rounded-lg bg-white/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="button"
          @click="login(email, password)"
          class="w-full p-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
        >
          Login
        </button>
        <button
          type="button"
          @click="register"
          class="w-full p-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition ml-2"
        >
          Register
        </button>
      </form>
      <button
        @click="logout"
        class="w-full p-2 mt-4 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
      >
        Logout
      </button>
    </div>
  </div>
</template>
