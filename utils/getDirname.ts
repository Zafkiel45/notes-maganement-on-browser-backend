import path from "node:path";

const basePath = path.join("D:", "mdx-files");

export function getDirname(pathArr: string[], pathBase = basePath): string[] {
  const paths: string[] = [];

  for (let file of pathArr) {
    if (!file.endsWith(".mdx")) continue;

    paths.push(path.basename(path.dirname(path.join(pathBase, file))));
  }

  return paths;
}
