<script setup></script>

<template>
    <!-- <p v-if="fullPat == '/account/register'">YES</p> -->
    <header class="w-full h-full flex justify-between items-center">
        <div class="flex gap-2 items-center">
            <h1 class="font-bold text-xl italic mr-3 text-violet-700">Hello.</h1>
            <nav class="flex gap-x-4">
                <NuxtLink activeClass="font-bold" to="/">Home</NuxtLink>
                <NuxtLink activeClass="font-bold" to="/posts">Posts</NuxtLink>
            </nav>
        </div>
        <div>
            <nav>
                <!-- <strong>{{ $route.path }}</strong> -->
                <NuxtLink v-if="$route.path == '/account/register'" class="font-bold" to="/account/login">Account
                </NuxtLink>
                <NuxtLink v-else-if="$route.path =='/account/login'" class="font-bold" to="/account/login">Account
                </NuxtLink>
                <NuxtLink v-else to="/account/login">Account</NuxtLink>
            </nav>
        </div>
    </header>
</template>