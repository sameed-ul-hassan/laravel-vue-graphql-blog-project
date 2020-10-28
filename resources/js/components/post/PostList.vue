<template>
    <div class="container my-20 mx-auto px-4 w-full md:w-3/4 lg:w-3/5 xl:w-1/2">
        <h2 class="text-4xl">All Posts</h2>
        <div v-if="$apollo.loading"></div>
        <div v-else>
            <PostListItem class="mt-10" v-for="post in posts" :key="post.id" :post="post">

            </PostListItem>
        </div>
    </div>
</template>

<script>
    import gql from "graphql-tag";
    import PostListItem from "../reuseables/PostListItem";
    export default {
        name: "PostList",
        components:{
          PostListItem
        },
        apollo:{
            posts : gql`{
                posts{
                    id
                    title
                    lead
                    created_at
                    author{
                        id
                        name
                    }
                    topic{
                        name
                        slug
                    }
                }
            }`
        }
    }
</script>

<style scoped>

</style>
