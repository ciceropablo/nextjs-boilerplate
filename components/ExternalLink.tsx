type ExternalLinkProps = {
  href: string
  title: string
  description: string
}

const ExternalLink = ({ href, title, description }: ExternalLinkProps) => {
  return (
    <a
      href={href}
      className="m-4 box-border max-w-[300px] rounded-xl border border-solid border-neutral-200 p-6 text-left text-inherit no-underline transition-colors delay-75 ease-out hover:border-blue-500 hover:text-blue-500"
    >
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>
      <p className="m-0 text-xl">{description}</p>
    </a>
  )
}

export default ExternalLink
