<template>
  <c-grid
    h="200px"
    w="600px"
    template-rows="repeat(2, 1fr)"
    template-columns="repeat(5, 1fr)"
    gap="6"
  >
    <c-grid-item row-span="2" col-span="1" bg="blue.300" />
    <c-grid-item col-span="2" bg="red.300" />
    <c-grid-item col-span="2" bg="red.300" />
    <c-grid-item col-span="4" bg="blue.300" />
  </c-grid>
</template>

<script>
import { CGrid, CGridItem } from '@chakra-ui/vue'

export default {
    name: 'About',
    components: {
      CGrid, 
      CGridItem
  }, 
}
</script>
