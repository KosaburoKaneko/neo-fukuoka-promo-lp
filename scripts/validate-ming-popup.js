import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve("hakata_ming_popup_2026");
const html = readFileSync(resolve(root, "index.html"), "utf8");
const campaign = JSON.parse(readFileSync(resolve(root, "data/campaign.json"), "utf8"));
for (const text of [campaign.event.venue, campaign.event.display_date, campaign.event.hours]) {
  assert(html.split(text).length >= 4, `開催情報の掲載漏れ: ${text}`);
}
assert.equal(campaign.event.start_date, "2026-10-30");
assert.equal(campaign.event.end_date, "2026-11-08");
assert.equal(campaign.utm_campaign, "hakata_ming_popup_2026");
assert(!/福岡空港|国内線|2F|9月限定|9月2日|9月30日|9:00〜19:00|fukuoka_airport_popup_2026|mobile-sticky/.test(html));
for (const [, reference] of html.matchAll(/(?:src|href)="([^"#][^"]*)"/g)) {
  if (/^https?:/.test(reference)) continue;
  assert(existsSync(resolve(root, reference)), `ローカル参照切れ: ${reference}`);
}
for (const [, anchor] of html.matchAll(/href="#([^"]+)"/g)) {
  assert(html.includes(`id="${anchor}"`), `アンカー切れ: ${anchor}`);
}
assert(html.includes("過去の別会場"));
console.log("マイングLPの開催情報、旧会場情報の除去、参照ファイルとアンカーを確認しました。");
