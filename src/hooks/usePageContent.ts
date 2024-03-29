import { ref } from 'vue'
import type pageContent from '@/components/page-content/page-content.vue'

function usePageContent() {
  const contentRef = ref<InstanceType<typeof pageContent>>()
  const handleQueryClick = (queryInfo: any) => {
    contentRef.value?.fetchPageList(queryInfo)
  }
  const handleResetClick = () => {
    contentRef.value?.fetchPageList()
  }

  return {
    contentRef,
    handleQueryClick,
    handleResetClick
  }
}

export default usePageContent
