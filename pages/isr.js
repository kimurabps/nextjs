export default function Isr({ date }) {
  return (
    <h1>{date}</h1>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://nextjs-xi-pied.vercel.app/api/date')
  const json = await res.json()
  return {
    props: { date: json.date },
    revalidate: 3
  }
}
