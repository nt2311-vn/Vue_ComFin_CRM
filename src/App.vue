<script setup lang="ts">
import { ref } from "vue";
import { account, ID } from "./lib/appwrite";
const loggedInUser = ref(null);
const email = ref("");
const name = ref("");
const password = ref("");
const isDarkMode = ref(false);
const currentTab = ref("login");

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const login = async (email: string, password: string) => {
  try {
    await account.createEmailPasswordSession(email, password);
    loggedInUser.value = await account.get();
  } catch (err) {
    console.error("Login error", err);
  }
};

const register = async () => {
  try {
    await account.create(ID.unique(), email.value, password.value, name.value);
    login(email.value, password.value);
  } catch (err) {
    console.error("Register error", err);
  }
};

const logout = async () => {
  await account.deleteSession("current");
  loggedInUser.value = null;
};
</script>
<template>
  <div
    :class="{ dark: isDarkMode }"
    class="min-h-screen flex flex-col items-center bg-base-200 p-4"
  >
    <!-- Navbar -->
    <div class="navbar bg-base-100 shadow-lg w-full mb-8">
      <div class="flex-1 px-2 mx-2">
        <span class="text-lg font-bold">My App</span>
      </div>
      <div class="flex-none">
        <button @click="toggleDarkMode" class="btn btn-outline mr-2">
          Toggle Dark Mode
        </button>
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
