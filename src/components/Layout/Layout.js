const Layout = ({ children }) => {
  return (
    <main className='p-5 bg-hero bg-center bg-no-repeat bg-cover h-screen flex flex-col justify-center items-center '>
      {children}
    </main>
  )
}

export default Layout
