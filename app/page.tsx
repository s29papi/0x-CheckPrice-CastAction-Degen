import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}





// <div className="w-96 h-96 flex-col justify-start items-start gap-2.5 inline-flex">
//     <div className="flex-col justify-start items-start gap-2.5 flex">
//         <img className="w-96 h-96" src="https://via.placeholder.com/1280x720" />
//     </div>
//     <div className="flex-col justify-start items-start gap-2.5 flex">
//         <div className="flex-col justify-start items-start gap-16 flex">
//             <div className="flex-col justify-start items-start gap-5 flex">
//                 <div className="flex-col justify-start items-start gap-5 flex">
//                     <div className="flex-col justify-start items-start gap-5 flex">
//                         <div className="text-white text-3xl font-bold font-['Inter']">Search</div>
//                     </div>
//                 </div>
//                 <div className="flex-col justify-start items-start gap-2.5 flex">
//                     <div className="flex-col justify-start items-start gap-2.5 flex">
//                         <div className="p-2.5 flex-col justify-start items-start gap-2.5 flex">
//                             <div className="flex-col justify-start items-start gap-2.5 flex">
//                                 <div className="w-96 h-20 bg-zinc-800 rounded border border-white" />
//                             </div>
//                         </div>
//                         <div className="justify-start items-center gap-96 inline-flex">
//                             <div className="text-white text-2xl font-semibold font-['Inter']">i-like-domains.com</div>
//                             <div className="justify-start items-end gap-3.5 flex">
//                                 <div className="justify-start items-start gap-1.5 flex">
//                                     <div className="w-3.5 h-8 text-white text-3xl font-bold font-['Jura']">x</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="w-8 h-8 px-1 py-1 bg-lime-500 rounded justify-start items-start gap-2.5 inline-flex" />
//                 </div>
//             </div>
//             <div className="flex-col justify-start items-start gap-4 flex">
//                 <div><span style="text-white text-3xl font-bold font-['Inter']">i-like-domains</span><span style="text-white text-3xl font-medium font-['Inter']">.</span><span style="text-white text-3xl font-light font-['Inter']">com</span></div>
//                 <div className="justify-start items-start gap-5 inline-flex">
//                     <div className="pl-2.5 pr-1.5 py-1.5 bg-stone-700 rounded flex-col justify-start items-start gap-2.5 inline-flex">
//                         <div className="justify-start items-center gap-1.5 inline-flex">
//                             <div className="text-lime-400 text-base font-semibold font-['Inter']">Available</div>
//                         </div>
//                     </div>
//                     <div className="justify-start items-center gap-3.5 flex">
//                         <div className="text-white text-base font-light font-['Inter']">Add to Wishlist</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="flex-col justify-start items-start gap-6 flex">
//             <div className="flex-col justify-start items-center gap-6 flex">
//                 <div className="justify-start items-start gap-11 inline-flex">
//                     <div className="justify-start items-center gap-0.5 flex">
//                         <div className="w-8 h-8 relative">
//                             <div className="w-8 h-8 left-0 top-0 absolute">
//                                 <div className="w-5 h-5 left-[5px] top-[5.50px] absolute">
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="text-white text-3xl font-bold font-['Inter']">DDDD</div>
//                     </div>
//                     <div className="justify-start items-start gap-0.5 flex">
//                         <div className="w-7 h-10 relative" />
//                         <div className="justify-start items-center gap-0.5 flex">
//                             <div className="text-white text-3xl font-bold font-['Inter']">10.000</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="justify-start items-start gap-10 inline-flex">
//                 <div className="justify-start items-start gap-0.5 flex">
//                     <div className="text-white text-base font-light font-['Inter']">Renews at </div>
//                     <div className="w-5 h-5 relative">
//                         <div className="w-5 h-5 left-0 top-0 absolute">
//                             <div className="w-3.5 h-3 left-[2.97px] top-[3.27px] absolute">
//                             </div>
//                         </div>
//                     </div>
//                     <div className="text-white text-base font-light font-['Inter']">12.000</div>
//                 </div>
//                 <div className="justify-start items-end gap-1.5 flex">
//                     <div className="justify-start items-end flex">
//                         <div className="justify-start items-start gap-0.5 flex">
//                             <div className="text-white text-base font-light font-['Inter']">Renews at </div>
//                         </div>
//                         <div className="w-3.5 h-4 relative" />
//                         <div className="justify-start items-start gap-0.5 flex">
//                             <div className="text-white text-base font-light font-['Inter']">12.000</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>




































































{/* <div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
        <img style={{width: 1280, height: 720}} src="https://via.placeholder.com/1280x720" />
    </div>
    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 62, display: 'flex'}}>
            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 19, display: 'flex'}}>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 19, display: 'flex'}}>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 19, display: 'flex'}}>
                        <div style={{color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Search</div>
                    </div>
                </div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                        <div style={{padding: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                                <div style={{width: 1084, height: 73, background: '#292929', borderRadius: 5, border: '1px #FFFCFC solid'}} />
                            </div>
                        </div>
                        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 718, display: 'inline-flex'}}>
                            <div style={{color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>i-like-domains.com</div>
                            <div style={{justifyContent: 'flex-start', alignItems: 'flex-end', gap: 15, display: 'flex'}}>
                                <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 7, display: 'flex'}}>
                                    <div style={{width: 15, height: 32, color: 'white', fontSize: 32, fontFamily: 'Jura', fontWeight: '700', wordWrap: 'break-word'}}>x</div>
                                </div>
                                <div style={{width: 19.05, height: 22.97, transform: 'rotate(89.42deg)', transformOrigin: '0 0', background: 'white'}}></div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: 31, height: 31, paddingLeft: 5, paddingRight: 5, paddingTop: 4, paddingBottom: 4, background: '#79AE34', borderRadius: 5, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                        <div style={{width: 20, height: 20, background: '#1E1E1E'}}></div>
                    </div>
                </div>
            </div>
            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 17, display: 'flex'}}>
                <div><span style="color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'">i-like-domains</span><span style="color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'">.</span><span style="color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word'">com</span></div>
                <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 22, display: 'inline-flex'}}>
                    <div style={{paddingTop: 6, paddingBottom: 6, paddingLeft: 10, paddingRight: 7, background: '#3F5438', borderRadius: 5, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 7, display: 'inline-flex'}}>
                            <div style={{width: 14, height: 10.17, border: '2px #9FF316 solid'}}></div>
                            <div style={{color: '#9FF316', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Available</div>
                        </div>
                    </div>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 15, display: 'flex'}}>
                        <div style={{width: 35, height: 31, border: '2px #FFFCFC solid'}}></div>
                        <div style={{color: '#FFFCFC', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word'}}>Add to Wishlist</div>
                    </div>
                </div>
            </div>
        </div>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 23, display: 'flex'}}>
            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 23, display: 'flex'}}>
                <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 45, display: 'inline-flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 2, display: 'flex'}}>
                        <div style={{width: 32, height: 32, position: 'relative'}}>
                            <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute'}}>
                                <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', background: '#3E73C4'}}></div>
                                <div style={{width: 22, height: 21, left: 5, top: 5.50, position: 'absolute'}}>
                                    <div style={{width: 8.17, height: 14.63, left: 6.86, top: 3.16, position: 'absolute', background: 'white'}}></div>
                                    <div style={{width: 22, height: 21, left: 0, top: 0, position: 'absolute', background: 'white'}}></div>
                                </div>
                            </div>
                        </div>
                        <div style={{color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>DDDD</div>
                    </div>
                    <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 3, display: 'flex'}}>
                        <div style={{width: 29, height: 39, position: 'relative'}}>
                            <div style={{width: 14.50, height: 16.91, left: 14.50, top: 22.07, position: 'absolute', background: '#5A9DED'}}></div>
                            <div style={{width: 14.50, height: 16.91, left: 0, top: 22.07, position: 'absolute', background: '#53D3E0'}}></div>
                            <div style={{width: 9.94, height: 5.96, left: 16.34, top: 14.34, position: 'absolute', background: '#5A9DED'}}></div>
                            <div style={{width: 9.94, height: 5.96, left: 2.72, top: 14.34, position: 'absolute', background: '#53D3E0'}}></div>
                            <div style={{width: 14.50, height: 27.38, left: 14.50, top: 0, position: 'absolute', background: '#53D3E0'}}></div>
                            <div style={{width: 14.50, height: 27.38, left: 0, top: 0, position: 'absolute', background: '#5A9DED'}}></div>
                        </div>
                        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 2, display: 'flex'}}>
                            <div style={{color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>10.000</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 42, display: 'inline-flex'}}>
                <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 2, display: 'flex'}}>
                    <div style={{color: '#FFFCFC', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word'}}>Renews at </div>
                    <div style={{width: 19, height: 19, position: 'relative'}}>
                        <div style={{width: 19, height: 19, left: 0, top: 0, position: 'absolute'}}>
                            <div style={{width: 19, height: 19, left: 0, top: 0, position: 'absolute', background: '#3D3E40'}}></div>
                            <div style={{width: 13.06, height: 12.47, left: 2.97, top: 3.27, position: 'absolute'}}>
                                <div style={{width: 4.85, height: 8.68, left: 4.07, top: 1.87, position: 'absolute', background: 'white'}}></div>
                                <div style={{width: 13.06, height: 12.47, left: 0, top: 0, position: 'absolute', background: 'white'}}></div>
                            </div>
                        </div>
                    </div>
                    <div style={{color: '#FFFCFC', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word'}}>12.000</div>
                </div>
                <div style={{justifyContent: 'flex-start', alignItems: 'flex-end', gap: 6, display: 'flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'flex-end', display: 'flex'}}>
                        <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 2, display: 'flex'}}>
                            <div style={{color: '#FFFCFC', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word'}}>Renews at </div>
                        </div>
                        <div style={{width: 14, height: 18, position: 'relative'}}>
                            <div style={{width: 7, height: 7.80, left: 7, top: 10.19, position: 'absolute', background: '#3D3E40'}}></div>
                            <div style={{width: 7, height: 7.80, left: 0, top: 10.19, position: 'absolute', background: '#3D3E40'}}></div>
                            <div style={{width: 4.80, height: 2.75, left: 7.89, top: 6.62, position: 'absolute', background: '#3D3E40'}}></div>
                            <div style={{width: 4.80, height: 2.75, left: 1.31, top: 6.62, position: 'absolute', background: '#3D3E40'}}></div>
                            <div style={{width: 7, height: 12.64, left: 7, top: 0, position: 'absolute', background: '#3D3E40'}}></div>
                            <div style={{width: 7, height: 12.64, left: 0, top: 0, position: 'absolute', background: '#3D3E40'}}></div>
                        </div>
                        <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 2, display: 'flex'}}>
                            <div style={{color: '#FFFCFC', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word'}}>12.000</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> */}