"use client";
import { useRouter } from "next/navigation"

export default function orderProduct () {
    const router = useRouter()
    const handleClick = () => {
        console.log("packing order done")
        // router.push("/")
        // router.replace("/profile")
        // router.forward("/about")
        router.back()
    }
    return <>
        <h1>order product</h1>
        <button onClick={handleClick}>place order</button>
    </>
}