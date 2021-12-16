<template>
    <c-box w="100%">
        <c-text as="b" fontSize="32px">Price List</c-text>
        <c-simple-grid :columns="1" spacing="16px">
            <c-box height="80px">
                <c-grid
                    h="200vh"
                    w="100px"
                    template-rows="repeat(2, 1fr)"
                    template-columns="repeat(5, 1fr)"
                    gap="6"
                    >
                    <c-grid-item row-span="2" col-span="1" bg="blue.300" />
                    <c-grid-item col-span="2" bg="red.300" />
                    <c-grid-item col-span="2" bg="red.300" />
                    <c-grid-item col-span="4" bg="blue.300" />
                </c-grid>
            </c-box>
        </c-simple-grid>
    </c-box>
</template>

<script>
import { CSimpleGrid, CGrid, CGridItem, CBox, CText } from '@chakra-ui/vue'

export default {
  name: 'PriceList',
  components: {
    CGrid, 
    CGridItem, 
    CBox,  
    CText, 
    CSimpleGrid, 
  }, 
}
</script>
