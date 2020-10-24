<template>
    <div>
        PostList Component
    </div>
</template>

<script>
    import gql from "graphql-tag";
    export default {
        name: "PostList",
        apollo:{
            posts : gql`{
                posts{
                    id
                    title
                }
            }`
        }
    }
</script>

<style scoped>

</style>
