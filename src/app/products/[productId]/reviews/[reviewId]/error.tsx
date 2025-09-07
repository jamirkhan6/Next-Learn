"use client"

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary ({error, reset} : {error : Error; reset: () => void}) {
    const router = useRouter();
    const reload = () => {
        startTransition(() => {
            router.refresh();
            reset()
        })
    }
    return <>
        <h1>{error.message}</h1>
        <button onClick={ () => reload()} className="p-3 bg-amber-300">try again</button>
    </>
}