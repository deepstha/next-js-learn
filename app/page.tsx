import Link from "next/link";
import ProductCard from "./components/ProductCard";
import Counter from "./components/Counter";


export default function Home() {
  return (
    <main>
      <h1>Hello world</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
      <Counter/>
    </main>
  );
}
