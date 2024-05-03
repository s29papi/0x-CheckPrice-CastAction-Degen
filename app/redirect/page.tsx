'use client';

import {useRouter, useSearchParams} from "next/navigation";
import {useEffect} from "react";
import { Suspense } from 'react'

export default function RedirectPage() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const username = searchParams.get('username');
    const buttonIdx = searchParams.get('buttonIdx');


    

    useEffect(() => {
        if (buttonIdx == "1") {
            (async () => {
                const trendingUrl = `https://drakula.app/user/${username}`;

            
                window.location.href = trendingUrl;
            })()
        }

        if (buttonIdx == "2") {
            const trendingUrl = "https://drakula.app/trending";

            
            window.location.href = trendingUrl;
        }
    }, [router, username, buttonIdx]);

    return (
            <div></div>
    );
}