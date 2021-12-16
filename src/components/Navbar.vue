<template>
  <c-flex justify="space-between" bg="white" py="5" :px="['1rem','3rem','5rem']">
        <c-flex>
            <c-text as="b">
                Shirmp App
            </c-text>
        </c-flex>
        <c-flex>
            <c-flex px="2">
                <router-link to="/">Home</router-link>
            </c-flex>
            <c-flex px="2">
                <router-link to="/about">About</router-link>
            </c-flex>
        </c-flex>
  </c-flex>
</template>

<script lang="js">
import {CFlex, CText } from '@chakra-ui/vue'

export default {
  name: 'Navbar',
  components: {
    CFlex,
    CText,
  }
}
</script>