<template>
  <c-flex align="center" justify="space-between" background-color="white" py="12px" px="5rem">
    <c-flex>
      <c-text as="b" font-size="20px">Shrimp App</c-text>
    </c-flex>
    <c-flex>
      <c-text paddingRight="18px">
        <router-link to="/">Home</router-link>
      </c-text>
      <c-text paddingRight="18px">
        <router-link to="/price-list">Price List</router-link>
      </c-text>
    </c-flex>
  </c-flex>
</template>

<script>
import { CFlex, CText } from "@chakra-ui/vue";

export default {
  components: {
    CFlex,
    CText,
  },
  zIndices: {
      sticky: 1100,
  }
};
</script>

<style scoped>
</style>