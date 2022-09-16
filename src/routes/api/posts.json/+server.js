import fs from 'fs'
import yaml from "js-yaml"

export const GET = async () => {

	const posts = []
	const resp = fs.readdirSync('./static/data/blog').forEach(async file => {
		const post = await yaml.load(fs.readFileSync('./static/data/blog/'+file, 'utf8'))
		posts.push(post)
	})
  return {
    body: posts
  }
}