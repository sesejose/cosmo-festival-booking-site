import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";


/* I might use this page in to make my video */

export default function NotFound() {
const router = useRouter();
useEffect(() =>{
setTimeout(() => {
    router.push("/")
}, 6000);
})

  return (
    <div className='not-found'>
        <h1>Oooooops...</h1>
        <h2>That page can not be found</h2>
        <p>Go back to the <Link href="/">Home page</Link></p>
    </div>
  )
}

 