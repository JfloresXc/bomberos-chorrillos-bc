import React from 'react';

const IconWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "w-8 h-8" }) => (
    <div className={className}>{children}</div>
);

export const SirenIcon: React.FC<{ className?: string }> = ({ className }) => (
    <IconWrapper className={className}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 10.5c.092.55.263 1.09.493 1.616a7.47 7.47 0 01.548 1.078 7.471 7.471 0 00.548 1.078c.23.527.401 1.066.493 1.616M12 21a2.25 2.25 0 01-2.25-2.25H12v2.25z" />
        </svg>
    </IconWrapper>
);

export const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
    <IconWrapper className={className}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
    </IconWrapper>
);

export const PoliceIcon: React.FC<{ className?: string }> = ({ className }) => (
    <IconWrapper className={className}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286z" />
        </svg>
    </IconWrapper>
);

export const HospitalIcon: React.FC<{ className?: string }> = ({ className }) => (
    <IconWrapper className={className}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    </IconWrapper>
);

export const RedCrossIcon: React.FC<{ className?: string }> = ({ className }) => (
     <IconWrapper className={className}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
    </IconWrapper>
);

export const FireTruckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <IconWrapper className={className}>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v4.5m0-4.5h4.5m-4.5 0H7.5m1.5-6.375c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125H9.375A1.125 1.125 0 018.25 9.375v-1.5A1.125 1.125 0 019.375 6.75h1.5zm6.375 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-1.5A1.125 1.125 0 0115 9.375v-1.5A1.125 1.125 0 0116.125 6.75h1.5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 12.75c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C9.375 17.66 8.535 18.5 7.5 18.5h-1.125a1.875 1.875 0 01-1.875-1.875V12.75z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.625 12.75c0-1.036-.84-1.875-1.875-1.875h-.375a3.75 3.75 0 00-3.75 3.75v1.875c0 .99.84 1.875 1.875 1.875h1.125a1.875 1.875 0 001.875-1.875V12.75z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.125h17.25" />
        </svg>
    </IconWrapper>
);
