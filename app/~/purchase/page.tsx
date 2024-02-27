'use client';
import {useRouter} from "next/navigation";
import {useEffect} from "react";


type Props = {
    params: { domainName: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }
   

export default function RedirectPage({ params, searchParams }: Props) {
    const router = useRouter();
    const domainName = searchParams["domainName"];

    useEffect(() => {
        const redirectUrl = `https://app.3dns.box/buy/domainname.com?domainName=${domainName}`;

        // Perform the redirect
        window.location.href = redirectUrl; // For a full page reload redirect
        // Or use Next.js router for client-side redirect (comment out the line above if using this)
        // router.push(youtubeUrl);
    }, [router]);

    return (
        <div>
            <p>Redirecting...</p>
        </div>
    );
}