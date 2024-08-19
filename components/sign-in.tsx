// import { signUp } from "@/lib/action";
// import { useActionState } from "react";

// const SignUpForm = () => {
//   const [state, formAction, pending] = useActionState(signUp, undefined);
//   return (
//     <section>
//       <form action={formAction}>
//         <div>
//           <label htmlFor="name">Name</label>
//           <input type="text" id="name" name="name" required />
//         </div>
//         {state?.errors?.name && <p>{state.errors.name}</p>}

//         <div>
//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" name="email" required />
//         </div>
//         {state?.errors?.email && <p>{state.errors.email}</p>}
//         <div>
//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" name="password" required />
//         </div>
//         {state?.errors?.password && (
//           <div>
//             <p>Password must:</p>
//             <ul>
//               {state.errors.password.map((error) => (
//                 <li key={error}>- {error}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//         <button aria-disabled={pending} type="submit">
//           {pending ? "Submitting..." : "Sign up"}
//         </button>
//       </form>
//     </section>
//   );
// };

// export default SignUpForm;



import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("auth0")
      }}
    >
      <button type="submit">Sign in with Auth0</button>
    </form>
  )
} 