// tree.js
import fs from 'node:fs';
import path from 'node:path';

function printDirTree(dir, depth = 0, maxDepth = 3) {
  if (depth > maxDepth) return;

  const indent = '  '.repeat(depth);
  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    // 忽略 node_modules 和 .git
    if (['.git', 'node_modules'].includes(file.name)) continue;

    console.log(`${indent}${file.isDirectory() ? '📂' : '📄'} ${file.name}`);

    if (file.isDirectory() && depth < maxDepth - 1) {
      printDirTree(path.join(dir, file.name), depth + 1, maxDepth);
    }
  }
}

// 使用当前目录
printDirTree(process.cwd(), 0, 3);
