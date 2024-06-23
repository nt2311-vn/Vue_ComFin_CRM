<script setup lang="ts">
import { ref, watch } from "vue";
import { account, ID } from "./lib/appwrite";

const loggedInUser = ref(null);
const email = ref("");
const name = ref("");
const password = ref("");
const currentTab = ref("login"); // To track the active tab
const currentTheme = ref("light"); // To track the current theme

const themes = [
  "light",
  "dark",
  "cupcake",
  "emerald",
  "corporate",
  "synthwave",
  "valentine",
  "halloween",
  "forest",
  "black",
  "dracula",
  "cmyk",
  "business",
  "night",
  "coffee",
  "winter",
];

const setTheme = (theme: string) => {
  currentTheme.value = theme;
  document.documentElement.setAttribute("data-theme", theme);
};

watch(currentTheme, (newTheme) => {
  setTheme(newTheme);
});

const login = async (email: string, password: string) => {
  try {
    await account.createEmailPasswordSession(email, password);
    loggedInUser.value = await account.get();
  } catch (error) {
    console.error("Login error:", error);
  }
};

const register = async () => {
  try {
    await account.create(ID.unique(), email.value, password.value, name.value);
    login(email.value, password.value);
  } catch (error) {
    console.error("Registration error:", error);
  }
};

const logout = async () => {
  try {
    await account.deleteSession("current");
    loggedInUser.value = null;
  } catch (error) {
    console.error("Logout error:", error);
  }
};
</script>
<template>
  <div
    :class="{ dark: currentTheme === 'dark' }"
    class="min-h-screen flex flex-col items-center bg-base-200 p-4"
  >
    <!-- Navbar -->
    <div class="navbar bg-base-100 shadow-lg w-full mb-8">
      <div class="flex-1 px-2 mx-2">
        <span class="text-lg font-bold">Finance CRM</span>
      </div>
      <div class="flex-none">
        <div class="dropdown dropdown-end mr-2">
          <label tabindex="0" class="btn btn-outline">Select Theme</label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 max-h-96 overflow-y-auto"
          >
            <li v-for="theme in themes" :key="theme">
              <a @click="setTheme(theme)">{{ theme }}</a>
            </li>
          </ul>
        </div>
        <button v-if="loggedInUser" @click="logout" class="btn btn-accent">
          Logout
        </button>
      </div>
    </div>

    <!-- Tabs for login and register -->
    <div class="tabs mb-4">
      <a
        @click="currentTab = 'login'"
        :class="{ 'tab-active': currentTab === 'login' }"
        class="tab tab-bordered"
        >Login</a
      >
      <a
        @click="currentTab = 'register'"
        :class="{ 'tab-active': currentTab === 'register' }"
        class="tab tab-bordered"
        >Register</a
      >
    </div>

    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-center">
          {{
            loggedInUser ? `Logged in as ${loggedInUser.name}` : "Not logged in"
          }}
        </h2>
        <form @submit.prevent class="space-y-4">
          <input
            type="email"
            placeholder="Email"
            v-model="email"
            required
            class="input input-bordered w-full"
          />
          <input
            type="password"
            placeholder="Password"
            v-model="password"
            required
            class="input input-bordered w-full"
          />

          <!-- Conditional rendering based on the active tab -->
          <div v-if="currentTab === 'login'">
            <button
              type="button"
              @click="login(email, password)"
              class="btn btn-primary w-full"
            >
              Login
            </button>
          </div>
          <div v-else>
            <input
              type="text"
              placeholder="Name"
              v-model="name"
              required
              class="input input-bordered w-full"
            />
            <button
              type="button"
              @click="register"
              class="btn btn-secondary w-full"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
