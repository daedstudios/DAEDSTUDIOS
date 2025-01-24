import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkGfm) // Adds support for GitHub Flavored Markdown
    .use(html, {
      sanitize: false, // Allows image tags in output
    })
    .process(markdown);
  return result.toString();
}
