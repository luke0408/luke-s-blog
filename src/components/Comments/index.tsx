"use client";

import useTheme from "@/hooks/useTheme";
import Giscus from "@giscus/react";

const Comments = () => {
  const { theme } = useTheme();

  return (
    // https://giscus.app/ko 를 확인해 주세요
    <Giscus
      data-repo="luke0408/luke-s-blog"
      data-repo-id="R_kgDOQZVVdw"
      data-category="Announcements"
      data-category-id="DIC_kwDOQZVVd84CyFM5"
      data-mapping="title"
      id="comments"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      lang="ko"
      loading="eager"
      theme={theme}
    />
  );
};

export default Comments;
