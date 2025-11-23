"use client";

import useTheme from "@/hooks/useTheme";
import Giscus from "@giscus/react";

const Comments = () => {
  const { theme } = useTheme();

  return (
    // https://giscus.app/ko 를 확인해 주세요
    <Giscus
      repo="luke0408/luke-s-blog"
      repoId="R_kgDOQZVVdw"
      category="Announcements"
      categoryId="DIC_kwDOQZVVd84CyFM5"
      mapping="title"
      id="comments"
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
