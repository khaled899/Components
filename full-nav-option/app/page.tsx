import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center">Welcome to dpmarket</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-4">Your marketplace for digital products</p>
      </main>
    </div>
  )
}
