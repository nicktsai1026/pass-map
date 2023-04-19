import Header from '@/components/header';
import Footer from '@/components/footer';
import { ThemeProvider } from "next-themes";

const Provider = ({
    children,
}: {
    children: React.ReactNode
}) => {
  return (
    <ThemeProvider attribute='class'>
        <Header />
        <main>{children}</main>
        <Footer />
    </ThemeProvider>
  )
}

export default Provider