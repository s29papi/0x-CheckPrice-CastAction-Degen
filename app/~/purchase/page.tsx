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
        const redirectUrl = `https://app.3dns.box/buy/${domainName}`;

        window.location.href = redirectUrl; // For a full page reload redirect

    }, [router]);

    return (
        <div>
            <p>Redirecting...</p>
        </div>
    );
}