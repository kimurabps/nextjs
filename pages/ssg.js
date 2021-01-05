export default function Ssg({ datetime }) {
  return (
    <h1>{datetime}</h1>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://nextjs-xi-pied.vercel.app/api/date')
  const json = await res.json()
  return { props: { datetime: json.datetime } }
}
