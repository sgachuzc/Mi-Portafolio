import React from 'react';
import IconCloud from './magicui/IconCloud';

const slugs = [
  "magento",
  "php",
  "nodedotjs",
  "express",
  "mysql",
  "linux",
  "html5",
  "css3",
  "javascript",
  "jquery",
  "react",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
];

export function IconCloudDemo() {
  return (
    <div className="container-cloud relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
