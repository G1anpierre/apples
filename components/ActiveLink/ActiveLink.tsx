import {useRouter} from 'next/router'

type ActiveLinkProps = {
  children: React.ReactChild
  href: string
  prefetch?: boolean
}

function ActiveLink({children, href, prefetch}: ActiveLinkProps) {
  const router = useRouter()
  const style = {
    color: router.asPath === href ? 'red' : 'black',
  }

  const handleClick = e => {
    e.preventDefault()
    router.push(href)
    if (prefetch) {
      router.prefetch(href)
    }
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  )
}

export default ActiveLink
