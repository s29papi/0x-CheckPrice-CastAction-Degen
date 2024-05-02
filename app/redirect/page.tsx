'use client';

import {useRouter, useSearchParams} from "next/navigation";
import {useEffect} from "react";
import { Suspense } from 'react'

export default function RedirectPage() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const fid = searchParams.get('fid');
    const buttonIdx = searchParams.get('buttonIdx');


    

    useEffect(() => {
        if (buttonIdx == "1") {
            (async () => {
                const trendingUrl = "https://drakula.app/trending";

            
                window.location.href = trendingUrl;
            })()
        }

        if (buttonIdx == "2") {
            const trendingUrl = "https://drakula.app/trending";

            
            window.location.href = trendingUrl;
        }
    }, [router, fid, buttonIdx]);

    return (
        <Suspense>
            <div>
                 <p>Redirecting...</p>
            </div>
        </Suspense>
    );
}