
// src/app/page.tsx



//src/app/api/auth/[...nextauth]/authOptions.ts
//import * as React from 'react';
//import { getServerSession } from 'next-auth/react';
import { authOptions } from  "../api/auth/[...nextauth]/authOptions";
import AuthHomeView from '../../sections/AuthHomeView'; // Adjust the path as necessary
import NonAuthHomeView from '../../sections/NonAuthHomeView'; // Adjust the path as necessary
import { getServerSession } from 'next-auth';

export const metadata = { title: 'Domov | ZoskaSnap' };

export default async function Home() {
  const session = await getServerSession(authOptions);

  return session ? <AuthHomeView session={session} /> : <NonAuthHomeView />;
    
  
}





















