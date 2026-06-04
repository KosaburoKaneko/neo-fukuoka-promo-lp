import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = new URL("..", import.meta.url);
const productsPath = new URL("../src/data/products.json", import.meta.url);
const imagesDir = new URL("../src/assets/images/", import.meta.url);
const reportPath = new URL("../reports/missing-assets.md", import.meta.url);

async function download(url, outputPath) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0 (compatible; fathersday-lp-asset-fetcher/1.0)"
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} ${response.statusText}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(outputPath, buffer);
  return buffer.length;
}

function collectAssets(data) {
  return [
    ...data.products.map((item) => ({
      id: item.id,
      label: item.name,
      imageUrl: item.imageUrl,
      localImagePath: item.localImagePath
    })),
    ...(data.supportImages || [])
  ];
}

async function main() {
  await mkdir(imagesDir, { recursive: true });
  const data = JSON.parse(await readFile(productsPath, "utf8"));
  const failures = [];
  const downloads = [];

  for (const asset of collectAssets(data)) {
    const destination = new URL(`../src/${asset.localImagePath}`, import.meta.url);
    try {
      const bytes = await download(asset.imageUrl, destination);
      downloads.push({ ...asset, bytes });
    } catch (error) {
      failures.push({ ...asset, error: error.message });
    }
  }

  if (failures.length) {
    const existing = await readFile(reportPath, "utf8").catch(() => "# 不足画像リスト\n");
    const detail = [
      "",
      "## 画像ダウンロード失敗",
      "",
      ...failures.map((item) => `- ${item.label}: ${item.imageUrl} (${item.error})`)
    ].join("\n");
    await writeFile(reportPath, `${existing.trim()}\n${detail}\n`);
  }

  console.log(`Downloaded ${downloads.length} assets to ${path.relative(root.pathname, imagesDir.pathname)}`);
  if (failures.length) {
    console.log(`Failed ${failures.length} assets. See reports/missing-assets.md`);
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
