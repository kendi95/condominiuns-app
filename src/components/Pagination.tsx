import { Page } from "./Page"
import { PreviewPage } from "./PreviewPage"
import { NextPage } from "./NextPage"

import { useApp } from "@hooks/useApp"

export function Pagination() {
  const { currentPage, totalPages, navigationPage } = useApp()

  const pages = Array
    .from(Array(totalPages).keys())
    .map((page) => page + 1)

  const isShowPreviewPage = Number(currentPage) > 1;
  const isShowNextPage = Number(currentPage) < totalPages

  function handlePageNavigate(page: number) {
    navigationPage(page)
  }

  return (
    <div className="flex items-center justify-end w-full gap-1">
      {isShowPreviewPage && (
        <PreviewPage />
      )}

      {pages.map(page => {
        return (
          <Page 
            key={page} 
            page={String(page)} 
            currentPage={String(currentPage)}
            onClick={() => handlePageNavigate(page)}
          />
        )
      })}

      {isShowNextPage && (
        <NextPage />
      )}
    </div>
  )
}