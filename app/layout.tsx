// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
title: 'Wiwit Farianto | Web Developer & IT Programmer',
description: 'Professional Web Developer & IT Programmer specializing in Hospital Information Systems (SIMRS)',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className="bg-slate-950 text-slate-100 antialiased">
{children}
</body>
</html>
)
}
