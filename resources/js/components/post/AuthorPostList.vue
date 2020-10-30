<template>
    <div class="container my-20 mx-auto px-4 w-full md:w-3/4 lg:w-3/5 xl:w-1/2">
        <div v-if="$apollo.loading"></div>
        <div v-else>
            <h2 class="text-4xl">
                <router-link
                    :to="{ name: 'index' }"
                    class="text-gray-600 hover:underline"
                >
                    All Posts
                </router-link>
                <span class="text-gray-600">/</span>{{ user.name }}
            </h2>
            <PostListItem
                class="mt-10"
                v-for="post in user.posts"
                :key="post.id"
                :post="post"
            >
            </PostListItem>
        </div>
    </div>
</template>

<script>
import gql from "graphql-tag";
import PostListItem from "../reuseables/PostListItem";
export default {
    name: "PostList",
    components: {
        PostListItem
    },
    apollo: {
        user: {
            query: gql`
                query($id: ID!) {
                    user(id: $id) {
                        id
                        name
                        posts {
                            id
                            title
                            lead
                            created_at
                            author {
                                id
                                name
                            }
                            topic {
                                name
                                slug
                            }
                        }
                    }
                }
            `,
            variables() {
                return {
                    id: this.$route.params.id
                };
            }
        }
    }
};
</script>

<style scoped></style>
