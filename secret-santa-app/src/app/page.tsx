import { redirect } from "next/navigation";

export default function Home() {
  return (
     redirect("/home")
    );
}
// import { useRouter } from "next/router";

// export default function Home() {
//   const router = useRouter()
//   return (
//     router.push("/home")
//     );
// }
