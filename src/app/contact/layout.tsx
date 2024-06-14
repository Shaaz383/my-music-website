;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
        <>
        {children}
        <h1>This is layout test</h1>
        </>
       
  );
}
