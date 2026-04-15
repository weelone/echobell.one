import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const outputPath = path.join(repoRoot, "lib", "rawContent.generated.json");

const CONTENT_DIRS = ["docs", "blog"];

async function collectMarkdownFiles(rootDir, currentDir = rootDir) {
  const entries = await readdir(currentDir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(currentDir, entry.name);

      if (entry.isDirectory()) {
        return collectMarkdownFiles(rootDir, fullPath);
      }

      if (!entry.isFile() || !entry.name.endsWith(".mdx")) {
        return [];
      }

      const relativePath = path.relative(rootDir, fullPath).split(path.sep).join("/");
      return [
        {
          relativePath,
          content: await readFile(fullPath, "utf8"),
        },
      ];
    })
  );

  return files.flat().sort((a, b) => a.relativePath.localeCompare(b.relativePath));
}

async function buildManifest() {
  const manifest = {};

  for (const kind of CONTENT_DIRS) {
    const contentRoot = path.join(repoRoot, "content", kind);
    const files = await collectMarkdownFiles(contentRoot);

    manifest[kind] = Object.fromEntries(
      files.map(({ relativePath, content }) => [relativePath, content])
    );
  }

  return manifest;
}

const manifest = await buildManifest();

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

const totalFiles = Object.values(manifest).reduce(
  (count, files) => count + Object.keys(files).length,
  0
);

console.log(
  `Generated raw content manifest at ${path.relative(repoRoot, outputPath)} with ${totalFiles} files.`
);
