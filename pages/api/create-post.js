import { query } from '../../lib/db'

export default (req, res) => {
  res.statusCode = 200
  const { content } = req.body
  try {
    await query(
      `
      INSERT INTO posts (content)
      VALUES (?)
      `,
      [content]
    )
    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}
