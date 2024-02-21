import { ImageResponse } from 'next/og';
import { CiSearch } from "react-icons/ci";
import { IoHeartOutline,  IoCheckmarkSharp} from "react-icons/io5";
import { TbAdjustments } from "react-icons/tb";
import { NextRequest } from 'next/server';
 
export const runtime = 'edge';
 
export async function GET(req: NextRequest) {
      const searchParams = req.nextUrl.searchParams;
    const domainNameParam:any = searchParams.get("domainName");
      const {status, firstYearRegistrationFee, renewalFee, domainName} = await fetchData(domainNameParam);
      const interFontData = await fetch(
          new URL('../../public/Inter-Regular.ttf', import.meta.url),
      ).then((res) => res.arrayBuffer());
      const interBoldFontData = await fetch(
          new URL('../../public/Inter-Bold.ttf', import.meta.url),
      ).then((res) => res.arrayBuffer());
     
      
      let parts = domainName.split(".");
      let domain = parts[0];
      let extension = parts[1];
      let domainPriceUsdc = addDecimalBeforeLastTwoZeros(firstYearRegistrationFee);
      let renewalDomainPriceUsdc = addDecimalBeforeLastTwoZeros(renewalFee);
      let statusAvailable = false;
      if (status === 'STATUS_AVAILABLE') {
        statusAvailable = true;
      }
      let availColor = statusAvailable ? "text-lime-400" : "text-red-500";
      let availWeight = statusAvailable ? "w-22" : "w-26";
}

const fetchData = async (domain: string) => {
  let status;
  let firstYearRegistrationFee;
  let renewalFee;
  let domainName;
  
  try {
    if (!domain.includes('.')) {
      domain += '.com';
    }
    
    const response = await fetch(`https://api.3dns.xyz/api/v1/core_backend_service/domain/check_domain/${domain}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    status = data.status;
    firstYearRegistrationFee = data.price.CURRENCY_USD.firstYearRegistrationFee;
    renewalFee = data.price.CURRENCY_USD.renewalFee;
    domainName = data.domain;
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return { status, firstYearRegistrationFee, renewalFee, domainName };
};
  
function addDecimalBeforeLastTwoZeros(str: string) {
  let num = parseFloat(str);
  num /= 100;
  let result = num.toFixed(2);

  return result;
}
  
  
  