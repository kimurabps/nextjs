export default function Ssg({ datetime }) {
  return (
    <h1>{datetime}</h1>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('/api/date')
  const json = await res.json()
  return { props: { datetime: json.datetime } }
}
