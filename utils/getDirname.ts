import path from "node:path";

const basePath = path.join("D:", "mdx-files");

export function getDirname(pathArr: string[]): string[] {
  const paths: string[] = [];

  for (let file of pathArr) {
    if (!file.endsWith(".mdx")) continue;
    if (paths.includes(convertPathToDirname(file))) continue;

    paths.push(convertPathToDirname(file));
  };
  
  return paths
}

function convertPathToDirname(targetPath: string) {
  return path.basename(path.dirname(path.join(basePath, targetPath)))
};