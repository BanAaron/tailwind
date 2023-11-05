import {parse} from "marked"
import fs from "fs";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function load({params}) {
    const post: string = params.post
    const contents: string = fs.readFileSync(`./src/lib/assets/posts/${post}.md`, "utf-8")
    const md: string = parse(contents)
    return {md}
}
