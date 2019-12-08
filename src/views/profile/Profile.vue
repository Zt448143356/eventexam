<template>
 <ProfileContent></ProfileContent>
</template>

<script>
  import ProfileContent from "../../components/content/profile/profileContent";
  export default {
    name: "profile",
    components: {ProfileContent},
    beforeCreate() {
      if(!this.$store.getters.getLogin){
        this.$router.replace('/home');
      }
    }
  }
</script>

<style scoped>

</style>
