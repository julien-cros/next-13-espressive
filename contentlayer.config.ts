import {
	defineDocumentType,
	makeSource,
} from "@contentlayer/source-files";
import remarkGfm from "remark-gfm";

export const Post = defineDocumentType(() => ({
	name: "Post",
	filePathPattern: "**/*.mdx",
	contentType: "mdx",
	fields: {
		title: { type: "string", required: true },
		createdAt: { type: "string", required: true },
		updatedAt: { type: "string", required: true },
		description: { type: "string", required: true },
		tags: { type: "list", of: { type: "string" }, required: true },
	},
	computedFields: {
		url: {
			type: "string",
			resolve: (post) => `/post/${post._raw.flattenedPath}`,
		},
		slug: {
			type: "string",
			resolve: (post) => post._raw.flattenedPath,
		},
	},
}));


export default makeSource({
	contentDirPath: 'posts',
	documentTypes: [Post],
	mdx: {
		remarkPlugins: [remarkGfm],
	},
});