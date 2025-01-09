<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <!-- Brand -->
                <a class="navbar-brand me-3" href="#">Golden Empire</a>

                <!-- Toggler Button -->
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Collapsible Menu -->
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item" v-for="route in routes" :key="route.name">
                            <router-link class="nav-link px-3" :to="route.path">{{ route.name }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container text-center mt-4">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();
        return { routes: router.options.routes };
    },
};
</script>
