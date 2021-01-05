import { query } from '../../lib/db'

export default async (req, res) => {
  // const { content } = req.body
  const content = 'test'
  try {
    const results = await query(
      `
      SELECT * FROM posts
      `
    )
    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}
